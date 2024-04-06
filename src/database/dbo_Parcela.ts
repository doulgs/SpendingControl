import { useSQLiteContext } from "expo-sqlite/next";

export type ParcelaProps = {
  Handle?: number;
  HandleWeb?: number;
  HandleMovimentacao: number;
  QuantidadeParcela: number;
  ValorParcela: number;
  DataInclusao: string;
  DataVencimento: string;
  DataDaBaixa: string;
  Created_at?: string;
  Updated_at?: string;
};

export function dbo_Parcela() {
  const database = useSQLiteContext();

  async function create(parcela: ParcelaProps) {
    try {
      const statement = database.prepareSync(
        `INSERT INTO Parcela
          (HandleMovimentacao, QuantidadeParcela, ValorParcela, DataInclusao)
         VALUES
          (?, ?, ?, ?)`
      );

      statement.executeSync([
        parcela.HandleMovimentacao,
        parcela.QuantidadeParcela,
        parcela.ValorParcela,
        parcela.DataInclusao,
      ]);

      console.log("Parcela --> ", "Novo registro inserido com sucesso!");
    } catch (error) {
      console.error("Erro ao criar ou atualizar registro:", error);
      throw error;
    }
  }

  function all() {
    try {
      return database.getAllSync<ParcelaProps>(`SELECT * FROM Parcela`);
    } catch (error) {
      console.error("Erro ao obter todos os registros:", error);
      throw error;
    }
  }

  function search(handle: string) {
    try {
      const statement = database.prepareSync(
        `SELECT * FROM Parcela WHERE Handle = $handle`
      );
      const result = statement.executeSync<ParcelaProps>({
        $handle: handle,
      });
      return result.getFirstSync();
    } catch (error) {
      console.error("Erro ao buscar parcela:", error);
      throw new Error(`Erro ao buscar parcela: ${error}`);
    }
  }

  return { create, all, search };
}
