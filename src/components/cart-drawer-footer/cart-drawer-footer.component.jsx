import React from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Button from "@material-ui/core/Button";

import { Total, Footer } from "./cart-drawer-footer.styles";
import { TOGGLE_CART_DRAWER_HIDDEN } from "../../graphql/mutations/client-mutations";

const CartDrawerFooter = ({ cartProductsTotal }) => {
	const history = useHistory();

	const [toggleCartDrawerHidden] = useMutation(TOGGLE_CART_DRAWER_HIDDEN);

	return (
		<Footer>
			<Total>Total: ${cartProductsTotal}</Total>
			<Button
				variant="contained"
				color="primary"
				size="large"
				startIcon={<ShoppingBasketIcon />}
				onClick={() => {
					history.push("/checkout");
					toggleCartDrawerHidden();
				}}
			>
				GO TO CHECKOUT
			</Button>
		</Footer>
	);
};

export default CartDrawerFooter;
