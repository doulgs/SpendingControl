import { useSQLiteContext } from "expo-sqlite/next";

export type UsuarioProps = {
  Handle?: number;
  HandleWeb?: number;
  Apelido: string;
  Nome: string;
  Telefone: string;
  Email: string;
  Senha: string;
  Tema?: string;
  Ativo?: number;
  Created_at?: string;
  Updated_at?: string;
  VersaoSistema?: string;
};

export function dbo_Usuario() {
  const database = useSQLiteContext();

  async function create(usuario: UsuarioProps) {
    try {
      const statement = database.prepareSync(
        `INSERT INTO Usuario
          (Apelido, Nome, Telefone, Email, Senha, Tema, Ativo, VersaoSistema)
         VALUES
          (?, ?, ?, ?, ?, ?, ?, ?)`
      );

      statement.executeSync([
        usuario.Apelido,
        usuario.Nome,
        usuario.Telefone,
        usuario.Email,
        usuario.Senha,
        usuario.Tema ?? "LIGHT",
        usuario.Ativo ?? 1,
        usuario.VersaoSistema ?? "1.0",
      ]);

      console.log("Usuário --> ", "Novo registro inserido com sucesso!");
    } catch (error) {
      console.error("Erro ao criar ou atualizar registro:", error);
      throw error;
    }
  }

  function getAll() {
    try {
      return database.getAllSync<UsuarioProps>(`SELECT * FROM Usuario`);
    } catch (error) {
      console.error("Erro ao obter todos os registros:", error);
      throw error;
    }
  }

  function search(handle: string) {
    try {
      const statement = database.prepareSync(
        `SELECT * FROM Usuario WHERE Handle = $handle`
      );
      const result = statement.executeSync<UsuarioProps>({
        $handle: handle,
      });
      return result.getFirstSync();
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      throw new Error(`Erro ao buscar usuário: ${error}`);
    }
  }

  function searchByEmail(email: string) {
    try {
      const statement = database.prepareSync(
        `SELECT * FROM Usuario WHERE Email = $email`
      );
      const result = statement.executeSync<UsuarioProps>({
        $email: email,
      });
      return result.getFirstSync();
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      throw new Error(`Erro ao buscar usuário: ${error}`);
    }
  }

  return { create, getAll, search, searchByEmail };
}
