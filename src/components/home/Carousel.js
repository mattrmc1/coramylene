import React from 'react';

import Logo1 from '../../assets/img/portfolio/1.jpeg';
import Logo2 from '../../assets/img/portfolio/2.jpeg';
import Logo3 from '../../assets/img/portfolio/3.jpeg';
import Logo4 from '../../assets/img/portfolio/4.jpeg';
import Logo5 from '../../assets/img/portfolio/5.jpeg';
import Logo6 from '../../assets/img/portfolio/6.jpeg';
import Logo7 from '../../assets/img/portfolio/7.jpeg';
import Logo8 from '../../assets/img/portfolio/8.jpeg';
import Logo9 from '../../assets/img/portfolio/9.jpeg';
import Logo10 from '../../assets/img/portfolio/10.jpeg';

const logos = [
	Logo1,
	Logo2,
	Logo3,
	Logo4,
	Logo5,
	Logo6,
	Logo7,
	Logo8,
	Logo9,
	Logo10
]

export default ({ index }) => (
	<div className="modal fade" id="HexModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div className="modal-dialog modal-lg modal-dialog-centered" role="document">
			<div className="modal-content">
				<div className="modal-body">
					<img className="carousel-image" src={logos[index]} alt="Cora Mylene"/>
				</div>
			</div>
		</div>
	</div>
);