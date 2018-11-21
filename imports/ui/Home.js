import React, {Component } from 'react';
import Footer from './Footer.js';

class Home extends Component {

	render(){
	return (
		<div>
      <div class="jumbotron text-center">
  <h1>Moriah Gardens</h1> 
  <p>better, afordable, safe and comform .....we gat you fox</p> 
  <form>
    <div class="input-group">
      <input type="email" class="form-control" size="50" placeholder="Email Address" required/>
      <div class="input-group-btn">
        <button type="button" class="btn btn-danger">Subscribe</button>
      </div>
    </div>
  </form>
</div>
<div class="parallax">
  <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
    {/* <!-- Indicators --> */}
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
	  <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>

    {/* <!-- Wrapper for slides --> */}
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <h4>"This company is the best. I am so happy with the result!"<br/><span>Michael Roe, Vice President, Comment Box</span></h4>
      </div>
      <div class="item">
        <h4>"One word... WOW!!"<br/><span>John Doe, Salesman, Rep Inc</span></h4>
      </div>
      <div class="item">
        <h4>"Could I... BE any more happy with this company?"<br/><span>Chandler Bing, Actor, FriendsAlot</span></h4>
      </div>
	  <div class="item">
        <h4>"this is good stuff i tell you.............."<br/><span>Alvin Mwewa, Programmer, devoloper</span></h4>
      </div>
    </div>

    {/* <!-- Left and right controls --> */}
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  </div>
  
  {/* <!-- Container (Contact Section) --> */}
<div id="contact" class="container-fluid bg-grey">
  <div class="row">
    <div class="col-sm-5">
    <img src="images/img3.png" class="img-circle" width="354" height="354"/> 
    </div>
    <div class="col-sm-7 slideanim">
      <div class="row">
        <h3 id="green">MORIAH GARDENS-GANERTION</h3>
        <h3 id="green">MIXED-USE devolopment</h3>
        <p id="orange">The 1008 apartment units form phase one of the devolopment
          which willlater grow with various expansions of the following:
          <ul id="orange">
            <li>Residential Apartment-Phase one</li>
            <li>Free-standing Residential Units</li>
            <li>Shopping Center</li>
            <li>Hotels</li>
            <li>Schools</li>
            <li>Office Park</li>
            <li>Police Station</li>
            <li>Health Centers</li>
            <li>Recreational Areas</li>
          </ul>
        </p>
      </div>
    </div>
    <p id="orange">The devolopment will have a relatively large
    catchment area.This includes surrounding towns Kitwe (11.6km), Mufulira (27.5km) 
    , Chingola (45.8km), Kalulushi (24.4km) and Chambishi (23.9km). The
    Chamdishi Multi Facility Economic Zone is 14km away. </p>
  </div>
</div>
<div id="body2">
  <h2 id="green"><i>This is a first class devolopment</i></h2>
  <h2 id="green"><i>an outstanding place to live in the Copperbelt</i></h2>
  <img src="images/z-index"/>
</div>

{/* <!-- Image of location/map --> */}
<div class="parallax2"></div>

 {/* <!-- Container (Contact Section) --> */}
 <div id="contact" class="container-fluid bg-grey">
  <h2 class="text-center"><span id="green">CONTACT</span></h2>
  <div class="row">
    <div class="col-sm-5">
    <div id="orange">
      <p>Contact us and we'll get back to you within 24 hours.</p>
      <p><span class="glyphicon glyphicon-map-marker"></span> Lusaka, Zambia</p>
      <p><span class="glyphicon glyphicon-phone"></span> +260 1515151515</p>
      <p><span class="glyphicon glyphicon-envelope"></span> moriahgardens@gmail.com</p>
      <p><span class="glyphicon glyphicon-map-marker"></span> Kitwe, Zambia</p>
      <p><span class="glyphicon glyphicon-phone"></span> +260 1515151515</p>
    </div>
    </div>
    <div class="col-sm-7 slideanim">
      <div class="row">
        <div class="col-sm-6 form-group">
          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required/>
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
      <div class="row">
        <div class="col-sm-12 form-group">
          <button class="btn btn-default pull-right" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
</div>


	)
	}
}

export default Home


