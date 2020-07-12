import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
`;

export const ProductsCount = styled.span`
	font-weight: 500;
	margin-left: -10px;
`;

export const Products = styled.div`
	width: 500px;
	padding: 0 20px;
`;

export const ProductsHeadline = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1.5rem;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 15px 0;

	h2 {
		margin: 0;
		border-bottom: 1px solid #c9d6df;
	}
`;
