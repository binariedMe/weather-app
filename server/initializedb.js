const mongoose = require('mongoose');
const cities = require('../city.list');

mongoose.connect('mongodb://localhost/mern-stack', { useMongoClient: true })
  .then((con) => {

    const db = con.db;
    return db.collection('cities').insertMany(cities);
  })
  .then(() => {
    mongoose.connection.close();
    console.log("connection closed");
  })
  .catch(err=>console.error(err));
