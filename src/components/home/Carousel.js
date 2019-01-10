import React, { Component } from 'react';

export default class Carousel extends Component {

	render(){
		return(
			<div className="modal fade" id="HexModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			  <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
			    <div className="modal-content">
			      <div className="modal-body">

				      <img 
				      	className="carousel-image" 
				      	src={this.props.selected}
				      />

			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}