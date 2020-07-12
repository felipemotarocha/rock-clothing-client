import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Text, Title, Info } from "./directory-item.styles";

const DirectoryItem = ({ id, title, imageUrl, routeName }) => {
  const history = useHistory();

  return (
    <Container
      backgroundImage={imageUrl}
      onClick={() => history.push(`/shop/${routeName}`)}
    >
      <Text>
        <Title>{title}</Title>
        <Info>SHOP NOW</Info>
      </Text>
    </Container>
  );
};

export default DirectoryItem;
