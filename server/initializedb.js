const mongoose = require('mongoose');
const cities = require('../city.list');

mongoose.connect('mongodb://binariedme:Nothing%40143@ds147225.mlab.com:47225/heroku_wn4gb2f6', { useMongoClient: true })
  .then((con) => {

    const db = con.db;
    return db.collection('cities').insertMany(cities);
  })
  .then(() => {
    mongoose.connection.close();
    console.log("connection closed");
  })
  .catch(err=>console.error(err));
