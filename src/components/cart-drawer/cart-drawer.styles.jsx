import styled from "styled-components";

export const Container = styled.div``;

export const Products = styled.div``;

export const Footer = styled.div`
	margin-bottom: 10px;
`;

export const EmptyMessage = styled.span`
	font-weight: 600;
	font-size: 1.5rem;
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	margin: auto;

	@media (max-width: 1024px) {
		font-size: 1.1rem;
	}
`;
