import { useSQLiteContext } from "expo-sqlite/next";

export type AtualizacoesProps = {
  Handle?: number;
  Versao: string;
  Descricao: string;
  Data?: string;
};

export function dbo_Atualizacoes() {
  const database = useSQLiteContext();

  async function create(atualizacao: AtualizacoesProps) {
    try {
      const statement = database.prepareSync(
        `INSERT INTO Atualizacoes
          (Versao, Descricao, Data)
         VALUES
          (?, ?, ?)`
      );

      statement.executeSync([
        atualizacao.Versao,
        atualizacao.Descricao,
        atualizacao.Data ?? new Date().toISOString(),
      ]);

      console.log("Atualização --> ", "Novo registro inserido com sucesso!");
    } catch (error) {
      console.error("Erro ao criar ou atualizar registro:", error);
      throw error;
    }
  }

  function all() {
    try {
      return database.getAllSync<AtualizacoesProps>(
        `SELECT * FROM Atualizacoes`
      );
    } catch (error) {
      console.error("Erro ao obter todos os registros:", error);
      throw error;
    }
  }

  function search(handle: string) {
    try {
      const statement = database.prepareSync(
        `SELECT * FROM Atualizacoes WHERE Handle = $handle`
      );
      const result = statement.executeSync<AtualizacoesProps>({
        $handle: handle,
      });
      return result.getFirstSync();
    } catch (error) {
      console.error("Erro ao buscar atualização:", error);
      throw new Error(`Erro ao buscar atualização: ${error}`);
    }
  }

  return { create, all, search };
}
