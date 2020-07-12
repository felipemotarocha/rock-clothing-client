import React from "react";
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

const CollectionItem = ({ name, price, imageUrl }) => {
	const classes = useStyles();

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
