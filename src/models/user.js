const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("realestate", "root", "MyNewPass1!", {
  host: "localhost",
  dialect: "mysql",
});

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
