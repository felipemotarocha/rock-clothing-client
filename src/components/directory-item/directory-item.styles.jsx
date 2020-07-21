import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: url(${(props) => props.backgroundImage}) center center/cover;
	background-color: rgba(0, 0, 0, 0.4);
	background-blend-mode: color;
	width: 100%;
	height: 100%;
	border-radius: 5px;
	transition: all 500ms ease;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

	&:hover {
		background-color: rgba(0, 0, 0, 0.6);
		cursor: pointer;
	}
`;

export const Text = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: rgba(240, 245, 249, 0.9);
	text-transform: uppercase;
	padding: 20px;
	border: 1px solid black;
	transition: background 500ms ease;
	color: #1e2022;
	border-radius: 5px;

	&:hover {
		cursor: pointer;
		background: #fff;
	}
`;

export const Title = styled.span`
	letter-spacing: 1px;
	font-weight: 500;
`;

export const Info = styled.div`
	font-size: 0.8rem;
`;
