const { Sequelize } = require("sequelize");

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
  logging: false
});

const connectDatabase = async () => {
  try {    
    await sequelize.sync();
    console.log("DB Connection success");    
  } catch (error) {
    console.error("DB Connection fail", error);
  }
};

module.exports = { connectDatabase, sequelize };
