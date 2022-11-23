import React, { Component } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';



const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar, .navbar-light .nav-link, infoLinks {
    &:hover {color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .theUser {
    margin-right: 10px;
    margin-top: 5px;
    font-size: 20px;
  }
  .theUser a:hover {
    display: none;
  }
  .logoutButton {
    margin-top: 20px;
    margin-right: 10px
    background-color: #222;
    margin-left:10px;
    color: #9FFFCB;
    border-color: #9FFFCB;
  }
`;




class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.test = 'hej'
  }
  // componentDidMount() {
  //   if(this.props.auth.isAuthenticated){
  //     this.notLoggedIn()
  //   } else {
  //     this.loggedIn()
  //   }
  // }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth

    if(user.username === undefined) {
      return (
        <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">Nihongo School!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              
              <Nav.Item><Nav.Link className="infoLinks" href="/about">About</Nav.Link></Nav.Item>
                {/* <Nav.Item><Nav.Link href="/Logout">Logout</Nav.Link> </Nav.Item> */}
              <Nav.Item><Nav.Link className="infoLinks" href="/Login">Login</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link className="infoLinks" href="/Register">Register</Nav.Link> </Nav.Item>
    
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
      )
    } else {
      console.log(user.username)
      return (
        <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">Nihongo School!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item className="theUser"> {user.username} </Nav.Item>
              <Nav.Item><Nav.Link className="infoLinks" href="/about">About</Nav.Link></Nav.Item>
                {/* <Nav.Item><Nav.Link className="infoLinks" href="/Logout">Logout</Nav.Link> </Nav.Item> */}
                <Button className="logoutButton" onClick={this.onLogoutClick}>Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
        )
    }
  }
}

NavigationBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser }) (NavigationBar);
// export default NavigationBar