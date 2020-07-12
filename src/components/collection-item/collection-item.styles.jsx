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
	}
`;

export const AddToCartButton = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 0;
	margin-bottom: 60px;
	width: 100%;
	opacity: 0;
	transition: all 300ms ease;
`;

export const Product = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	height: 520px;
	width: 420px;
	margin: 0 10px;
`;

export const ProductImage = styled.div`
	display: inline-block;
	height: 90%;
	width: 100%;
	border-radius: 5px;
  background: url('${(props) => props.src}') center center/cover;
  background-color: none;
  background-blend-mode: color;
  transition: all 300ms ease;

	&:hover {
		background-color: rgba(0, 0, 0, 0.4);
		background-blend-mode: color;
    cursor: pointer;

		& ${AddToCartButton} {
			opacity: 100;
		}
	}
`;

export const Text = styled.div`
	margin-top: 5px;
	display: flex;
	justify-content: space-between;
	font-weight: 500;
	font-size: 1.1rem;
`;

export const Name = styled.span``;

export const Price = styled.span``;
