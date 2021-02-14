import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./typedefs";
import resolvers from "./resolvers";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app, path: "/"});
const port = 8000;
app.listen(port, () => {
  console.log(`App listening to Port: ${port}`)
})

export default app;
