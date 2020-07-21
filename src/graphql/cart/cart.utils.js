export const addCartProduct = (cartProducts, productToAdd) => {
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

export const decreaseCartProductQuantity = (cartProducts, productId) => {
	const productToRemove = cartProducts.find(({ id }) => id === productId);

	if (productToRemove.quantity === 1) {
		return cartProducts.filter(({ id }) => id !== productId);
	}

	return cartProducts.map((product) =>
		product.id === productId
			? { ...product, quantity: product.quantity - 1 }
			: product
	);
};

export const clearCartProduct = (cartProducts, productId) =>
	cartProducts.filter(({ id }) => id !== productId);
