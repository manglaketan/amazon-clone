import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Payment from "./Payment";
import Login from "./Login";
import Checkout from "./Checkout";
import Orders from "./Orders";
import Footer from "./Footer";
import Home from "./Home";
import Header from "./Header";
import PrimePage from "./PrimePage";

import "./App.css";

const promise = loadStripe(
	"pk_test_51HPvwqH4QR9HL7071X1izwl2YCcZSscNNptj6000qN0IYl9Sde7N0gBT8STHTYznsTAm0M39jMeNXEcEKFXo7OVa006SS4hSQ4"
);

function App() {
	const [{}, dispatch] = useStateValue();
	//if blank brackets, it only runs once at the beginning
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("The user is>>>", authUser);
			if (authUser) {
				//the user just logged in/ the user was logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				//the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/orders">
						<Header />
						<Orders />
						<Footer />
					</Route>

					<Route path="/prime">
						<Header />
						<PrimePage />
						<Footer />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/checkout">
						<Header />
						<Checkout />
						<Footer />
					</Route>

					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
						<Footer />
					</Route>

					<Route path="/">
						<Header />
						<Home />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
