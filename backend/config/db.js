const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

//Create connection with the database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

//Test the connection to the database
const checkDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database successfully!");
  } catch (err) {
    console.log("Error in connecting to the database:", err);
  }
};
checkDbConnection();

//Define the db object for further use in project
const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
};

//Sync the tables with the database
const syncAllTables = async () => {
  try {
    await db.sequelize.sync();
    console.log("Synced all the tables with database successfully!");
  } catch (err) {
    console.log("Error in syncing the tables:", err);
  }
};
syncAllTables();

//Register the models with the db object
db.role = require("../models/role")(sequelize, DataTypes);
db.user = require("../models/user")(sequelize, DataTypes);
db.meal = require("../models/meal")(sequelize, DataTypes);

//Create associations between the models
db.role.hasMany(db.user, { foreignKey: "roleId" });
db.user.hasMany(db.meal, { foreignKey: "userId" });

module.exports = db;
