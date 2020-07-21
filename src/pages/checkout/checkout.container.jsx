import React from "react";
import { useQuery } from "@apollo/react-hooks";

import {
	GET_CART_PRODUCTS,
	GET_CART_PRODUCTS_TOTAL,
} from "../../graphql/queries/client-queries";

import CheckoutPage from "./checkout.component";

const CheckoutPageContainer = () => {
	const {
		data: { cartProducts },
	} = useQuery(GET_CART_PRODUCTS);
	const {
		data: { cartProductsTotal },
	} = useQuery(GET_CART_PRODUCTS_TOTAL);

	return (
		<CheckoutPage
			cartProducts={cartProducts}
			cartProductsTotal={cartProductsTotal}
		/>
	);
};

export default CheckoutPageContainer;
