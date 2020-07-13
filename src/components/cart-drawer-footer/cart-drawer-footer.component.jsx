import React from "react";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { Total, Footer } from "./cart-drawer-footer.styles";

const CartDrawerFooter = ({ cartProductsTotal }) => {
	const theme = createMuiTheme({
		palette: {
			primary: {
				main: "#1e2022",
			},
		},
	});

	return (
		<Footer>
			<Total>Total: ${cartProductsTotal}</Total>
			<ThemeProvider theme={theme}>
				<Button
					variant="contained"
					color="primary"
					size="large"
					startIcon={<ShoppingBasketIcon />}
				>
					GO TO CHECKOUT
				</Button>
			</ThemeProvider>
		</Footer>
	);
};

export default CartDrawerFooter;
