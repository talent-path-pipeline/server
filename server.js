require('dotenv/config');
const express = require('express');
const cors = require('cors');

const { sequelize } = require('./models');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', require('./routes'));

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}!`);
  });
});
