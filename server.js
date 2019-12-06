/* eslint-disable no-console */
require('dotenv/config');
// Server and authentication modules
const express = require('express');
const passport = require('passport');
const cors = require('cors');
// Middleware
const JWTStrategy = require('./middleware/passport');
const errorHandler = require('./middleware/errorHandler');
// Database Setup
const { sequelize } = require('./config/config');
const { seedContent } = require('./db/seedContent');
const DM_PATH = require('./db/DM_PATH_PLAN');

passport.use(JWTStrategy);
const app = express();

app.use(cors());
app.use(passport.initialize());
app.use(express.json());
app.use('/', require('./routes'));

app.use(errorHandler);

function startServer() {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
  });
}

sequelize.sync({ force: process.env.FORCE_SYNC === 'true' }).then(async () => {
  console.log(`Database tables created/synced`);
  if (process.env.SEEDING === 'true') {
    await seedContent([DM_PATH]);
  }
  startServer();
});
