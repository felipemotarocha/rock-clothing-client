import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { Container, Text } from "./payment-failure.styles";

const useQuery = () => new URLSearchParams(useLocation().search);

const PaymentFailurePage = () => {
	const query = useQuery();
	const history = useHistory();

	return (
		<Container>
			<Text>Your payment of ${query.get("amount")} was not successful :(</Text>
			<Button
				variant="contained"
				color="primary"
				startIcon={<ShoppingBasketIcon />}
				onClick={() => history.push("/checkout")}
			>
				GO BACK TO CHECKOUT
			</Button>
		</Container>
	);
};

export default PaymentFailurePage;
