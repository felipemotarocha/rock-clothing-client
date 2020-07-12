import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	border-bottom: 1px solid #c9d6df;

	padding: 10px;
`;

export const Image = styled.img`
	display: inline-block;
	width: 180px;
	height: 180px;
	border-radius: 5px;
`;

export const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 10px;
`;

export const Name = styled.span`
	font-weight: 500;
	font-size: 1.2rem;
`;

export const Price = styled.span`
	font-size: 1.1rem;
	font-weight: 400;
`;

export const Quantity = styled.span``;
