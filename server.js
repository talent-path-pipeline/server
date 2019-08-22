require('dotenv/config');
// Server and authentication modules
const express = require('express');
const passport = require('passport');
const cors = require('cors');
// Middleware
const JWTStrategy = require('./middleware/passport');
const errorHandler = require('./middleware/errorHandler');
// Database Setup
const { sequelize } = require('./models');

passport.use(JWTStrategy);
const app = express();

app.use(cors());
app.use(passport.initialize());
app.use(express.json());
app.use('/', require('./routes/index.js'));

app.use(errorHandler);

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}!`);
  });
});
