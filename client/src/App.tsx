import React, { useEffect, useState } from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  Input,
  Button,
  Grid,
  theme,
  GridItem,
  Flex,
  Checkbox
} from "@chakra-ui/react"
import { AiFillEdit,  AiFillDelete } from "react-icons/ai";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

interface TodoEntity {
  id: number;
  name: string;
  done: Boolean;
}

export const App = () => {
  const initialItems : TodoEntity[] = [];
  let initialState = {
    todos: initialItems
  }
  const [ state, setState ] = useState(initialState);

  useEffect(() => {
    const fetchTodos = async () => {
      const items : TodoEntity[] = [
        {
          id: 1,
          name: 'Wakeup at 7Am',
          done: true,
        },
        {
          id: 2,
          name: 'Take breakfast',
          done: false,
        },
        {
          id: 3,
          name: 'Start coding my todo app',
          done: false,
        },
        {
          id: 3,
          name: 'Watch a movie',
          done: true,
        },
      ]
      setState(prevState => ({
        ...prevState,
        todos: items
      }))
    }

    fetchTodos();
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Heading justifySelf="center" as="h3" size="lg">Todo List App</Heading>
          <Grid templateColumns="repeat(6, 1fr)" gap={6} p={4}>
            <GridItem colStart={1} colEnd={3} padding={5} borderRight="1px solid black" minH="80vh">
              <Text marginBottom={2}>Add an item</Text>
              <Flex w="100%" flexDirection="column">
                <Input placeholder="Add item" />
                <Button 
                  alignSelf="center" m={4} 
                  w="25%" 
                  colorScheme="teal"
                >
                  Add
                </Button>
              </Flex>
            </GridItem>
            <GridItem colStart={3} colEnd={5}>
              {
                state.todos.length > 0 ?
                state.todos.map((todo, index) => {
                  return (
                    <Flex key={index} w="100%" alignItems="center" justifyContent="space-between">
                      <Flex>
                        <Checkbox 
                          colorScheme="green"
                          isChecked={todo.done ? true : false}
                        />
                        <Text paddingLeft={3}>{todo.name}</Text>
                      </Flex>
                      <Flex>
                        <Box paddingRight={5}>
                          <AiFillEdit color="blue"/>
                        </Box>
                        <AiFillDelete color="red"/>
                      </Flex>
                    </Flex>
                  )
                })
                :
                <Text>There are currently no todos.</Text>
              }
            </GridItem>
          </Grid>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
