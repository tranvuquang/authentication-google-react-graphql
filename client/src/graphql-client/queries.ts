import { gql } from "@apollo/client";

const getUsersQuery = gql`
  query getUsersQuery {
  getUsers {
    id
    email
    uid
    createdAt
    updatedAt
  }
}
`;

const getUserQuery = gql`
  query getUserQuery($id: String) {
  getUser(id: $id) {
    id
    email
    uid
    createdAt
    updatedAt
  }
}
`;

export { getUsersQuery, getUserQuery };
