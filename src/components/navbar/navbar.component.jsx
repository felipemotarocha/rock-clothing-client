import React from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { default as CartDrawer } from "../cart-drawer/cart-drawer.container";

import { CartButton } from "./navbar.styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "#1e2022",
		position: "sticky",
		top: 0,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		"&:hover": {
			cursor: "pointer",
		},
	},
}));

const Navbar = () => {
	const history = useHistory();
	const classes = useStyles();

	return (
		<AppBar className={classes.root}>
			<Toolbar>
				<Typography
					variant="h6"
					className={classes.title}
					onClick={() => history.push("/")}
				>
					ROCK CLOTHING
				</Typography>
				<Button color="inherit" onClick={() => history.push("/shop")}>
					Shop
				</Button>
				<Button color="inherit" onClick={() => history.push("/login")}>
					Login
				</Button>
				<Button color="inherit" onClick={() => history.push("/register")}>
					Register
				</Button>
				<CartButton>
					<CartDrawer />
				</CartButton>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
