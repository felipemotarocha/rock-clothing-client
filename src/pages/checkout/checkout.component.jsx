import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import { default as CheckoutProduct } from "../../components/checkout-product/checkout-product.container";

import {
	Container,
	Headline,
	Header,
	HeaderItem,
	EmptyMessage,
	Total,
} from "./checkout.styles";

const useStyles = makeStyles((theme) => ({
	"shop-now-button": {
		width: "40%",
		margin: "10px 0",
	},
}));

const CheckoutPage = ({ cartProducts, cartProductsTotal }) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Container>
			<Headline>
				<h2>CHECKOUT</h2>
			</Headline>
			{cartProducts.length > 0 ? (
				<>
					<Header>
						<HeaderItem>Product Image</HeaderItem>
						<HeaderItem>Name</HeaderItem>
						<HeaderItem>Price</HeaderItem>
						<HeaderItem>Quantity</HeaderItem>
						<HeaderItem>Remove</HeaderItem>
					</Header>

					{cartProducts.map((product) => (
						<CheckoutProduct product={product} />
					))}
					<Total>Total: ${cartProductsTotal}</Total>
				</>
			) : (
				<EmptyMessage>
					<p>Your cart is empty.</p>
					<p>Start by adding some product you like! :)</p>
					<Button
						variant="contained"
						color="primary"
						className={classes["shop-now-button"]}
						onClick={() => history.push("/shop")}
					>
						Shop now
					</Button>
				</EmptyMessage>
			)}
		</Container>
	);
};

export default CheckoutPage;
