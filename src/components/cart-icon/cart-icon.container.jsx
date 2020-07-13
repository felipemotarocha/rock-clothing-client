import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";

import CartIcon from "./cart-icon.component";

import { TOGGLE_CART_DRAWER_HIDDEN } from "../../graphql/mutations/client-mutations";
import { GET_CART_PRODUCTS_COUNT } from "../../graphql/queries/client-queries";

const CartIconContainer = () => {
	const [toggleCartDrawerHidden] = useMutation(TOGGLE_CART_DRAWER_HIDDEN);
	const {
		data: { cartProductsCount },
	} = useQuery(GET_CART_PRODUCTS_COUNT);

	return (
		<CartIcon
			toggleCartDrawerHidden={toggleCartDrawerHidden}
			cartProductsCount={cartProductsCount}
		/>
	);
};

export default CartIconContainer;
