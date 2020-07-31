import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuItem from "@material-ui/core/MenuItem";

import { default as CartDrawer } from "../cart-drawer/cart-drawer.container";

import {
	CartButton,
	StyledAppBar,
	StyledToolbar,
	Logo,
	Items,
	StyledMenu,
} from "./navbar.styles";

const Navbar = ({ currentUser, logoutCurrentUser }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const history = useHistory();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<StyledAppBar>
			<StyledToolbar>
				<Logo onClick={() => history.push("/")}>Rock Clothing</Logo>

				<Items>
					<Button color="inherit" onClick={() => history.push("/shop")}>
						Shop
					</Button>
					{currentUser ? (
						<>
							<Button color="inherit" onClick={handleClick}>
								Olá, {currentUser.name}!
							</Button>
							<StyledMenu
								id="simple-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
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
							</StyledMenu>
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
				</Items>
			</StyledToolbar>
		</StyledAppBar>
	);
};

export default Navbar;
