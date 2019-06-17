import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<footer className="footer">
		<hr className="footer-border"/>
		<div className="footer-content">
			<div className="footer-left">
				COPYRIGHT &copy; CORA MYLENE. ALL RIGHTS RESERVED.
			</div>
			<div className="footer-right desktop-only">
				<Link to="/faq">FAQ</Link>
				&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
				<a target="_blank" href="https://www.instagram.com/cora_mylene/" rel="noopener noreferrer">
					&#64;cora_mylene&nbsp;&nbsp;<i className="fab fa-instagram" />
				</a>
			</div>
		</div>
	</footer>
);