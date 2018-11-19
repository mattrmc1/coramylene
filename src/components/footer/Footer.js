import React, { Component } from 'react';

export default class Footer extends Component {
	render(){
		return(
			<footer className="footer">
				<hr className="footer-border"/>
				<div className="footer-content">
        	<div className="footer-left">
        		COPYRIGHT &copy; CORA MYLENE. ALL RIGHTS RESERVED.
        	</div>
        	<div className="footer-right">
        		<a className="footer-link" target="_blank" href="https://www.instagram.com/cora_mylene/">
        			&#64;cora_mylene&nbsp;&nbsp;
        			<i className="fab fa-instagram" />
        		</a>
        	</div>
      	</div>
	    </footer>
		)
	}
}