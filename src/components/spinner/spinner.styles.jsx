import styled, { keyframes } from "styled-components";

const Spin = keyframes`
	100% {-webkit-transform: rotate(360deg);}
`;

export const Overlay = styled.div`
	height: 70vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	display: inline-block;
	width: 75px;
	height: 75px;
	border: 3px solid #c9d6df;
	border-radius: 50%;
	border-top-color: #1e2022;
	animation: ${Spin} 1s ease-in-out infinite;
	-webkit-animation: ${Spin} 1s ease-in-out infinite;
`;
