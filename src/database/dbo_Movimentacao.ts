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
  VersaoSistema?: string;
};

export function dbo_Movimentacao() {
  const database = useSQLiteContext();

  async function create(movimentacao: MovimentacaoProps) {
    try {
      const statement = database.prepareSync(
        `INSERT INTO Movimentacao
          (Tipo, Valor, Descricao, Data, CategoriaHandle, ContaHandle, UsuarioHandle, VersaoSistema)
         VALUES
          (?, ?, ?, ?, ?, ?, ?, ?)`
      );

      statement.executeSync([
        movimentacao.Tipo,
        movimentacao.Valor,
        movimentacao.Descricao,
        movimentacao.Data ?? new Date().toISOString(),
        movimentacao.CategoriaHandle || "",
        movimentacao.ContaHandle || "",
        movimentacao.UsuarioHandle,
        movimentacao.VersaoSistema ?? "1.0",
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

  return { create, all, search };
}
