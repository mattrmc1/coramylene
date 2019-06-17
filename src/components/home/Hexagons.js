import React, { Component } from 'react';

import Carousel from './Carousel';
import Hex from './Hex';

const createImagePaths = (first, last) => {
	let images = [];
	for (let i = first; i <= last; i++) {
		images.push(`hex-image-${i}`)
	}
	return images
}

const images = createImagePaths(1,10);

export default class Hexagons extends Component {

	state = {
		index: 1
	}

	handleHexClick = index => this.setState({ index })

	render(){
		return(
			<div>
				<div className="hex-grid">
					{images.map( (path, index) => {
						if ( index === 3 || index === 7 )
							return [<br key={`break-${index}`}/>, <Hex key={`hex-${index}`} path={path} index={index} handleClick={this.handleHexClick}/>]
						return <Hex key={`hex-${index}`} path={path} index={index} handleClick={this.handleHexClick}/>
					})}
				</div>
				<Carousel index={this.state.index} images={images}/>
			</div>
		)
	}
}