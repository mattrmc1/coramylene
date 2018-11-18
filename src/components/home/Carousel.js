import React, { Component } from 'react';

export default class Carousel extends Component {
	render(){
		return(
			<div className="modal fade" id="HexModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			  <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
			    <div className="modal-content">
			      <div className="modal-body">
			        <div id="HomeCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
							  <div className="carousel-inner">
							  	{this.props.images.map( path => (
							  		<div className={`carousel-item ${path === this.props.selected ? "active" : ""}`}>
								      <img 
								      	className="carousel-image" 
								      	src={path}
								      />
								    </div>
							  	))}
							  </div>
							  <a className="carousel-control-prev" href="#HomeCarousel" role="button" data-slide="prev">
							    <span className="fas fa-chevron-left" aria-hidden="true"></span>
							    <span className="sr-only">Previous</span>
							  </a>
							  <a className="carousel-control-next" href="#HomeCarousel" role="button" data-slide="next">
							    <span className="fas fa-chevron-right" aria-hidden="true"></span>
							    <span className="sr-only">Next</span>
							  </a>
							</div>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}
