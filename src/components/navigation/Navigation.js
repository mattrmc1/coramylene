import React, { Component } from 'react';
import { NavLink } from 'react-static';

export default class Navigation extends Component {
	render(){
		return(
			<nav className="navbar navbar-expand-lg">
			  <button 
			  	className="navbar-toggler" 
			  	type="button" 
			  	data-toggle="collapse" 
			  	data-target="#NavbarMain" 
			  	aria-controls="NavbarMain" 
			  	aria-expanded="false" 
			  	aria-label="Toggle navigation"
			  >
			    <i className="text-white fas fa-bars"></i>
			  </button>

			  <a className="navigation-insta" target="blank" href="https://www.instagram.com/cora_mylene/">
			  	<i className="text-white fab fa-instagram ml-auto"/>
			  </a>

			  <div className="collapse navbar-collapse" id="NavbarMain">
			    <ul className="navbar-nav m-auto">
			    	<li className="nav-item mobile-only">
			      	<NavLink 
			      		to="/"
			      		exact
			      		className="nav-link text-right"
			      		active="active"
			      	>
			      		Home
		      		</NavLink>
			      </li>
			      <li className="nav-item">
			      	<NavLink 
			      		to="/gallery"
			      		className="nav-link text-right"
			      		active="active"
			      	>
			      		Gallery
		      		</NavLink>
			      </li>
			      <li className="nav-item">
			      	<NavLink 
			      		to="/about"
			      		className="nav-link text-right"
			      		active="active"
			      	>
			      		About
		      		</NavLink>
			      </li>
			      <NavLink 
			      		to="/"
			      		className="nav-img"
			      		exact
			      	>
		      		<img src="/img/main.jpeg"/>
	      		</NavLink>
			      <li className="nav-item">
			      	<NavLink 
			      		to="/contact"
			      		className="nav-link dropdown"
			      		active="active"
			      	>
			      		Contact
			      		<div className="dropdown-menu">
				          <NavLink 
				          	to="/booking"
				          	className="dropdown-item"
				          >
				          	Booking
				          </NavLink>
				          <NavLink 
				          	to="/inquiries"
				          	className="dropdown-item"
				          >
				          	Inquiries
				          </NavLink>
				        </div>
		      		</NavLink>
			      </li>
			      <li className="nav-item">
			      	<NavLink 
			      		to="/store"
			      		className="nav-link"
			      		active="active"
			      	>
			      		Store
		      		</NavLink>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}
}