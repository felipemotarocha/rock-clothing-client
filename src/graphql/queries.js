import { gql } from "apollo-boost";

export const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      imageUrl
      routeName
    }
  }
`;

export const GET_COLLECTION_PRODUCTS = gql`
  query collection($title: String!) {
    collection(title: $title) {
      products {
        id
        name
        imageUrl
        price
      }
    }
  }
`;
