import { createModule, gql } from "graphql-modules";

import { createApplication, Application } from "graphql-modules";

import { HelloWorld } from "./hello-world";

// export const HelloWorld = createModule({
//   id: "hello-world",
//   dirname: __dirname,
//   typeDefs: gql`
//     type Query {
//       hello: String!
//     }
//   `,
//   resolvers: {
//     Query: {
//       hello: () => "world",
//     },
//   },
// });

export const application: Application = createApplication({
  modules: [HelloWorld],
});

export default application.schema;
