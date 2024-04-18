import { useSQLiteContext } from "expo-sqlite/next";

export type ContaProps = {
  Handle?: number;
  HandleWeb?: number;
  Nome: string;
  Saldo?: number;
  UsuarioHandle: number;
  Created_at?: string;
  Updated_at?: string;
  VersaoSistema?: string;
};

export function dbo_Conta() {
  const database = useSQLiteContext();

  async function create(conta: ContaProps) {
    try {
      const statement = database.prepareSync(
        `INSERT INTO Conta
          (Nome, Saldo, UsuarioHandle, VersaoSistema)
         VALUES
          (?, ?, ?, ?)`
      );

      statement.executeSync([
        conta.Nome,
        conta.Saldo ?? 0,
        conta.UsuarioHandle,
        conta.VersaoSistema ?? "1.0",
      ]);

      console.log("Conta --> ", "Novo registro inserido com sucesso!");
    } catch (error) {
      console.error("Erro ao criar ou atualizar registro:", error);
      throw error;
    }
  }

  function all() {
    try {
      return database.getAllSync<ContaProps>(`SELECT * FROM Conta`);
    } catch (error) {
      console.error("Erro ao obter todos os registros:", error);
      throw error;
    }
  }

  function search(handle: string) {
    try {
      const statement = database.prepareSync(
        `SELECT * FROM Conta WHERE Handle = $handle`
      );
      const result = statement.executeSync<ContaProps>({
        $handle: handle,
      });
      return result.getFirstSync();
    } catch (error) {
      console.error("Erro ao buscar conta:", error);
      throw new Error(`Erro ao buscar conta: ${error}`);
    }
  }

  return { create, all, search };
}
