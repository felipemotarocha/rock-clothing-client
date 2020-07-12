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

export const Product = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 520px;
  width: 420px;
  margin: 0 10px;
`;

export const ProductImage = styled.img`
  display: inline-block;
  height: 90%;
  width: 100%;
  border-radius: 5px;
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
