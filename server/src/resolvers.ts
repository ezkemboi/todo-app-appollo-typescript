
const resolvers = {
  Query: {
    getTodos: async () => {
      return []
    }
  },
  Mutation: {
    addTodo: async () => {
      return {
        id: 1,
        name: 'Ezrqn',
        done: false
      }
    }
  }
}

export default resolvers