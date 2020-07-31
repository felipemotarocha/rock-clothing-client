import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";

export const StyledAppBar = styled(AppBar)`
	position: sticky !important;
	top: 0;
	width: 100vw;
	display: flex;
	align-items: center;
	flex-direction: row;
`;

export const StyledToolbar = styled(Toolbar)`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;

	@media (max-width: 1024px) {
		flex-direction: column;
		justify-content: center;
		padding-top: 10px;
	}
`;

export const Logo = styled.span`
	font-size: 1.5rem;
	text-transform: uppercase;
	font-weight: 500;

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 1024px) {
		font-size: 1.2rem;
	}
`;

export const Items = styled.div`
	display: flex;
`;

export const StyledMenu = styled(Menu)`
	margin-top: 50px;

	@media (max-width: 1024px) {
		margin-top: 60px;
	}
`;

export const CartButton = styled.div`
	display: flex;
`;
