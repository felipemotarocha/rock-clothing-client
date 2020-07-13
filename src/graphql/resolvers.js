import { gql } from "apollo-boost";

import {
	addProductToCart,
	getCartProductsCount,
	getCartProductsTotal,
} from "./cart/cart.utils";
import {
	GET_CART_PRODUCTS,
	GET_CART_PRODUCTS_COUNT,
	GET_CART_PRODUCTS_TOTAL,
	GET_CART_DRAWER_HIDDEN,
} from "./queries/client-queries";

export const typeDefs = gql`
	extend type Product {
		quantity: Int
	}

	extend type Mutation {
		AddProductToCart(product: Product!): [Product]!
		ToggleCartDrawerHidden: Boolean!
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

	cache.writeQuery({
		query: GET_CART_PRODUCTS_TOTAL,
		data: { cartProductsTotal: getCartProductsTotal(newCartProducts) },
	});
};

export const resolvers = {
	Mutation: {
		toggleCartDrawerHidden: (_root, _args, { cache }) => {
			const { cartDrawerHidden } = cache.readQuery({
				query: GET_CART_DRAWER_HIDDEN,
			});

			cache.writeQuery({
				query: GET_CART_DRAWER_HIDDEN,
				data: { cartDrawerHidden: !cartDrawerHidden },
			});

			return !cartDrawerHidden;
		},
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
