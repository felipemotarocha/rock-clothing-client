import React from "react";
import { useHistory } from "react-router-dom";

// Material UI elements
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

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
				<Button color="inherit">Login</Button>
				<IconButton color="inherit" aria-label="See your cart">
					<ShoppingCartIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
