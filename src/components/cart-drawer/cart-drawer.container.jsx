import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import {
	GET_CART_DRAWER_HIDDEN,
	GET_CART_PRODUCTS_TOTAL,
} from "../../graphql/queries/client-queries";
import { TOGGLE_CART_DRAWER_HIDDEN } from "../../graphql/mutations/client-mutations";
import CartDrawer from "./cart-drawer.component";

const CartDrawerContainer = () => {
	const {
		data: { cartDrawerHidden },
	} = useQuery(GET_CART_DRAWER_HIDDEN);

	const {
		data: { cartProductsTotal },
	} = useQuery(GET_CART_PRODUCTS_TOTAL);

	const [toggleCartDrawerHidden] = useMutation(TOGGLE_CART_DRAWER_HIDDEN);

	return (
		<CartDrawer
			cartDrawerHidden={cartDrawerHidden}
			toggleCartDrawerHidden={toggleCartDrawerHidden}
			cartProductsTotal={cartProductsTotal}
		/>
	);
};

export default CartDrawerContainer;
