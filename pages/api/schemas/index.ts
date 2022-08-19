import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    signUpUser: [User]
    signInUser: (name: String!): User!
    logOutuser: (name: String!): User!
  }
`;
