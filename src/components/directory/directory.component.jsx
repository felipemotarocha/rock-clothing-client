import React from "react";
import { useQuery } from "@apollo/react-hooks";
import DirectoryItem from "../directory-item/directory-item.component";

import { Container, Item } from "./directory.styles";
import { GET_COLLECTIONS } from "../../graphql/queries";

const Directory = (props) => {
  const { loading, data } = useQuery(GET_COLLECTIONS);

  if (loading) return "Loading...";

  const { collections } = data;
  return (
    <Container>
      {collections.map(({ id, title, imageUrl, routeName }) => (
        <Item key={id}>
          <DirectoryItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            routeName={routeName}
          />
        </Item>
      ))}
    </Container>
  );
};

export default Directory;
