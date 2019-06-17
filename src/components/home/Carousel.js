import React from 'react';

export default ({ selected }) => (
	<div className="modal fade" id="HexModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div className="modal-dialog modal-lg modal-dialog-centered" role="document">
			<div className="modal-content">
				<div className="modal-body">
					<img className="carousel-image" src={selected} alt="Cora Mylene"/>
				</div>
			</div>
		</div>
	</div>
);