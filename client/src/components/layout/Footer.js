import React from 'react';

const handleClick = function(e) {
	e.preventDefault();
	// this is undefined, why?
	console.log(this);
	const emailInput = document.querySelector('#email-input');
	emailInput.placeholder = placeholder_msg[test_counter()];
	if (emailInput.placeholder === '') {
		emailInput.value = 'zzhlovesly@outlook.com';
		// copy the email ? 
	}
}

const handleFacebook = function(e) {
	e.preventDefault();
	document.querySelector('a#facebook-link').innerHTML = '不玩 Facebook';
}
 
// couter with closure
const test_counter = function() {
	let counter = -1;
	return function() {
		if (counter < 3) {
			counter++;
		} 
		return counter;
	}
}();

const placeholder_msg = [
	'别点了, 功能还没做呢',
	'还点',
	'再点网站就崩溃了',
	''
];



export default () => {
	return (
	// <footer className="bg-dark text-white mt-5 p-4 text-center">
	//     Copyright &copy; {new Date().getFullYear()} ZZ
	// </footer>
	<footer>
		<div className="container footer-stuff">
			<div className="row">
				<div className="col-sm-3">
					<strong>FIND ME ON</strong>
					<ul>
						<li><a href="#" id="facebook-link" onClick={(e) => handleFacebook(e)}>Facebook</a></li>
						<li>Copyright &copy; {new Date().getFullYear()} ZZ</li>
					</ul>
				</div>
				<div className="col-sm-3">
					<strong>项目</strong>
					<ul>
						<li>Oracle</li>
						<li><a href="https://www.oracle.com/industries/health-sciences/clinical-one.html" target="_Blank">Clinical One</a></li>
					</ul>
				</div>
				<div className="col-sm-6">
					<p>
						<strong>Sign Up for the newsletter </strong> 
						consectetur adipisicing elit. Quae consequatur voluptatibus  recusandae. Qui, praesentium hic?
					</p>
					<form action="" className="">
						<div className="input-group mb-3">
							<input id="email-input" type="email" className="form-control" placeholder="Your Email" aria-label="Your Email"/>
							<div className="input-group-append">
								<button className="btn btn-outline-secondary" type="submit" id="button-submit" onClick={(e) => handleClick(e)}>Submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</footer>
	);
}

