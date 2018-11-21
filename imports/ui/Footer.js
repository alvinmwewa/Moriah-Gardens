import React, {Component} from 'react';

class Footer extends Component{

	render(){
		return(
			<div className="footer">
			<footer class="page-footer font-small ">
      <div className="container">
			    <div className="row">
			      <div className="col l6 s12">
				<h2 className="white-text">Moriah Gardens</h2>
				<p id="orange">
					We are a property app that allows users to
					advertise available land and homes for rent or sell (agent free),
					at the same time it also allows user to look for land and homes as
					well.
				</p>
			      </div>
			      <div className="col l4 offset-l2 s12">
				<h2 id="green" >Navigation</h2>
				<ul>
				  <li><a  id="orange" href='/about'>About</a></li>
				  <li><a id="orange" href='/contact'>Contact</a></li>
				  <li><a id="orange" href='/login'>Apply</a></li>
				  <li><a id="orange" href='/signup'>Sign Up</a></li>
				</ul>
			      </div>
			    </div>
			  </div>
    <hr/>
    <ul class="list-unstyled list-inline text-center py-2">
      <li class="list-inline-item">
      <div id="orange">
        <h3 class="mb-1">Register for free</h3>
        </div>
      </li>
      <li class="list-inline-item">
        <a href="/login" class="btn btn-danger btn-rounded">Sign up!</a>
      </li>
    </ul>
    

    <hr/>

    
    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
          <i class="fa fa-facebook"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <i class="fa fa-twitter"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
          <i class="fa fa-google-plus"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <i class="fa fa-linkedin"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1">
          <i class="fa fa-dribbble"> </i>
        </a>
      </li>
    </ul>
<div id="br"> </div>
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="/"> Moriah Gardens</a>
    </div>


</footer>

			</div>

		)
	}
}

export default Footer
