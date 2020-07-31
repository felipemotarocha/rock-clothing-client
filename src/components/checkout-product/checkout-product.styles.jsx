import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 250px repeat(3, 1fr) 250px;
	align-items: center;
	padding: 15px 0;
	border-bottom: 1px solid #c9d6df;
	color: #1e2022;

	@media (max-width: 1024px) {
		display: flex;
		flex-direction: column;
	}
`;

export const Image = styled.div`
  background: url('${(props) => props.src}') center center/cover;
  height: 300px;
  width: 250px;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

export const Name = styled.div`
	text-align: center;
	font-size: 1.3rem;
	font-weight: 500;

	@media (max-width: 1024px) {
		margin-top: 30px;
	}
`;

export const Price = styled.div`
	text-align: center;
	font-size: 1.1rem;
	font-weight: 500;
`;

export const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Quantity = styled.div`
	font-size: 1.1rem;
	font-weight: 500;
`;

export const Remove = styled.div`
	text-align: center;
`;
