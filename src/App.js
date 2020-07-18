import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/home-page.component";
import Navbar from "./components/navbar/navbar.component";
import ShopPage from "./pages/shop/shop-page.component";
import { default as LoginPage } from "./pages/login/login.container";
import { default as RegisterPage } from "./pages/register/register.container";

const App = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/register" component={RegisterPage} />
			</Switch>
		</>
	);
};

export default App;
