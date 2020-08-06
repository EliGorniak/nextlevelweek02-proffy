import knex from "knex";
import path from "path";

// migration - controlam as versões do banco de dados, as alterações que são feitas

const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

export default db;
