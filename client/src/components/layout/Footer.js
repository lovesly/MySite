import React from 'react';

export default () => {
	return (
	// <footer className="bg-dark text-white mt-5 p-4 text-center">
	//     Copyright &copy; {new Date().getFullYear()} ZZ
	// </footer>
	<footer>
		<div className="container footer-stuff">
			<div className="row">
				<div className="col-sm-3">
					<strong>FIND US ON</strong>
					<ul>
						<li><a href="">Facebook</a></li>
						<li><a href="">Twitter</a></li>
						<li><a href="">Instagram</a></li>
						<li><a href="">Pinterest</a></li>
					</ul>
				</div>
				<div className="col-sm-3">
					<strong>OTHER SHOPS</strong>
					<ul>
						<li><a href="">Red Robin</a></li>
						<li><a href="">Emerald Eagle</a></li>
						<li><a href="">Crimson Crane</a></li>
						<li><a href="">Auburn Abbot</a></li>
					</ul>
				</div>
				<div className="col-sm-6">
					<p>
						<strong>Sign Up for the newsletter </strong> 
						consectetur adipisicing elit. Quae consequatur voluptatibus  recusandae. Qui, praesentium hic?
					</p>
					<form action="" className="">
						<div className="input-group mb-3">
							<input type="email" className="form-control" placeholder="Your Email" aria-label="Your Email"/>
							<div className="input-group-append">
								<button className="btn btn-outline-secondary" type="submit" id="button-submit">Submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</footer>
	);
}

