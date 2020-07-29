import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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
	menu: {
		marginTop: "50px",
	},
	menuItem: {
		color: "#1e2022",
	},
}));

const Navbar = ({ currentUser, logoutCurrentUser }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const history = useHistory();
	const classes = useStyles();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

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
				{currentUser ? (
					<>
						<Button color="inherit" onClick={handleClick}>
							Olá, {currentUser.name}!
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
							className={classes.menu}
						>
							<MenuItem onClick={handleClose}>
								<Button
									color="inherit"
									startIcon={<ExitToAppIcon />}
									onClick={() => {
										logoutCurrentUser();
										return history.push("");
									}}
								>
									Sign out
								</Button>
							</MenuItem>
						</Menu>
					</>
				) : (
					<>
						<Button color="inherit" onClick={() => history.push("/login")}>
							Login
						</Button>
						<Button color="inherit" onClick={() => history.push("/register")}>
							Register
						</Button>
					</>
				)}

				<CartButton>
					<CartDrawer />
				</CartButton>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
