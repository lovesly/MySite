import React from 'react';

let handleClick = function(e) {
	e.preventDefault();
	const emailInput = document.querySelector('#email-input');
	emailInput.value = "";
	emailInput.placeholder = placeholder_msg[test_counter()];
	if (emailInput.placeholder === '') {
		emailInput.value = 'zzhlovesly@outlook.com';
		document.querySelector('#button-submit').innerHTML = "Copy";
		document.querySelector('#sign-up-span').innerHTML = "要不麻烦你手动联系， 让我思考一下怎么设计这里的功能";
		
		handleClick = function(e) {
			e.preventDefault();
			document.querySelector('#email-input').select();
			document.execCommand("copy");
		}
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
	<footer>
		<div className="container footer-stuff">
				<div className="" id="footer-1">
					<strong>FIND ME ON</strong>
					<ul>
						<li><a href="#" id="facebook-link" onClick={(e) => handleFacebook(e)}>Facebook</a></li>
					</ul>
				</div>
				<div id="footer-">
					<p>Copyright &copy; {new Date().getFullYear()} ZZ</p>
				</div>
				<div className="" id="footer-2">
					<strong>项目</strong>
					<ul>
						<li>Oracle</li>
						<li><a href="https://www.oracle.com/industries/health-sciences/clinical-one.html" target="_Blank">Clinical One</a></li>
					</ul>
				</div>
				<div className="" id="footer-3">
					<p>
						<strong>加强联络 </strong>
						<span id="sign-up-span"></span>
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
	</footer>
	);
}

