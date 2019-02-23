import React, {Component} from 'react';
import cns from 'classnames'
import {getWeatherById} from '../actions/index';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
  }


  componentDidMount() {

    // Default city is the capital of my country
    // We can instead have user's profile updated with country and hence the capital
    // so that we don't have this hard coded value.

    this.props.match.params.id = this.props.match.params.id || 1273293;
    getWeatherById(this.props.match.params.id)
      .then(weather => {
        this.setState({
          weather
        });
      });

  }

  static getTemp(temp) {
    return Math.round(((parseInt(temp) || 0 )-32 )*5/9)
  }

  static getTime(time) {
    time = new Date(time);
    return time.getHours() + ' : ' + time.getMinutes()
  }

  render() {
    const date = new Date();
    return (
      this.state.weather ? (
        <div className="bane-weather-p">
          <div className="bane-weather">
            <div>
              <img src="assets/img/cloud.png"/>
              <div className="very-small">{this.state.weather.weather[0].description}</div>
            </div>
            <div>
              <div>{date.getDate() > 9 ? date.getDate() : '0' + date.getDate()}</div>
              <div>{date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)}</div>
              <div className={`bane-weather-name ${this.state.weather.name && this.state.weather.name.length > 20 ? 'bane-more-text' : ''}`}>{this.state.weather.name}</div>
            </div>
            <div>
              <div>
                <img src="assets/img/meter.png"/>
                <div className="small">{Weather.getTemp(this.state.weather.main.temp)}° C</div>
              </div>
              <div>
                <img src="assets/img/sunrise.png"/>
                <div className="small">{Weather.getTime(this.state.weather.sys.sunrise)}</div>
              </div>
              <div>
                <img src="assets/img/sunset.png"/>
                <div className="small">{Weather.getTime(this.state.weather.sys.sunset)}</div>
              </div>
            </div>
          </div>
        </div>
        ) : (
        <div>
          Loading...
        </div>
      )
    );
  }
}
