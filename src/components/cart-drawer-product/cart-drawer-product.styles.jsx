import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	border-bottom: 1px solid #c9d6df;

	padding: 10px;
`;

export const Image = styled.div`
	background: url('${(props) => props.src}') center center/cover;
	width: 180px;
	height: 200px;
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
	font-size: 1.4rem;
`;

export const Price = styled.span`
	font-size: 1.1rem;
	font-weight: 400;
	margin: 5px 0;
	font-weight: 500;
	letter-spacing: 1px;
`;

export const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const Quantity = styled.span`
	font-weight: 500;
	margin: 0 5px;
`;

export const ClearContainer = styled.div`
	position: absolute;
	right: 0;
	margin-right: 40px;
`;
