import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PaymentIcon from "@material-ui/icons/Payment";

import { Container, Text } from "./stripe-payment-button.styles";

// Setting up Stripe with the publishable key
const stripePromise = loadStripe("pk_test_UDSy9JNhGbKE8n1248rXqvlY00jXcaCkgt");

const useStyles = makeStyles(() => ({
	button: {
		margin: "8px 0",
		width: "85%",
	},
}));

const StripeCheckoutButton = ({ price }) => {
	const classes = useStyles();
	const priceForStripe = price * 100;

	const handleClick = async () => {
		try {
			const {
				data: { sessionId },
			} = await axios.get("http://localhost:5000/product-payment", {
				params: {
					amount: priceForStripe,
				},
			});
			const stripe = await stripePromise;
			await stripe.redirectToCheckout({
				sessionId,
			});
		} catch (err) {
			alert(err.message);
		}
	};
	return (
		<Container>
			<Button
				variant="contained"
				className={classes.button}
				color="primary"
				onClick={handleClick}
				startIcon={<PaymentIcon />}
			>
				PAY NOW
			</Button>
			<Text>You will be redirected to the Stripe checkout page.</Text>
		</Container>
	);
};

export default StripeCheckoutButton;
