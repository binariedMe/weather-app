
import City from '../models/city';

export default {
  search: (req, res, next) => {

    const queryString = req.query.queryString;

    City.find({ name: { "$regex": `${queryString}`, "$options": "i" }}, null, { limit : 8 })
      .then((cities) => {
        res.status(200).send(cities);
      });

  }
}