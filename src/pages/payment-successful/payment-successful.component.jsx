import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";

import { Container, Text } from "./payment-successful.styles";

const useQuery = () => new URLSearchParams(useLocation().search);

const PaymentSuccessfulPage = () => {
	const query = useQuery();
	const history = useHistory();

	return (
		<Container>
			<Text>Your payment of ${query.get("amount")} was successful!</Text>
			<Button
				variant="contained"
				color="primary"
				startIcon={<ShopTwoIcon />}
				onClick={() => history.push("/shop")}
			>
				Shop more
			</Button>
		</Container>
	);
};

export default PaymentSuccessfulPage;
