
import request from 'request-promise';
import config from '../config';

export default {
  getById: (req, res, next) => {
    const cityId = req.query.cityId || 1270260;
    request({
      "method": "GET",
      "uri": `${config.weather.url}?id=${cityId}&appid=${config.weather.appid}`
    }).then((weatherData => {
      res.send(weatherData);
    }));
  }
}