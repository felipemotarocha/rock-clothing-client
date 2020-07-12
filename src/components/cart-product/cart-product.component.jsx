import React from "react";

import {
	Container,
	Image,
	Text,
	Name,
	Price,
	Quantity,
} from "./cart-product.styles";

const CartProduct = ({ product: { id, name, price, imageUrl, quantity } }) => {
	return (
		<Container>
			<Image src={imageUrl} />
			<Text>
				<Name>{name}</Name>
				<Price>${price}</Price>
				<Quantity>{quantity}</Quantity>
			</Text>
		</Container>
	);
};

export default CartProduct;
