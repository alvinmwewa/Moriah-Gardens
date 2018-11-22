import React, {Component} from 'react';


class About extends Component{
	render(){
		return(
		<div id="body2">
     <div class="jumbotron jumbotron-3">
    <div class="container">
    <div id="divindiv">
        <h1>YOUR DREAM HOME NOW A REALITY</h1>
        <p>...</p>
      </div>
    </div>
  </div>
	{/* <!-- Container (About Section) --> */}
<div id="about" class="container-fluid">
  <div class="row">
    <div class="col-sm-8">
      <h2>About Moriah Gardens</h2><br/>
      <h4>Moriah Garden is a housing development project brought to you by </h4>
			<img src="images/Stewardship logo.png" width="200" height="150"/>
			<br/>
			<p> </p>
      <p>The Moriah Gardens Housing Development is a prestigious yet affordable housing complex to be located in Ganerton, Kitwe about 20km North of the Kitwe Business District on a 44 hectare land with the panoramic view of the Mwambashi River on the southern side of the development. The development will have 1,132 housing units [residential apartments and free standing homes] to be constructed under Phase 1. The beauty and appeal of the complex will be enhanced by the creation of an artificial lake along the southern boundary of the Development.</p>
      <br/><button class="btn btn-default btn-lg">Get in Touch</button>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-signal logo"></span>
    </div>
  </div>
</div>

<div class="container-fluid bg-grey">
  <div class="row">
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-globe logo slideanim"></span>
    </div>
    <div class="col-sm-8">
      <h2>Getting started</h2><br/>
      <h4>
			<strong>INFORMATION PACK</strong></h4>
			<h4>
			 For those who decide to buy houses/apartments from Moriah Gardens, they will be supplied with an information pack that will contain the following:

</h4>
<li align="left" id="blue">Basic Information about Moriah Gardens</li>
<li align="left" id="blue">Project Brochure</li>
<li align="left" id="blue">Contract of Sale</li>
<li align="left" id="blue">Application Form</li>
<li align="left" id="blue">Homeowner’s Constitution</li>
<li align="left" id="blue">Deed of Adherence</li>
<li align="left" id="blue">Credit Life Insurance </li>
<br/>
      <p><strong>KEY ATTRACTION:</strong></p>
			<li align="left" id="blue">Prestigious yet affordable housing units</li>
			<li align="left" id="blue">Secure environment</li>
			<li align="left" id="blue">Bliss and comfort</li>
			<li align="left" id="blue">Return to nature</li>
			<li align="left" id="blue">Serenity</li>
			<li align="left" id="blue">Perfect blend of nature and modernisation</li>

    </div>
  </div>
</div>


{/* <!-- Container (Services Section) --> */}
<div class="container-fluid text-center">
  <h2>SERVICES</h2>
  <h4>What we offer</h4>
  <br/>
  <div class="row slideanim">
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-off logo-small"></span>
      <h4>POWER</h4>
      <p>Fully secure environment</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-heart logo-small"></span>
      <h4>LOVE</h4>
      <p>High standard health facility</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-lock logo-small"></span>
      <h4>JOB DONE</h4>
      <p>New job opportunities</p>
    </div>
  </div>
  <br/><br/>
  <div class="row slideanim">
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-leaf logo-small"></span>
      <h4>GREEN</h4>
      <p>Natural environment</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-certificate logo-small"></span>
      <h4>COMFORT</h4>
      <p>Bliss and comfort</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-wrench logo-small"></span>
      <h4>HARD WORK</h4>
      <p>Modernized structures</p>
    </div>
  </div>
</div>

{/* <!-- Container (Portfolio Section) --> */}

<div class="container-fluid text-center bg-grey">
  <h2>Portfolio</h2><br/>
  <h4>What we are creating</h4>
  <div class="row text-center slideanim">
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="images/img3.png" width="400" height="300"/>
        <p><strong>Shopping</strong></p>
        <p>State of the art Shopping facility</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="images/img1.png" width="400" height="300"/>
        <p><strong>Hotels & Office park</strong></p>
        <p>A perfect blend of business and relaxation</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="images/eagleview.jpg" width="400" height="300"/>
        <p><strong>Housing complex</strong></p>
        <p>That perfect home for your family</p>
      </div>
    </div>
  </div>
		</div>
		<footer class="container-fluid bg-4 text-center">
  <p>Web site  By  JANSI VISIONS <a href="#">www.jansivisions.com</a></p>
</footer>
	</div>


        )
	}


}

export default About
