import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	@media (max-width: 1024px) {
		align-items: center;
	}
`;

export const Text = styled.span`
	font-size: 1rem;
	text-align: right;

	@media (max-width: 1024px) {
		text-align: center;
	}
`;

export const TestCard = styled.span`
	font-size: 1rem;
	text-align: right;
	color: red;
	font-weight: bold;

	@media (max-width: 1024px) {
		text-align: center;
	}
`;
