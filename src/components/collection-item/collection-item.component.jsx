import React from "react";

import {
  Product,
  ProductImage,
  Text,
  Name,
  Price,
} from "./collection-item.styles";

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <Product>
      <ProductImage src={imageUrl} />
      <Text>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Text>
    </Product>
  );
};

export default CollectionItem;
