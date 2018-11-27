import React, {Component } from 'react';
import {meteor} from 'meteor/meteor';


class Signup extends React.Component{

	render(){
		return(
			<div id="login">
      <h1 id="green">SERVICES</h1>
      <div id="br"> </div>
  <h4 id="orange">What we offer</h4>
<div class="container"> 
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    {/* <!-- Indicators --> */}
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>

    {/* <!-- Wrapper for slides --> */}
    <div class="carousel-inner">
      <div class="item active">
        <img src="images/imgcar1.png" width="100%;"/>
      </div>

      <div class="item">
        <img src="images/imgcar2.png" width="100%;"/>
      </div>
    
      <div class="item">
        <img src="images/imgcar3.png" width="100%;"/>
      </div>

      <div class="item">
        <img src="images/imgcar4.png" width="100%;"/>
      </div>
    </div>

    {/* <!-- Left and right controls --> */}
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

<div id="contact" class="container-fluid bg-grey">
  <div class="row">
    <div class="col-sm-5">
    <img src="images/Dell-XPS15-review-power-button-macro.jpg" class="img-circle" width="354" height="354"/>
    </div>
    <div class="col-sm-7 slideanim">
      <div class="row">
      <span class="glyphicon glyphicon-off logo-small"></span>
      <h4 id="orange">POWER</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna 
         aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
         ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
           nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
      </div>
    </div>
  </div>
</div>
<div id="contact" class="container-fluid bg-grey">
  <div class="row">
    <div class="col-sm-7 slideanim">
    <span class="glyphicon glyphicon-heart logo-small"></span>
      <h4 id="orange">LOVE</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna 
         aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
         ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
           nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
    </div>
    <div class="col-sm-5">
      <div class="row">
      <img src="images/0ff239a28be868eb81c8918313d3c643.jpg"  width="354" height="354"/>
      </div>
    </div>
  </div>
</div><div id="contact" class="container-fluid bg-grey">
  <div class="row">
    <div class="col-sm-5">
    <img src="images/men-at-work-1040x650.jpg" class="img-circle" width="354" height="354"/>
    </div>
    <div class="col-sm-7 slideanim">
      <div class="row">
      <span class="glyphicon glyphicon-lock logo-small"></span>
      <h4 id="orange">JOB DONE</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna 
         aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
         ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
           nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
      </div>
    </div>
  </div>
</div>


<div id="services" class="container-fluid text-center">
  <div class="row slideanim">
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-leaf logo-small"></span>
      <h4 id="orange">GREEN</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-certificate logo-small"></span>
      <h4 id="orange">CERTIFIED</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-wrench logo-small"></span>
      <h4 id="orange">HARD WORK</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
</div>
<div className="container">

<div class="row">
    <div class="col-sm-5">
    <h2 id="green">Moriah Gardens</h2>
				<p id="blue">
					Become a part of the growing development in Kitwe as 
          we provide the best yet affoldable comfort of your dreams.
          Brought to you by
				</p>
        <img src="images/Stewardship logo.png" width="200" height="150"/>
    </div>
    <div class="col-sm-7 slideanim">
      <div class="row">
      <h2 id="green" >Navigation</h2>
	
  <p><a id="orange" href='/login'>- Apply</a></p>
  <p><a  id="orange" href='/about'>- About</a></p>
  <p><a id="orange" href='/contact'>- Contact</a></p>
  <p><a id="orange" href='/signup'>- Services</a></p>
      </div>
    </div>
  </div>
			  </div><div id="br"> </div>
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a  id="green" href="/"> Moriah Gardens</a>
    </div>
</div>
		);
	}

}

export default Signup;
