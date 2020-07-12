import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	margin: auto;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
`;

export const Headline = styled.span`
	width: 100%;
	text-transform: uppercase;
	letter-spacing: 1px;
	text-align: center;
	font-size: 1.5rem;
	color: #1e2022;

	h2 {
		display: inline-block;
		border-bottom: 1px solid #c9d6df;

		&:hover {
			cursor: pointer;
		}
	}
`;
