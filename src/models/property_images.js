const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("realestate", "root", "MyNewPass1!", {
  host: "localhost",
  dialect: "mysql",
});

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
