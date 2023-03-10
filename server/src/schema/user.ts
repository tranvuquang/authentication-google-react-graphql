export const typeUser = `#graphql
  scalar Date

  type User {
    id: String!
    email: String!
    uid:String!
    createdAt: Date
    updatedAt: Date
  }

  input RegisterInput {
    email: String!
    password: String!
  }

  type Query {
    getUser(id:String):User!
    getUsers:[User]!
  }
 
  type Mutation {
    authenticate(email: String!, uid: String!): User!
  }
`;
