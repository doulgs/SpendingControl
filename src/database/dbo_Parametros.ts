import { useSQLiteContext } from "expo-sqlite/next";

export type ParametrosProps = {
  Handle?: number;
  Descricao: string;
  Valor: string;
  Created_at?: string;
  Updated_at?: string;
  VersaoSistema?: string;
};

export function dbo_Parametros() {
  const database = useSQLiteContext();

  async function create(parametros: ParametrosProps) {
    try {
      const statement = database.prepareSync(
        `INSERT INTO Parametros
          (Descricao, Valor, VersaoSistema)
         VALUES
          (?, ?, ?)`
      );

      statement.executeSync([
        parametros.Descricao,
        parametros.Valor,
        parametros.VersaoSistema ?? "1.0",
      ]);

      console.log("Parâmetro --> ", "Novo registro inserido com sucesso!");
    } catch (error) {
      console.error("Erro ao criar ou atualizar registro:", error);
      throw error;
    }
  }

  function all() {
    try {
      return database.getAllSync<ParametrosProps>(`SELECT * FROM Parametros`);
    } catch (error) {
      console.error("Erro ao obter todos os registros:", error);
      throw error;
    }
  }

  function search(handle: string) {
    try {
      const statement = database.prepareSync(
        `SELECT * FROM Parametros WHERE Handle = $handle`
      );
      const result = statement.executeSync<ParametrosProps>({
        $handle: handle,
      });
      return result.getFirstSync();
    } catch (error) {
      console.error("Erro ao buscar parâmetro:", error);
      throw new Error(`Erro ao buscar parâmetro: ${error}`);
    }
  }

  return { create, all, search };
}
