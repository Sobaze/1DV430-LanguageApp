import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import classnames from 'classnames';


class Login extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        password: '',
        errors: {}
      };
    }

    componentDidMount() {
      if(this.props.auth.isAuthenticated) {
        this.props.history.push('/')
      }
    }

    componentWillReceiveProps(nextProps) {

      if (nextProps.auth.isAuthenticated) {
        this.props.history.push('/')
      }

      if (nextProps.errors) {
          this.setState({
              errors: nextProps.errors
          })
      }
    }

    onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit = e => {
      e.preventDefault();


      const userData = {
        username: this.state.username,
        password: this.state.password
      };
      this.props.loginUser(userData)
    }

    render() {
      const { errors } = this.state;

      return(
      <div className="hiragana-content">
        <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p>To practice kanji lessons you need to be logged in</p>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"
                  className={classnames("", {
                    invalid: errors.username 
                  })}
                />
                <label htmlFor="username">Username</label>
                {/* <span className="red-text">
                  {errors.username}
                  {errors.usernotfound}
                </span> */}
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password 
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                  {errors.username}
                  {errors.usernotfound}
                </span>
              </div>
              <div className="col s12">
                <button
                  style={{
                    backgroundColor: "grey",
                    width: "350px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      );
    }
}

Login.propType = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})


export default connect(
  mapStateToProps,
  { loginUser }
) (Login);
