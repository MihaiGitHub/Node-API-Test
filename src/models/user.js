const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("realestate", "root", "MyNewPass1!", {
  host: "localhost",
  dialect: "mysql",
  //  dialectModule: require("mysql2"),
});

class User extends Model {}
User.init(
  {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.STRING,
    validated: DataTypes.INTEGER,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    description: DataTypes.TEXT,
    picture: DataTypes.STRING,
    location: DataTypes.STRING,
    lat: DataTypes.STRING,
    lng: DataTypes.STRING,
    phone: DataTypes.STRING,
    fax: DataTypes.STRING,
    license_number: DataTypes.STRING,
    business_name: DataTypes.STRING,
    timestamp: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "user",
    tableName: "users",
  }
);

module.exports = User;
