const { Sequelize, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//   }
// );
const sequelize = new Sequelize("realestate", "root", "MyNewPass1!", {
  host: "localhost",
  dialect: "mysql",
});

const Message = sequelize.define("messages", {
  uid: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
  },
  subject: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.STRING,
  },
});

Message.sync();

module.exports = Message;
