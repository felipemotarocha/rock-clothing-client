import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import {
	Product,
	ProductImage,
	AddToCartButton,
	Text,
	Name,
	Price,
} from "./collection-item.styles";

const useStyles = makeStyles((theme) => ({
	"add-to-cart-button": {
		width: "75%",
	},
}));

const CollectionItem = ({ product, addCartProduct }) => {
	const classes = useStyles();

	const { name, price, imageUrl } = product;
	return (
		<Product>
			<ProductImage src={imageUrl}>
				<AddToCartButton>
					<Button
						variant="contained"
						color="primary"
						className={classes["add-to-cart-button"]}
						startIcon={<AddShoppingCartIcon />}
						onClick={addCartProduct}
					>
						ADD TO CART
					</Button>
				</AddToCartButton>
			</ProductImage>

			<Text>
				<Name>{name}</Name>
				<Price>${price}</Price>
			</Text>
		</Product>
	);
};

export default CollectionItem;
