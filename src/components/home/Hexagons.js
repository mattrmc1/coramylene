import React, { Component } from 'react';

import Carousel from './Carousel';
import Hex from './Hex';

const createImagePaths = (first, last) => {
	let images = [];
	for (let i = first; i <= last; i++) {
		images.push(`img/portfolio/${i}.jpeg`)
	}
	return images
}

const images = createImagePaths(1,10);

export default class Hexagons extends Component {

	state = {
		selected: "img/portfolio/1.jpeg"
	}

	handleHexClick = (path) => {
		this.setState({ selected: path })
	}

	render(){
		return(
			<div>
				<div className="hex-grid">
					{images.map( (path, index) => {
						if ( index === 3 || index === 7 )
							return [<br key={`break-${index}`}/>, <Hex key={`hex-${index}`} path={path} handleClick={this.handleHexClick}/>]
						return <Hex key={`hex-${index}`} path={path} handleClick={this.handleHexClick}/>
					})}
				</div>
				<Carousel selected={this.state.selected} images={images}/>
			</div>
		)
	}
}