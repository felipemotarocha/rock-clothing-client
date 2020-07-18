import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import {
	Container,
	Image,
	FormContainer,
	Headline,
	Text,
} from "./register.styles";

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

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#1E2022",
		},
	},
});

const RegisterPage = ({ registerUser }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const classes = useStyles();

	const handleSubmit = async () => {
		try {
			const data = await registerUser({
				variables: { name, email, password },
			});
			console.log(data);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<Container>
			<Image />
			<FormContainer className={classes.root}>
				<ThemeProvider theme={theme}>
					<Headline>Do not have an account?</Headline>
					<Text>Register with your e-mail and password</Text>
					<TextField
						id="name"
						type="text"
						label="Name"
						variant="outlined"
						value={name}
						onChange={({ target: { value } }) => setName(value)}
					/>
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
						Register
					</Button>
				</ThemeProvider>
			</FormContainer>
		</Container>
	);
};

export default RegisterPage;
