import React from "react";
import { Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from "../pages/home/home-page.component";
import { default as Navbar } from "../components/navbar/navbar.container";
import ShopPage from "../pages/shop/shop-page.component";
import { default as LoginPage } from "../pages/login/login.container";
import { default as RegisterPage } from "../pages/register/register.container";
import { default as CheckoutPage } from "../pages/checkout/checkout.container";
import PaymentSuccessfulPage from "../pages/payment-successful/payment-successful.component";
import PaymentFailurePage from "../pages/payment-failure/payment-failure.component";
import AuthGuard from "../components/auth-guard/auth-guard.component";

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
				<Route
					path="/payment-successful"
					exact
					component={PaymentSuccessfulPage}
				/>
				<Route path="/payment-failure" exact component={PaymentFailurePage} />
				<AuthGuard>
					<Route path="/checkout" component={CheckoutPage} />
				</AuthGuard>
			</Switch>
		</ThemeProvider>
	);
};

export default App;
