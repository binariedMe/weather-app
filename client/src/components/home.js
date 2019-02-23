import React, {Component} from 'react';
import Select from './forms/select';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {addCity, getPreferredCities, removeCity} from '../actions/index';

const VIEW_ENUM = {
  SEARCH_CITY: 'SEARCH_CITY', SELECT_CITY: 'SELECT_CITY'
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      SEARCH_CITY: true,
      SELECT_CITY: window.innerWidth > 768,
    };
    this.handelResize = this.handelResize.bind(this);
    this.toggleCityView = this.toggleCityView.bind(this);
  }


  componentDidMount() {
    getPreferredCities()
      .then((res) => {
        this.setState({
          cityList: res || []
        });
      });
    window.addEventListener("resize", this.handelResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handelResize);
  }

  handelResize(){
    this.toggleCityView(this.state.SEARCH_CITY ? VIEW_ENUM.SELECT_CITY : VIEW_ENUM.SEARCH_CITY);
  }
  toggleCityView (view){
    let isSmall = window.innerWidth < 769;
    this.setState({
      SEARCH_CITY: isSmall ? (view === VIEW_ENUM.SELECT_CITY) : true,
      SELECT_CITY: isSmall ? (view === VIEW_ENUM.SEARCH_CITY) : true
    })
  }


  render() {
    return (
      <div className="bane-home">
        {
          this.state.SEARCH_CITY ?
            (
              <Select url="/api/city/search" queryString="" onAddItem={item => this.onAddItem(item)}
                      className="bane-select">
                <button className="btn-lg" onClick={()=>this.toggleCityView(VIEW_ENUM.SEARCH_CITY)}>
            <span>
              Select City
            </span>
                  <span> &gt; </span>
                </button>
              </Select>
            ) : null
        }
        {
          this.state.SELECT_CITY ? (
            <div className="bane-select">
              <div>
                <div className="btn-group-vertical bane-no-bg">
                  <div className="btn btn-secondary">
                    {
                      this.state.cityList.length ? 'Selected City' : 'No city selected'
                    }
                  </div>
                </div>
                <ul className="btn-group-vertical bane-no-bg bane-city-list">
                  {
                    this.state.cityList.map((city, ind) => {
                      return <li className="btn btn-secondary flex-menu" key={ind}>
                        <a href={"#/weather/" + city.id}>
                          {
                            city.name
                          }
                        </a>
                        <button onClick={() => this.onRemoveItem(city)}>X</button>
                      </li>
                    })
                  }
                </ul>
              </div>
              <button className="btn-lg" onClick={()=>this.toggleCityView(VIEW_ENUM.SELECT_CITY)}>
                <span> &lt; </span>
                <span>
              Search City
            </span>
              </button>
            </div>
          ) : null
        }
      </div>
    );
  }

  onRemoveItem(item) {
    return removeCity(item)
      .then((res) => {
        this.setState({
          cityList: res
        })
      })
  }

  onAddItem(item) {
    return addCity(item)
      .then((res) => {
        this.setState({
          cityList: res
        });
      });

  }

  getPreferredCities() {
    if (!this.state.cityList) {

    }
  }

}
