import styled from "styled-components";

export const Item = styled.div`
  height: 230px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 7px;
  margin: 50px auto;
  width: 90%;
  height: 100%;

  & ${Item}:nth-child(3) {
    grid-column: 1 / span 2;
    height: 330px;
  }
`;
