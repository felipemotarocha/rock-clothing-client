import React from "react";

import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";

import {
	Container,
	Image,
	Text,
	Name,
	Price,
	QuantityContainer,
	Quantity,
	ClearContainer,
} from "./cart-drawer-product.styles";

const CartProduct = ({
	product: { name, price, imageUrl, quantity },
	decreaseCartProductQuantity,
	addCartProduct,
	clearCartProduct,
}) => {
	return (
		<Container>
			<Image src={imageUrl} />
			<Text>
				<Name>{name}</Name>
				<Price>${price}</Price>
				<QuantityContainer>
					<IconButton
						aria-label="decrease"
						size="small"
						color="primary"
						onClick={decreaseCartProductQuantity}
					>
						<RemoveIcon />
					</IconButton>
					<Quantity>{quantity}</Quantity>
					<IconButton
						aria-label="increase"
						size="small"
						color="primary"
						onClick={addCartProduct}
					>
						<AddIcon />
					</IconButton>
				</QuantityContainer>
				<ClearContainer>
					<IconButton
						aria-label="increase"
						size="small"
						color="primary"
						onClick={clearCartProduct}
					>
						<ClearIcon />
					</IconButton>
				</ClearContainer>
			</Text>
		</Container>
	);
};

export default CartProduct;
