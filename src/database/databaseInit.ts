import * as SQLite from "expo-sqlite";
import { SQLiteDatabase } from "expo-sqlite/next";
import { ToastAndroid } from "react-native";

/**
 * Controle de versão do Banco de Dados.
 * Sempre deve ser alterado quando houver qualquer modificação no Banco de Dados.
 * @RealiseDatabaseVersion Determina a versão do Banco de Dados.
 */
export const RealiseDatabaseVersion = "1.0.0";

/**
 * Interface para definir o tipo de retorno de PRAGMA table_info.
 */
interface TableInfo {
  cid: number;
  name: string;
  type: string;
  notnull: number;
  dflt_value: any;
  pk: number;
}

/**
 * Função para obter informações da tabela
 */
export const getTableInfo = (tableName: string): Promise<TableInfo[]> => {
  return new Promise((resolve, reject) => {
    const db = SQLite.openDatabase("spendingcontrol.db");
    db.transaction((tx) => {
      tx.executeSql(
        `PRAGMA table_info(${tableName});`,
        [],
        (_, result) => {
          const info: TableInfo[] = result.rows._array;
          resolve(info);
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

/**
 * Função para adicionar colunas faltantes
 */
const addMissingColumns = async (
  database: SQLiteDatabase,
  tableName: string,
  columns: string[]
) => {
  const existingColumns = await getTableInfo(tableName);
  const existingColumnNames = existingColumns.map((col) => col.name);

  for (const column of columns) {
    const columnName = column.split(" ")[0];
    if (!existingColumnNames.includes(columnName)) {
      const addColumnQuery = `ALTER TABLE ${tableName} ADD COLUMN ${column};`;
      console.log("Script Executed: " + addColumnQuery);
      await database.execAsync(addColumnQuery);
    } else {
      console.log(`Coluna ${columnName} já existe na tabela ${tableName}.`);
    }
  }
};

export async function databaseInit(database: SQLiteDatabase) {
  try {
    await database.execAsync(`PRAGMA journal_mode = 'wal';`);

    const colunsTableAtualizacoes = [
      "Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
      "Versao TEXT",
      "Descricao TEXT",
      "Data TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      "Version_DataBase TEXT",
    ];

    const tableDefinitions: { [key: string]: string[] } = {
      Atualizacoes: colunsTableAtualizacoes,
      Usuario: [
        "Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
        "HandleWeb INTEGER DEFAULT 0",
        "Apelido TEXT",
        "Nome TEXT",
        "Telefone TEXT",
        "Email TEXT",
        "Senha TEXT",
        "Tema TEXT DEFAULT 'LIGHT'",
        "Ativo INTEGER DEFAULT 1",
        "Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        "Updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      ],
      Categoria: [
        "Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
        "HandleWeb INTEGER DEFAULT 0",
        "Nome TEXT",
        "Descricao TEXT",
        "Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        "Updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      ],
      Conta: [
        "Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
        "HandleWeb INTEGER DEFAULT 0",
        "Nome TEXT",
        "Saldo REAL DEFAULT 0",
        "UsuarioHandle INTEGER",
        "Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        "Updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      ],
      Movimentacao: [
        "Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
        "HandleWeb INTEGER DEFAULT 0",
        "Tipo TEXT DEFAULT 'ABERTA'",
        "Valor REAL",
        "Descricao TEXT",
        "Data TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        "CategoriaHandle INTEGER",
        "UsuarioHandle INTEGER",
        "ContaHandle INTEGER",
        "Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        "Updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      ],
      Parametros: [
        "Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
        "Descricao TEXT",
        "Valor TEXT",
        "Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        "Updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      ],
    };

    for (const [tableName, columns] of Object.entries(tableDefinitions)) {
      const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns.join(
        ", "
      )});`;
      await database.execAsync(createTableQuery);
    }

    await addMissingColumns(database, "Atualizacoes", colunsTableAtualizacoes);
    const db_version = database.getFirstSync<{
      Version_DataBase: string;
    }>(`SELECT Version_DataBase FROM Atualizacoes LIMIT 1`);

    if (
      db_version === null ||
      db_version?.Version_DataBase === "" ||
      db_version?.Version_DataBase === null ||
      db_version?.Version_DataBase !== RealiseDatabaseVersion
    ) {
      for (const [tableName, columns] of Object.entries(tableDefinitions)) {
        await addMissingColumns(database, tableName, columns);
      }
      const statement = database.prepareSync(
        `UPDATE Atualizacoes SET Version_DataBase = ? WHERE rowid = 1`
      );
      statement.executeSync([RealiseDatabaseVersion]);
      console.log(
        "Banco de Dados alterado para a version: ",
        RealiseDatabaseVersion
      );
    } else {
      console.log("Banco de Dados já está na versão: ", RealiseDatabaseVersion);
    }
    ToastAndroid.show(`Banco de Dados iniciado.`, ToastAndroid.LONG);
  } catch (error) {
    console.error(`Erro ao inicializar banco de dados: ${error}`);
  }
}
