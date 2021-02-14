import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getTodos: [Todo!],
  }

  type Todo {
    id: Int!
    name: String!
    done: Boolean!
  }

  input TodoInput {
    name: String!
  }

  type Mutation {
    addTodo(data: TodoInput): [Todo]
  }
`
