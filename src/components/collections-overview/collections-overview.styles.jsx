import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 1024px) {
		max-width: 100%;
	}
`;
