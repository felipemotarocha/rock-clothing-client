import React from "react";

import {
  Container,
  Headline,
  Product,
  ProductImage,
  Text,
  Name,
  Price,
} from "./collection-overview.styles";

const CollectionOverview = ({ name, products }) => {
  return (
    <Container>
      <Headline>
        <h2>{name}</h2>
      </Headline>
      {products.map(({ id, name, price, imageUrl }) => (
        <Product key={id}>
          <ProductImage src={imageUrl} />
          <Text>
            <Name>{name}</Name>
            <Price>${price}</Price>
          </Text>
        </Product>
      ))}
    </Container>
  );
};

export default CollectionOverview;
