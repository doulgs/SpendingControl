import { SQLiteDatabase } from "expo-sqlite/next";

export async function databaseInit(database: SQLiteDatabase) {
  await database.execAsync(`
    PRAGMA journal_mode = 'wal';

    CREATE TABLE IF NOT EXISTS Usuario (
      Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      HandleWeb INTEGER DEFAULT 0,
      Apelido TEXT,
      Nome TEXT,
      Telefone TEXT,
      Email TEXT,
      Senha TEXT,
      Saldo REAL DEFAULT 0,
      Tema TEXT,
      Ativo INTEGER DEFAULT 1,
      Created_at DEFAULT CURRENT_TIMESTAMP,
      Updated_at DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS Categoria (
      Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      HandleWeb INTEGER DEFAULT 0,
      HandleUsuario INTEGER,
      Descricao TEXT,
      Cor TEXT,
      Ativo INTEGER DEFAULT 1,
      Created_at DEFAULT CURRENT_TIMESTAMP,
      Updated_at DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS Movimentacao (
      Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      HandleWeb INTEGER DEFAULT 0,
      HandleUsuario INTEGER,
      HandleCategoria INTEGER,
      Descricao TEXT,
      Valor REAL,
      Data TEXT,
      Status TEXT,
      Created_at DEFAULT CURRENT_TIMESTAMP,
      Updated_at DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS Parcela (
      Handle INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      HandleWeb INTEGER DEFAULT 0,
      HandleMovimentacao INTEGER,
      QuantidadeParcela INTEGER NOT NULL,
      ValorParcela REAL NOT NULL,
      DataInclusao TEXT NOT NULL,
      DataVencimento TEXT,
      DataDaBaixa TEXT,
      Created_at DEFAULT CURRENT_TIMESTAMP,
      Updated_at DEFAULT CURRENT_TIMESTAMP
    );
  `);
}
