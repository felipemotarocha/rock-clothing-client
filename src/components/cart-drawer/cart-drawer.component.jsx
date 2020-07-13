import React from "react";
import Drawer from "@material-ui/core/Drawer";

import { default as CartIcon } from "../cart-icon/cart-icon.container";
import { default as CartDrawerProducts } from "../cart-drawer-products/cart-drawer-products.container";
import { default as CartDrawerFooter } from "../cart-drawer-footer/cart-drawer-footer.container";

import {
	Container,
	Products,
	Footer,
	EmptyMessage,
} from "./cart-drawer.styles";

const CartDrawer = ({
	cartDrawerHidden,
	toggleCartDrawerHidden,
	cartProductsTotal,
}) => {
	return (
		<Container>
			<CartIcon />
			<Drawer
				anchor={"right"}
				open={!cartDrawerHidden}
				onClose={toggleCartDrawerHidden}
			>
				<Products>
					<CartDrawerProducts />
				</Products>
				{cartProductsTotal > 0 ? (
					<Footer>
						<CartDrawerFooter />
					</Footer>
				) : (
					<EmptyMessage>Your cart is empty! :(</EmptyMessage>
				)}
			</Drawer>
		</Container>
	);
};

export default CartDrawer;
