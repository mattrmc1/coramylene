import React, { Component } from 'react';

export default class Gallery extends Component {

	renderGrid = () => (
		<div className="gallery-grid">
			<div 
				style={{
					gridColumn: "1/3",
					gridRow: "1/5"
				}}
			>
				1
			</div>
			<div 
				style={{
					gridColumn: "3/7",
					gridRow: "1/3"
				}}
			>
				2
			</div>
			<div 
				style={{
					gridColumn: "3/5",
					gridRow: "3/5"
				}}
			>
				3
			</div>
			<div 
				style={{
					gridColumn: "5/7",
					gridRow: "3/7"
				}}
			>
				4
			</div>
			<div 
				style={{
					gridColumn: "1/5",
					gridRow: "5/7"
				}}
			>
				5
			</div>
		</div>
	)

	renderRows = (number) => {
		let content = [];
		for (var i = 0; i < number; i++) {
			content.push(<div key={`gallery-${i}`} className="col-6 gallery-row">{this.renderGrid()}</div>)
		}
		return content
	}

	render(){
		return(
			<div className="row">
				{this.renderRows(6)}
			</div>
		)
	}
}