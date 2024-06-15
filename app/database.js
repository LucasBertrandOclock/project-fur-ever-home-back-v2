import "dotenv/config";
import pg from "pg";

import errorHandler from "./middlewares/errorHandler.middleware";

import { Sequelize } from "sequelize";

const database = process.env.PG_URL;

console.log(database);
console.log(typeof database);

export const sequelize = new Sequelize(database, {
  dialectModule: pg,
  define: {
    timestamps: false,
  },
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  errorHandler._500(error, req, res);
}

export default sequelize;
