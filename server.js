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

passport.use(JWTStrategy);
const app = express();

// Logs requests to the console
// app.use(logger('dev'));

// Parse incoming requests data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(passport.initialize());
app.use(express.json());
app.use('/', require('./routes'));

app.use(errorHandler);

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port ${process.env.PORT}!`);
  });
});
