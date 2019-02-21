import React, { Component } from 'react';
import Select from './forms/select';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {addCity, getPreferredCities, removeCity } from '../actions/index';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityList: []
    };
  }


  componentDidMount() {
    getPreferredCities()
      .then((res) => {
        this.setState({
          cityList: res || []
        });
      });
  }



  render() {
    return (
      <div className="bane-home">
        <Select url="/api/city/search" queryString="" onAddItem={item=>this.onAddItem(item)} className="bane-select"/>
        <div className="bane-select">
          <div>
            <div className="btn-group-vertical bane-no-bg">
              <div className="btn btn-secondary">
                {
                  this.state.cityList.length ? 'Selected City' : 'No city selected'
                }
              </div>
            </div>
            <ul className="btn-group-vertical bane-no-bg">
              {
                this.state.cityList.map((city,ind)=>{
                  return <li className="btn btn-secondary flex-menu" key={ind}>
                    <a href={"#/weather/"+city.id}>
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
        </div>
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

  onAddItem(item){
    return addCity(item)
      .then((res) => {
        this.setState( {
          cityList: res
        });
      });

  }

  getPreferredCities() {
    if(!this.state.cityList) {

    }
  }

}
