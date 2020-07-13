import React from "react";

import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Container, ProductsCount } from "./cart-icon.styles";

const CartIcon = ({ toggleCartDrawerHidden, cartProductsCount }) => {
	return (
		<Container>
			<IconButton
				color="inherit"
				aria-label="See your cart"
				onClick={toggleCartDrawerHidden}
			>
				<ShoppingCartIcon />
			</IconButton>
			<ProductsCount>{cartProductsCount}</ProductsCount>
		</Container>
	);
};

export default CartIcon;
