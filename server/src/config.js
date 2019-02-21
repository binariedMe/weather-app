import dotenv from 'dotenv';
import path from 'path';

  dotenv.config({ path: path.resolve(__dirname, '.env') });

module.exports = {
  jwt_secret: process.env.JWT_SECRET || 'unsafe_jwt_secret',
  mongoose: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/mern-stack'
  },
  postgresConfig: {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'test',
    port: 5432,
  },
  weather: {
    url: 'https://api.openweathermap.org/data/2.5/weather',
    appid: '0a35bfd4bea6319abf54c1693e69b89c\n'
  }
};
