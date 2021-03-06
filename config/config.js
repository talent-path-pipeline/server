/**
 * config.js
 * This file reads in enviromental variables from
 * .env found in the root directory.
 */
const Sequelize = require('sequelize');

console.log('Creating a database connection.');

// const sequelize = new Sequelize(
//   process.env.DATABASE,
//   process.env.DATABASE_USER,
//   process.env.DATABASE_PASSWORD,
//   {
//     host: process.env.DATABASE_URL,
//     dialect: 'postgres',
//     logging: false,
//   }
// );

// const sequelize = new Sequelize({
//   host: process.env.DATABASE_URL,
//   dialect: 'postgres',
//   logging: false,
// });

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  timestamps: false,
  logging: false,

  dialectOptions: {
    ssl: process.env.DB_SSL !== 'false',
  },

  pool: {
    max: 20,
    min: 0,
    idle: 5000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = { sequelize, Sequelize };
