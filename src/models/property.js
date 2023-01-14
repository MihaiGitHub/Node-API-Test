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

const PropertyImages = require("./property_images");
const User = require("./user");

const Property = sequelize.define("properties", {
  title: {
    type: Sequelize.STRING,
  },
  property_status: {
    type: Sequelize.STRING,
  },
  property_type: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  features: {
    type: Sequelize.STRING,
  },
  lat: {
    type: Sequelize.FLOAT,
  },
  lng: {
    type: Sequelize.FLOAT,
  },
  price: {
    type: Sequelize.STRING,
  },
  bedrooms: {
    type: Sequelize.STRING,
  },
  bathrooms: {
    type: Sequelize.STRING,
  },
  garages: {
    type: Sequelize.STRING,
  },
  build_size: {
    type: Sequelize.STRING,
  },
  video: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  lang: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
});

Property.hasMany(PropertyImages, { foreignKey: "pid" });
Property.belongsTo(User, { foreignKey: "uid" });

Property.sync();

module.exports = Property;
