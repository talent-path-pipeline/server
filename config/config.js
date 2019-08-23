/**
 * config.js
 * This file reads in enviromental variables from
 * .env found in the root directory.
 */
const Sequelize = require('sequelize');

console.log('Creating a database connection.');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false,
  }
);
module.exports = { sequelize, Sequelize };
