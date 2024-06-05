import { SQLiteDatabase } from "expo-sqlite/next";
import { ToastAndroid } from "react-native";

export async function databaseInit(database: SQLiteDatabase) {
  try {
    await database.execAsync(`PRAGMA journal_mode = 'wal';`);

    const tableDefinitions = {
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
        "VersaoSistema TEXT DEFAULT '1.0'",
      ],
      Categoria: [
        "Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
        "HandleWeb INTEGER DEFAULT 0",
        "Nome TEXT",
        "Descricao TEXT",
        "Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        "Updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        "VersaoSistema TEXT DEFAULT '1.0'",
      ],
      Conta: [
        "Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
        "HandleWeb INTEGER DEFAULT 0",
        "Nome TEXT",
        "Saldo REAL DEFAULT 0",
        "UsuarioHandle INTEGER",
        "Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        "Updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        "VersaoSistema TEXT DEFAULT '1.0'",
        "FOREIGN KEY (UsuarioHandle) REFERENCES Usuario(Handle) ON DELETE CASCADE ON UPDATE CASCADE",
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
        "VersaoSistema TEXT DEFAULT '1.0'",
        "FOREIGN KEY (CategoriaHandle) REFERENCES Categoria(Handle) ON DELETE SET NULL ON UPDATE CASCADE",
        "FOREIGN KEY (ContaHandle) REFERENCES Conta(Handle) ON DELETE CASCADE ON UPDATE CASCADE",
        "FOREIGN KEY (UsuarioHandle) REFERENCES Usuario(Handle) ON DELETE CASCADE ON UPDATE CASCADE",
      ],
      Parametros: [
        "Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
        "Descricao TEXT",
        "Valor TEXT",
        "Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        "Updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        "VersaoSistema TEXT DEFAULT '1.0'",
      ],
      Atualizacoes: [
        "Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
        "Versao TEXT",
        "Descricao TEXT",
        "Data TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        "VersaoSistema TEXT DEFAULT '1.0'",
      ],
    };

    for (const [tableName, columns] of Object.entries(tableDefinitions)) {
      const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns.join(
        ", "
      )});`;
      await database.execAsync(createTableQuery);
    }

    ToastAndroid.show(`Banco de Dados iniciado.`, ToastAndroid.LONG);
  } catch (error) {
    console.error(`Erro ao inicializar banco de dados: ${error}`);
  }
}
