import React from "react";
import "./CartEmpty.css";
import { useHistory } from "react-router-dom";
function CartEmpty() {
	const history = useHistory();
	return (
		<div className="cartEmpty">
			<img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" />
			<div className="cartEmpty__right">
				<h1>Your Cart Is Empty</h1>
				<button onClick={(e) => history.go(-1)}>Continue Shopping</button>
			</div>
		</div>
	);
}

export default CartEmpty;
