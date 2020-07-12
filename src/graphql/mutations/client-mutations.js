import { gql } from "apollo-boost";

export const ADD_PRODUCT_TO_CART = gql`
	mutation AddProductToCart($product: Product) {
		addProductToCart(product: $product) @client
	}
`;
