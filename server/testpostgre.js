const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'test',
  port: 5432,
});

pool.connect().catch(err => console.log(err))
  .then(() => {

    //pool.query('CREATE TABLE user ()')




  });
