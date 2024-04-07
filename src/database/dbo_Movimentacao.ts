import { useSQLiteContext } from "expo-sqlite/next";

export type MovimentacaoProps = {
  Handle?: number;
  HandleWeb?: number;
  HandleUsuario: number;
  HandleCategoria: number;
  Descricao: string;
  Valor: number;
  Data: string;
  Status: string;
  Created_at?: string;
  Updated_at?: string;
};

export function dbo_Movimentacao() {
  const database = useSQLiteContext();

  async function create(movimentacao: MovimentacaoProps) {
    try {
      const statement = database.prepareSync(
        `INSERT INTO Movimentacao
          (HandleUsuario, HandleCategoria, Descricao, Valor, Data, Status)
         VALUES
          (?, ?, ?, ?, ?, ?)`
      );

      statement.executeSync([
        movimentacao.HandleUsuario,
        movimentacao.HandleCategoria,
        movimentacao.Descricao,
        movimentacao.Valor,
        movimentacao.Data,
        movimentacao.Status,
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

  function search(handle: string) {
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

  function getByUser(handleUser: number) {
    try {
      const statement = database.prepareSync(
        `SELECT * FROM Movimentacao WHERE Handle = $handleUser AND Status LIKE '%pendente%'`
      );
      const result = statement.executeSync<MovimentacaoProps>({
        $handleUser: handleUser,
      });
      return result.getAllSync();
    } catch (error) {
      console.error("Erro ao buscar movimentação:", error);
      throw new Error(`Erro ao buscar movimentação: ${error}`);
    }
  }

  return { create, all, search, getByUser };
}
