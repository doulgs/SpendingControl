import { useSQLiteContext } from "expo-sqlite/next";

export type UsuarioProps = {
  Handle?: number;
  HandleWeb?: number;
  Apelido: string;
  Nome: string;
  Telefone: string;
  Email: string;
  Senha: string;
  Saldo?: number;
  Tema?: string;
  Ativo?: number;
  Created_at?: string;
  Updated_at?: string;
};

export function dbo_Usuario() {
  const database = useSQLiteContext();

  async function create(usuario: UsuarioProps) {
    try {
      const statement = database.prepareSync(
        `INSERT INTO Usuario
          (Apelido, Nome, Telefone, Email, Senha)
         VALUES
          (?, ?, ?, ?, ?)`
      );

      statement.executeSync([
        usuario.Apelido,
        usuario.Nome,
        usuario.Telefone,
        usuario.Email,
        usuario.Senha,
      ]);

      console.log("Usuário --> ", "Novo registro inserido com sucesso!");
    } catch (error) {
      console.error("Erro ao criar ou atualizar registro:", error);
      throw error;
    }
  }

  async function update(usuario: UsuarioProps) {
    try {
      const statement = database.prepareSync(`
        UPDATE Usuario
        SET Apelido = ?, Nome = ?, Telefone = ?, Email = ?, Senha = ?
        WHERE Handle = ?
      `);

      statement.executeSync([
        usuario.Apelido,
        usuario.Nome,
        usuario.Telefone,
        usuario.Email,
        usuario.Senha,
        !usuario.Handle,
      ]);

      console.log("Usuário --> ", "Registro atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar registro:", error);
      throw error;
    }
  }

  function all() {
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

  return { create, update, all, search };
}
