import { useSQLiteContext } from "expo-sqlite/next";

export type CategoriaProps = {
  Handle?: number;
  HandleWeb?: number;
  Nome: string;
  Descricao: string;
  Created_at?: string;
  Updated_at?: string;
  VersaoSistema?: string;
};

export function dbo_Categoria() {
  const database = useSQLiteContext();

  async function create(categoria: CategoriaProps) {
    try {
      const statement = database.prepareSync(
        `INSERT INTO Categoria
          (Nome, Descricao, VersaoSistema)
         VALUES
          (?, ?, ?)`
      );

      statement.executeSync([
        categoria.Nome,
        categoria.Descricao,
        categoria.VersaoSistema ?? "1.0",
      ]);

      console.log("Categoria --> ", "Novo registro inserido com sucesso!");
    } catch (error) {
      console.error("Erro ao criar ou atualizar registro:", error);
      throw error;
    }
  }

  function all() {
    try {
      return database.getAllSync<CategoriaProps>(`SELECT * FROM Categoria`);
    } catch (error) {
      console.error("Erro ao obter todos os registros:", error);
      throw error;
    }
  }

  function buscar_pelo_handle(handle: string) {
    try {
      const statement = database.prepareSync(
        `SELECT * FROM Categoria WHERE Handle = $handle`
      );
      const result = statement.executeSync<CategoriaProps>({
        $handle: handle,
      });

      const resultado = result.getFirstSync();

      if (resultado === null) {
        return { Nome: "Indefinida", Descricao: "Indefinida" };
      }

      return resultado;
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
      throw new Error(`Erro ao buscar categoria: ${error}`);
    }
  }

  return { create, all, buscar_pelo_handle };
}
