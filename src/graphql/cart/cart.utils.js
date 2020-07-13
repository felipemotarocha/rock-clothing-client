export const addProductToCart = (cartProducts, productToAdd) => {
	// Checking if the product is already in the cart
	const existingProduct = cartProducts.find(
		(product) => product.id === productToAdd.id
	);
	if (existingProduct) {
		return cartProducts.map((product) =>
			product.id === productToAdd.id
				? { ...product, quantity: product.quantity + 1 }
				: product
		);
	}

	return [...cartProducts, { ...productToAdd, quantity: 1 }];
};

export const getCartProductsCount = (cartProducts) =>
	cartProducts.reduce((accumulutatedQuantity, cartProduct) => {
		return accumulutatedQuantity + cartProduct.quantity;
	}, 0);

export const getCartProductsTotal = (cartProducts) =>
	cartProducts.reduce((accumulatedPrice, cartProduct) => {
		return accumulatedPrice + cartProduct.quantity * cartProduct.price;
	}, 0);
