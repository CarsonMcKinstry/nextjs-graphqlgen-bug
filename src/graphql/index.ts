import { ApolloServer } from "apollo-server-micro";

import { application } from "./modules";

const schema = application.createSchemaForApollo();

export const apolloServer = new ApolloServer({
  schema,
});
