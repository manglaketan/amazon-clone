import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import CartEmpty from "./CartEmpty";

function Checkout() {
	const [{ user, basket }, dispatch] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/pc_banner_2.jpg"
					alt=""
				/>

				<div>
					<h3>{user ? `Hey ${user.email}` : ""}</h3>
					<h2 className="checkout__title">Your Shopping Cart</h2>
					{basket.length === 0 ? (
						<CartEmpty />
					) : (
						basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								price={item.price}
								rating={item.rating}
								image={item.image}
							/>
						))
					)}
				</div>
			</div>

			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
