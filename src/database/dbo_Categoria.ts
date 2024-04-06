import { useSQLiteContext } from "expo-sqlite/next";

export type CategoriaProps = {
  Handle?: number;
  HandleWeb?: number;
  HandleUsuario: number;
  Descricao: string;
  Cor: string;
  Ativo: number;
  Created_at?: string;
  Updated_at?: string;
};

export function dbo_Categoria() {
  const database = useSQLiteContext();

  async function create(categoria: CategoriaProps) {
    try {
      const statement = database.prepareSync(
        `INSERT INTO Categoria
          (HandleUsuario, Descricao, Cor)
         VALUES
          (?, ?, ?)`
      );

      statement.executeSync([
        categoria.HandleUsuario,
        categoria.Descricao,
        categoria.Cor,
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

  function search(handle: string) {
    try {
      const statement = database.prepareSync(
        `SELECT * FROM Categoria WHERE Handle = $handle`
      );
      const result = statement.executeSync<CategoriaProps>({
        $handle: handle,
      });
      return result.getFirstSync();
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
      throw new Error(`Erro ao buscar categoria: ${error}`);
    }
  }

  return { create, all, search };
}
