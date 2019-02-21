import User from '../models/user';
import City from '../models/city';

export default {
  addCity: (req, res, next) => {
    const userId = req.user._id;
    const cityId = req.query.cityId;
    let preferredCities = req.user.preferredCities || []
    if(!preferredCities.includes(cityId)) {
      preferredCities = preferredCities.concat(cityId);
    }
    const newProfile = {
      preferredCities
    };

    User.findByIdAndUpdate(userId, newProfile, {new: false})
      .then(() => {
        return City.find({ id: { $in: preferredCities }});
      })
      .then(cities => {
        res.status(200).send(cities);
      });
  },

  removeCity: (req, res, next) => {
    const userId = req.user._id;
    const cityId = req.query.cityId;
    let preferredCities = req.user.preferredCities || [];
    let indexOfCityToBeRemoved = preferredCities.indexOf(cityId);
    if(indexOfCityToBeRemoved !== -1) {
      preferredCities.splice(indexOfCityToBeRemoved, 1);
    }
    const newProfile = {
      preferredCities
    };

    User.findByIdAndUpdate(userId, newProfile, {new: false})
      .then(() => {
        return City.find({ id: { $in: preferredCities }});
      })
      .then(cities => {
        res.status(200).send(cities);
      });
  },

  getPreferredCities: (req, res, next) => {
    const userId = req.user._id;
    User.findById(userId).then((user) => {
      const preferredCityIds = user.preferredCities;

      City.find({ id: { $in: preferredCityIds }})
        .then((cities) => {
          res.status(200).send(cities);
        });
    })
  }
}