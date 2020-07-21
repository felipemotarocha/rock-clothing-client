import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import {
	Container,
	Image,
	Name,
	Price,
	QuantityContainer,
	Quantity,
	Remove,
} from "./checkout-product.styles";

const CheckoutProduct = ({
	product: { name, price, imageUrl, quantity },
	addCartProduct,
	decreaseCartProductQuantity,
	clearCartProduct,
}) => {
	return (
		<Container>
			<Image src={imageUrl} />
			<Name>{name}</Name>
			<Price>${price}</Price>

			<QuantityContainer>
				<IconButton
					aria-label="minus"
					color="primary"
					onClick={decreaseCartProductQuantity}
				>
					<RemoveIcon />
				</IconButton>
				<Quantity>{quantity}</Quantity>
				<IconButton aria-label="plus" color="primary" onClick={addCartProduct}>
					<AddIcon />
				</IconButton>
			</QuantityContainer>

			<Remove>
				<IconButton
					aria-label="remove"
					color="primary"
					onClick={clearCartProduct}
				>
					<CloseIcon />
				</IconButton>
			</Remove>
		</Container>
	);
};

export default CheckoutProduct;
