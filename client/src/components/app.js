import React, { Component, Fragment } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="root-elm">
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
