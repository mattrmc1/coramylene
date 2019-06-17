import React from 'react';

export default ({ path, index, handleClick }) => (
	<div className="hex">
		<div
			data-toggle="modal"
			data-target="#HexModal"
			onClick={() => handleClick(index)}
			className={`hex-image ${path}`}
		>
			<div className="hex-left"></div>
			<div className="hex-right"></div>
		</div>
	</div>
);