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

const PropertyImages = sequelize.define("properties_images", {
  uid: {
    type: Sequelize.INTEGER,
  },
  pid: {
    type: Sequelize.STRING,
  },
  url: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.INTEGER,
  },
});

PropertyImages.sync();

module.exports = PropertyImages;
