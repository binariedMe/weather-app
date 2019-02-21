import React, { Component } from 'react';
import { searchCity, getPreferredCities } from "../../actions";
import { differenceWith } from 'lodash';

export default class Select extends Component {

  constructor(props){
    super(props);
    this.state = {
      cityList: [],
      activeItem: 0,
      isFetching: true,
      searchText: this.props.searchText || '',
      preferredCities: []
    };
  }

  componentDidMount() {
    getPreferredCities()
      .then(res => this.setState({ preferredCities: res || []}))
      .then(() => {
        this.setState({
          isFetching: false,
          cityList: [],
          activeItem: null,
        });
      });
  }

  render() {
    return (
      <div className={this.props.className}>
        <div>
          <div>
            <input className="form-control" type="text" value={this.state.searchText} onChange={e=>this.onChange(e.target.value)}/>
            <div className="btn" onClick={()=>this.onAddItem()}>
              +
            </div>
          </div>
          <ul className="btn-group-vertical" >
            {
              this.state.cityList.length ? this.state.cityList.map((i, ind)=>(
                <li key={ind} className="btn btn-secondary" onClick={()=>this.onSelect(i)}>
                  {
                    i.name
                  }
                </li>
              )) : <li className="btn btn-secondary">
                No data
              </li>
            }
            {
              this.state.isFetching ? <li className="btn btn-secondary">
                Fetching value...
              </li> : null
            }
          </ul>
          <ul>

          </ul>
        </div>
      </div>
    );
  }

  onChange(text){
    this.setState({
      searchText: text
    });
    if(text && text.length >= 3) {

      searchCity(text)
        .then(res => {

          this.setState({
            cityList: differenceWith(res || [], this.state.preferredCities, (a , b) => a.id === b.id)
          });
        });

    } else {
      this.setState({
        cityList: []
      })
    }
  }

  onSelect(item){
    this.setState({
      searchText: item.name,
      activeItem: item
    });
  }
  onAddItem(){
    this.setState({
      searchText: '',
      cityList: []
    }, ()=>{
      this.props.onAddItem(this.state.activeItem)
        .then(() => {
          getPreferredCities()
            .then(res => this.setState({ preferredCities: res || [] }))
        })
    });

  }
}
