import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    renderSignButton(){
        if (this.props.authenticated){
            return (
              <NavLink to="/signout">Sign out</NavLink>
            )
        }else{
            return (
                <Fragment>
                  <NavLink to="/signin">Sign in</NavLink>
                  <NavLink to="/signup">Sign Up</NavLink>
                </Fragment>
            )
        }
    }
    render() {
        return (
            <header className="bane-top-header">
              <div>
                <NavLink to="/">MERN</NavLink>
                <NavLink to="/account">Account</NavLink>
                <NavLink to="/weather">Weather</NavLink>
              </div>
              <div>
                {this.renderSignButton()}
              </div>
            </header>
        )
    }
}

function mapStateToProps({auth}){
    return {
        authenticated: auth.authenticated
    }
}

export default connect(mapStateToProps, actions)(Header)