import React, {Component} from 'react';

class Footer extends Component{

	render(){
		return(
			<div className="footer">
			<footer class="page-footer font-small ">
      <div className="container">

<div class="row">
    <div class="col-sm-5">
    <h2 className="white-text">Moriah Gardens</h2>
				<p id="blue">
					Become a part of the growing development in Kitwe as 
          we provide the best yet affoldable comfort of your dreams.
				</p>
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
			  </div>



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
      <a  id="green" href="/"> Moriah Gardens</a>
    </div>


</footer>

			</div>

		)
	}
}

export default Footer
