import React from "react";
import { useMutation } from "@apollo/react-hooks";

import {
	createMuiTheme,
	ThemeProvider,
	makeStyles,
} from "@material-ui/core/styles";
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
import { ADD_PRODUCT_TO_CART } from "../../graphql/mutations/client-mutations";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#1e2022",
		},
	},
});

const useStyles = makeStyles((theme) => ({
	"add-to-cart-button": {
		width: "75%",
	},
}));

const CollectionItem = ({ product }) => {
	const classes = useStyles();
	const [addProductToCart] = useMutation(ADD_PRODUCT_TO_CART, {
		variables: { product },
	});

	const { name, price, imageUrl } = product;
	return (
		<Product>
			<ProductImage src={imageUrl}>
				<AddToCartButton>
					<ThemeProvider theme={theme}>
						<Button
							variant="contained"
							color="primary"
							className={classes["add-to-cart-button"]}
							startIcon={<AddShoppingCartIcon />}
							onClick={addProductToCart}
						>
							ADD TO CART
						</Button>
					</ThemeProvider>
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
