import { gql } from "apollo-boost";

import { addProductToCart, getCartProductsCount } from "./cart/cart.utils";
import {
	GET_CART_PRODUCTS,
	GET_CART_PRODUCTS_COUNT,
} from "./queries/client-queries";

export const typeDefs = gql`
	extend type Product {
		quantity: Int
	}

	extend type Mutation {
		AddProductToCart(product: Product!): [Product]!
	}
`;

const updateCartProductsRelatedQueries = (cache, newCartProducts) => {
	cache.writeQuery({
		query: GET_CART_PRODUCTS,
		data: { cartProducts: newCartProducts },
	});

	cache.writeQuery({
		query: GET_CART_PRODUCTS_COUNT,
		data: { cartProductsCount: getCartProductsCount(newCartProducts) },
	});
};

export const resolvers = {
	Mutation: {
		addProductToCart: (_root, { product }, { cache }) => {
			const { cartProducts } = cache.readQuery({
				query: GET_CART_PRODUCTS,
			});

			const newCartProducts = addProductToCart(cartProducts, product);
			updateCartProductsRelatedQueries(cache, newCartProducts);

			return newCartProducts;
		},
	},
};
