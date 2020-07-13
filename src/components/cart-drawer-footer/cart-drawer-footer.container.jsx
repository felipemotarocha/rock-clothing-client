import React from "react";
import { useQuery } from "@apollo/react-hooks";

import CartDrawerFooter from "./cart-drawer-footer.component";

import { GET_CART_PRODUCTS_TOTAL } from "../../graphql/queries/client-queries";

const CartDrawerFooterContainer = () => {
	const {
		data: { cartProductsTotal },
	} = useQuery(GET_CART_PRODUCTS_TOTAL);

	return <CartDrawerFooter cartProductsTotal={cartProductsTotal} />;
};

export default CartDrawerFooterContainer;
