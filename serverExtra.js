// const { Client } = require('pg');

// const client = new Client({
//   user: 'postgres',
//   password: 'password',
//   host: 'localhost',
//   port: 5432,
//   database: 'postgres',
// });

// client
//   .connect()
//   .then(() => console.log('Connected Successfully'))
//   .then(() => client.query('SELECT * FROM public."Users"'))
//   // .then(results => console.table(results.rows))
//   .then(results => console.log(results))
//   .catch(err => console.error(err.message))
//   .finally(() => client.end());
