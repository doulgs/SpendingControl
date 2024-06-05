import { useSQLiteContext } from "expo-sqlite/next";

export type MovimentacaoProps = {
  Handle?: number;
  HandleWeb?: number;
  Tipo: string;
  Valor: number;
  Descricao: string;
  Data?: string;
  CategoriaHandle?: number;
  ContaHandle?: number;
  UsuarioHandle: number; // Adicionando a coluna UsuarioHandle
  Created_at?: string;
  Updated_at?: string;
};

type GetSum = {
  Total: number;
};

export function dbo_Movimentacao() {
  const database = useSQLiteContext();

  async function create(movimentacao: MovimentacaoProps) {
    try {
      const statement = database.prepareSync(
        `INSERT INTO Movimentacao
          (Tipo, Valor, Descricao, Data, CategoriaHandle, ContaHandle, UsuarioHandle)
         VALUES
          (?, ?, ?, ?, ?, ?, ?)`
      );

      statement.executeSync([
        movimentacao.Tipo,
        movimentacao.Valor,
        movimentacao.Descricao,
        movimentacao.Data ?? new Date().toISOString(),
        movimentacao.CategoriaHandle || "",
        movimentacao.ContaHandle || "",
        movimentacao.UsuarioHandle,
      ]);

      console.log("Movimentação --> ", "Novo registro inserido com sucesso!");
    } catch (error) {
      console.error("Erro ao criar ou atualizar registro:", error);
      throw error;
    }
  }

  function all() {
    try {
      return database.getAllSync<MovimentacaoProps>(
        `SELECT * FROM Movimentacao`
      );
    } catch (error) {
      console.error("Erro ao obter todos os registros:", error);
      throw error;
    }
  }

  function search(handle: number) {
    try {
      const statement = database.prepareSync(
        `SELECT * FROM Movimentacao WHERE Handle = $handle`
      );
      const result = statement.executeSync<MovimentacaoProps>({
        $handle: handle,
      });
      return result.getFirstSync();
    } catch (error) {
      console.error("Erro ao buscar movimentação:", error);
      throw new Error(`Erro ao buscar movimentação: ${error}`);
    }
  }

  function searchAllByUser(UsuarioHandle: number) {
    try {
      const statement = database.prepareSync(
        `SELECT * FROM Movimentacao WHERE UsuarioHandle = $UsuarioHandle`
      );
      const result = statement.executeSync<MovimentacaoProps>({
        $UsuarioHandle: UsuarioHandle,
      });
      return result.getAllSync();
    } catch (error) {
      console.error("Erro ao buscar movimentação:", error);
      throw new Error(`Erro ao buscar movimentação: ${error}`);
    }
  }

  function getTotalMovimets(UsuarioHandle: number) {
    try {
      const statementIncome = database.prepareSync(
        `SELECT SUM(Valor) as Total FROM Movimentacao WHERE UsuarioHandle = $UsuarioHandle AND Tipo = 'RECEITA'`
      );
      const incomeResult = statementIncome.executeSync<GetSum>({
        $UsuarioHandle: UsuarioHandle,
      });
      const income = incomeResult.getFirstSync();
      const statementExpanse = database.prepareSync(
        `SELECT SUM(Valor) as Total FROM Movimentacao WHERE UsuarioHandle = $UsuarioHandle AND Tipo = 'DESPESA'`
      );
      const expanseResult = statementExpanse.executeSync<GetSum>({
        $UsuarioHandle: UsuarioHandle,
      });
      const expanse = expanseResult.getFirstSync();

      if (income && expanse) {
        return {
          totalIncome: income,
          totalExpanse: expanse,
          totalBalance: income.Total - expanse.Total,
        };
      }
      return null;
    } catch (error) {
      console.error("Erro ao buscar movimentação:", error);
      throw new Error(`Erro ao buscar movimentação: ${error}`);
    }
  }

  return { create, all, search, searchAllByUser, getTotalMovimets };
}
