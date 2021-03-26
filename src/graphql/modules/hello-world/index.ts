import { createModule, gql } from "graphql-modules";

export const HelloWorld = createModule({
  id: "hello-world",
  dirname: __dirname,
  typeDefs: gql`
    type Query {
      hello: String!
    }
  `,
  resolvers: {
    Query: {
      hello: () => "world",
    },
  },
});
