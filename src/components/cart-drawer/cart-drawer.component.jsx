import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import CartProduct from "../cart-product/cart-product.component";

import {
	Container,
	ProductsCount,
	Products,
	ProductsHeadline,
} from "./cart-drawer.styles";
import {
	GET_CART_PRODUCTS_COUNT,
	GET_CART_PRODUCTS,
} from "../../graphql/queries/client-queries";

const CartDrawer = () => {
	const [state, setState] = useState({
		right: false,
	});
	const {
		data: { cartProductsCount },
	} = useQuery(GET_CART_PRODUCTS_COUNT);
	const {
		data: { cartProducts },
	} = useQuery(GET_CART_PRODUCTS);

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	if (cartProducts) console.log(cartProducts);

	return (
		<div>
			<React.Fragment key={"right"}>
				<Container>
					<IconButton
						color="inherit"
						aria-label="See your cart"
						onClick={toggleDrawer("right", true)}
					>
						<ShoppingCartIcon />
					</IconButton>
					<ProductsCount>{cartProductsCount}</ProductsCount>
				</Container>
				<Drawer
					anchor={"right"}
					open={state["right"]}
					onClose={toggleDrawer("right", false)}
				>
					<Products>
						<ProductsHeadline>
							<h2>Your cart</h2>
						</ProductsHeadline>
						{cartProducts.map((product) => (
							<CartProduct key={product.id} product={product} />
						))}
					</Products>
				</Drawer>
			</React.Fragment>
		</div>
	);
};

export default CartDrawer;
