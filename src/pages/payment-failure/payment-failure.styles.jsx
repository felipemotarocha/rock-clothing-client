import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	height: calc(100vh - 64px);
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Text = styled.div`
	font-weight: 600;
	font-size: 2rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-bottom: 10px;
`;
