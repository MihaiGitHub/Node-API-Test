const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const User = sequelize.define("users", {
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.STRING,
  },
  validated: {
    type: Sequelize.INTEGER,
  },
  fname: {
    type: Sequelize.STRING,
  },
  lname: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  picture: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  lat: {
    type: Sequelize.STRING,
  },
  lng: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  fax: {
    type: Sequelize.STRING,
  },
  license_number: {
    type: Sequelize.STRING,
  },
  business_name: {
    type: Sequelize.STRING,
  },
  timestamp: {
    type: Sequelize.DATE,
  },
});

User.sync();

module.exports = User;
