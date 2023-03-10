import { gql } from "@apollo/client";

const loginMutation = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      accessToken
    }
  }
`;

const authenticateMutation = gql`
  mutation authenticateMutation($uid: String!, $email: String!) {
    authenticate(uid: $uid, email: $email) {
      id
      uid
      email
    }
  }
`;

export { loginMutation, authenticateMutation };
