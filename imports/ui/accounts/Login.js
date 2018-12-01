import React, {Component } from 'react';
import {meteor} from 'meteor/meteor';


class Login extends React.Component{
	render(){
		return(
			<div id="login">
				<h2>Application Forms </h2>
				<div class="container">
					<div class="row">
						<div class="col-xs-8">
							<div class="card">
								<h6>APPLICATION FORM- Moriah Gardens</h6>
								<p>Plot 50a/74 Makeni,
								P.O Box 50165 Lusaka, Zambia</p>
								<p> +260 966 999 660, +260 954 605 665</p>
								<p>chiwalamwape@gmail.com, jansiac@gmail.com</p>
							</div>
						</div>
						<div class="col-xs-4">
							<img src="images/Stewardship logo.png" width="200" height="150"/>
						</div>
					</div>
					<form class="form-horizontal input-group" action="/action_page.php">
						<h6>1. APPLICANT DETAILS</h6>
  					<div class="form-group">
							<div class="row">
								<div class="col-sm-1"><lebal>Title:</lebal>
								<select class="form-control" id="Title">
									<option>Mr.</option>
									<option>Mss.</option>
									<option>Mrs.</option>
								</select>
								</div>
								<div class="col-sm-3">
								<lebal>First Name:</lebal>
									<input class="form-control" id="first-name" name="first-name" placeholder="Required" type="text" required/>
								</div>
								<div class="col-sm-3">
								<lebal>Middle or Maiden Name:</lebal>
									<input class="form-control" id="middle-name" name="middle-name" placeholder="Optional" type="text"/>
								</div>
								<div class="col-sm-4"><lebal>Last Name:</lebal>
									<input class="form-control" id="last-name" name="last-name" placeholder="Required" type="text" required/>
							</div>
								<div class="row">
									<div class="col-sm-2">
									<lebal>Maritual Status:</lebal>
									<select class="form-control" id="Maritual-status">
										<option>Single</option>
										<option>Married</option>
										<option>Devorced</option>
									</select>
									</div>
									<div class="col-sm-5">
									<lebal>Date of Birth:</lebal>
										<input class="form-control" id="D.O.B" name="date-of-birth" placeholder="DD/MM/YYYY Required" type="text" required/>
									</div>
									<div class="col-sm-5">
									<lebal>Nationality:</lebal>
										<input class="form-control" id="nationality" name="Nationality" placeholder="Nationality Required" type="text" required/>
									</div>
								</div>
								<div class="row">
								<div class="col-sm-2">
								<lebal>ID Type:</lebal>
								<select class="form-control" id="IDT">
									<option>NRC</option>
									<option>Passport</option>
								</select>
								</div>
								<div class="col-sm-5">
								<lebal>ID Number:</lebal>
									<input class="form-control" id="ID-number" name="ID-number" placeholder="ID Number Required" type="text" required/>
								</div>
								</div>
								</div>
								<h6>2. CONTACT DETAILS</h6>
								<div class="row">
									<div class="col-sm-4">
										<lebal>Work:</lebal>
										<input class="form-control" id="Work-number" name="Work-number" placeholder="Work Phone Number Required" type="text" required/>
									</div>
									<div class="col-sm-4">
										<lebal>Home:</lebal>
										<input class="form-control" id="Home-number" name="Home-number" placeholder="Home Phone Number Optional" type="text"/>
									</div>
									<div class="col-sm-4">
										<lebal>Mobile:</lebal>
										<input class="form-control" id="Mobile-number" name="Mobile-number" placeholder="Mobile Phone Number Optional" type="text"/>
									</div>
									<div class="col-sm-4">
										<lebal>Email:</lebal>
										<input class="form-control" id="Email" name="Email" placeholder="Email Required" type="text" required/>
									</div>
									<div class="col-sm-4">
										<lebal>Alternative Email:</lebal>
										<input class="form-control" id="Alt-Email" name="Alt-Email" placeholder="Alternative Email Optional" type="text"/>
									</div>
								</div>
								<h6>3. CURRENT ADDRESS DETAILS</h6>
								<div class="row">
								<div class="col-sm-2"><lebal>Residential Address:</lebal></div>
								<div class="col-sm-5">
									<input class="form-control" id="Address" name="Address" placeholder="Address Required" type="text"Required/>
								</div>
								<div class="col-sm-5">
									<input class="form-control" id="Alt-Address" name="Alt-Address" placeholder="Alternative Address Optional" type="text"/>
								</div>
								<div class="col-sm-2">
									<lebal>Period at this address:</lebal>
								</div>
								<div class="col-sm-3"><input class="form-control" id="Period-Address-year" name="Period-address-years" placeholder="Years" type="text" required/></div>
								<div class="col-sm-3"><input class="form-control" id="Period-Address-months" name="Period-address-months" placeholder="Months" type="text" required/></div>
								</div>
								<h6>4. BANK DETAILS</h6>
								<h6>5. EMPLOYMENT DETAILS (Applicable to people with other form of employment)</h6>
								<h6>6. PAYMENT DETAILS</h6>
								<h6>7. UNIT TYPE</h6>
								<h6>8. INCOME DETAILS</h6>
  						</div>
							<p>All applications attract a non refundable fee of ZMK 10 000.00. ALL PAYMENTS TO BE DONE BY BANK DEPOSIT. NO CASH WILL BE ACCEPTED.</p>
							<div>
  							<label><input type="checkbox" required/>  I Agree</label>
							</div>
							<p>as the undersigned,
and do hereby confirm the accuracy of the information contained in this application and warrant that I / we am / are duly authorised
to sign on behalf of the applicant. I/we hereby consent to Stewardship Investments Ltd performing a credit
clearance verification.</p>
  						<button type="submit" class="btn btn-default">Submit</button>
					</form>
				</div>
			</div>
    );
	}

}

export default Login;
