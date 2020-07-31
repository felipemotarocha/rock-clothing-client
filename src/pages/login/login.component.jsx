import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";

import {
	Container,
	Image,
	FormContainer,
	Headline,
	Text,
} from "./login.styles";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "100%",
		},
		"& .MuiButton-root": {
			margin: theme.spacing(1),
		},
	},
}));

const LoginPage = ({ loginUser }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

	const classes = useStyles();

	const handleSubmit = async () => {
		try {
			await loginUser({
				variables: { email, password },
			});
		} catch ({ message }) {
			alert(message);
		}
	};

	return (
		<Container>
			<FormContainer className={classes.root}>
				<Headline>Already have an account?</Headline>
				<Text>Login with your e-mail and password</Text>
				<TextField
					id="email"
					type="email"
					label="E-mail Address"
					variant="outlined"
					value={email}
					onChange={({ target: { value } }) => setEmail(value)}
				/>
				<TextField
					id="password"
					type="password"
					label="Password"
					variant="outlined"
					value={password}
					onChange={({ target: { value } }) => setPassword(value)}
				/>
				<Button variant="contained" color="primary" onClick={handleSubmit}>
					Login
				</Button>
			</FormContainer>
			{isMobile ? "" : <Image />}
		</Container>
	);
};

export default LoginPage;
