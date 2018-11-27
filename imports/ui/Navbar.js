import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Signup from './accounts/Signup.js';
import Login from './accounts/Login.js';


class Navbar extends Component{

	render(){
		return(
			<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <h5><a  id="icon" href="/">
          <span class="glyphicon glyphicon-home"></span> 
        Home</a></h5>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="/about">ABOUT</a></li>
        <li><a href="signup">SERVICES</a></li>
        <li><a href="/login">APPLY NOW...</a></li>
        {/* <li><a href="#pricing">PRICING</a></li> */}
        <li><a href="/contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>

		)
	}
}

export default Navbar
