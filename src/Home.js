import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR0xnooUdKC47964wYQyfs9WJ_QoXsN_HmaKWgBf4g3KNBZ2YCBJgktj7Pg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id="12321341"
						title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses (English, Paperback, Eric Ries)"
						price={299}
						image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
						rating={5}
					/>
					<Product
						id="49654253"
						title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5ltr Glass Bowl"
						price={3000}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SX425_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="83838728"
						title="Redmi 8A Dual (Midnight Grey, 2GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery"
						price={13000}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/71h%2BC9wJCjL._SL1500_.jpg"
					/>
					<Product
						id="78348734"
						title="Kadence Wanderer Brown Mahogany wood Soprano Ukulele with Bag"
						price={3450}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/71ngZfQUzyL._SL1500_.jpg"
					/>
					<Product
						id="473384734"
						title="Classmate 2100117 Soft Cover 6 Subject Spiral Binding Notebook, Single Line, 300 Pages "
						price={40}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/71ulyHAa-hL._SL1100_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="43947374"
						title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
						price={999.99}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;

//https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg

//https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg
