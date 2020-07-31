import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Headline = styled.span`
	font-size: 1.5rem;
	text-transform: uppercase;
	font-weight: 500;
	letter-spacing: 1px;
	text-align: center;

	h2 {
		display: inline-block;
		border-bottom: 1px solid #c9d6df;

		&:hover {
			cursor: pointer;
		}
	}
`;

export const Products = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: center;
`;
