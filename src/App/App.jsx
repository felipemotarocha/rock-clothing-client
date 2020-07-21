import React from "react";
import { Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from "../pages/home/home-page.component";
import { default as Navbar } from "../components/navbar/navbar.container";
import ShopPage from "../pages/shop/shop-page.component";
import { default as LoginPage } from "../pages/login/login.container";
import { default as RegisterPage } from "../pages/register/register.container";
import { default as CheckoutPage } from "../pages/checkout/checkout.container";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#1E2022",
		},
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/register" component={RegisterPage} />
				<Route path="/checkout" component={CheckoutPage} />
			</Switch>
		</ThemeProvider>
	);
};

export default App;
