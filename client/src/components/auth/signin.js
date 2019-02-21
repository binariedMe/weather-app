import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import {signUserIn} from '../../actions';
class Signin extends Component {
    renderAlert(){
        if(this.props.errorMsg) {
            return (
                <div className="alert alert-warning">
                    <strong>Oops! </strong>{this.props.errorMsg}
                </div>
            )
        }
    }
    handleFormSubmit(d) {
        this.props.signUserIn(d)
    }
    render() {
        // console.log('this.props;: ', this.props);
        const {handleSubmit} = this.props;
        return (
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <div className="form-group">
                  <label>Email:</label>
                  <Field
                    type= 'email'
                    name="email"
                    component="input"
                    className="form-control"
                    placeholder="email@email.com"
                    required
                  />
              </div>
              <div className="form-group">
                  <label>Password:</label>
                  <Field
                    type= 'password'
                    name="password"
                    component="input"
                    className="form-control"
                    placeholder="your password"
                    required
                  />
              </div>
              {this.renderAlert()}
              <button type="submit" className="btn border-less pull-right">Sign in</button>
          </form>
        );
    }
}

function mapStateToProps({auth}) {
    return {
        errorMsg: auth.error
    }
}

export default connect(mapStateToProps, {signUserIn})(reduxForm({
    form: 'signin'
})(Signin));