import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_CART_PRODUCTS } from "../../graphql/queries/client-queries";
import CartDrawerProducts from "./cart-drawer-products.component";

const CartDrawerProductsContainer = () => {
	const {
		data: { cartProducts },
	} = useQuery(GET_CART_PRODUCTS);

	return <CartDrawerProducts cartProducts={cartProducts} />;
};

export default CartDrawerProductsContainer;
