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
			  	data-target="#navbarSupportedContent" 
			  	aria-controls="navbarSupportedContent" 
			  	aria-expanded="false" 
			  	aria-label="Toggle navigation"
			  >
			    <i className="text-white fas fa-bars"></i>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav m-auto">
			    	<li className="nav-item mobile-only">
			      	<NavLink 
			      		to="/home"
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
			      		to="/home"
			      	>
		      		<img src="/img/main.jpeg" className="nav-img"/>
	      		</NavLink>
			      <li className="nav-item">
			      	<NavLink 
			      		to="/contact"
			      		className="nav-link"
			      		active="active"
			      	>
			      		Contact
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