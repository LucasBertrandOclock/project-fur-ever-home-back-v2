import "dotenv/config";
import pg from "pg";
import { Sequelize } from "sequelize";

import errorHandler from "./middlewares/errorHandler.middleware.js";

const database = process.env.DATABASE_URL;

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
