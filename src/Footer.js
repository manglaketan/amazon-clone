import React from "react";
import "./Footer.css";

function Footer() {
	const column1 = [
		"About Us",
		"Careers",
		"Press Releases",
		"Amazon Cares",
		"Gift a Smile",
	];
	const column2 = ["Facebook", "Twitter", "Instagram"];
	const column3 = [
		"Sell in Amazon",
		"Sell under Amazon Accelerator",
		"Become an Affiliate",
		"Fulfilment by Amazon",
		"Advertise Your Products",
		"Amazon Pay on Merchants",
	];

	const column4 = [
		"COVID-19 and Amazon",
		"Your Account",
		"Returns Center",
		"100% Purchase Protection",
		"Amazon App Download",
		"Amazon Assistant Download",
		"Help",
	];

	const places = [
		"Australia",
		"Brazil",
		"Canada",
		"China",
		"France",
		"Germany",
		"Italy",
		"Japan",
		"Mexico",
		"Netherlands",
		"Singapore",
		"Spain",
		"Turkey",
		"United Arab Emirates",
		"United Kingdom",
		"United States",
	];

	return (
		<div className="footer">
			<div className="footer__top">
				<div className="footer__col">
					<h3>Get To Know Us</h3>
					{column1.map((item) => (
						<p className="footer__item">{item}</p>
					))}
				</div>

				<div className="footer__col">
					<h3>Connect with Us</h3>
					{column2.map((item) => (
						<p className="footer__item">{item}</p>
					))}
				</div>

				<div className="footer__col">
					<h3>Make Money With Us</h3>
					{column3.map((item) => (
						<p className="footer__item">{item}</p>
					))}
				</div>

				<div className="footer__col">
					<h3>Let Us Help You</h3>
					{column4.map((item) => (
						<p className="footer__item">{item}</p>
					))}
				</div>
			</div>
			<div id="footer__break" />
			<img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

			<div className="footer__bottom">
				{places.map((item) => (
					<span className="footer__countries">{item}</span>
				))}
			</div>
		</div>
	);
}

export default Footer;
