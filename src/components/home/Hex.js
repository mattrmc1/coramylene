import React, { Component } from 'react';

export default class Hex extends Component {
	render(){
		return(
			<div className="hex">
	        <div
	        	data-toggle="modal"
	        	data-target="#HexModal"
	        	onClick={() => this.props.handleClick(this.props.path)}
	        	className="hex-image"
	        	style={{ backgroundImage: `url(${this.props.path})` }}
	        >
	            <div className="hex-left"></div>
	            <div className="hex-right"></div>
	        </div>
	    </div>
		)
	}
}