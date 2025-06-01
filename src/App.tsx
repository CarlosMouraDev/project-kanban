import { Box, Flex, Heading } from "@radix-ui/themes"
import { CreateTaskForm } from "./components/CreateTaskForm"
import { TaskBoard } from "./components/TaskBoard"
import { TaskContextProvider } from "./contexts/TaskContext"

function App() {
  return (
    <TaskContextProvider>
      <Box maxWidth="80rem" mx="auto">
        <Box>
          <Flex align="center" gap="4" height="100%">
            <Heading as="h1" size="8" weight="light">React Kanban</Heading>
            <CreateTaskForm/>
          </Flex>
        </Box>
        <Box>
          <Heading as="h2" mb="4">Quadro de tarefas</Heading>
          <TaskBoard/>
        </Box>
      </Box>
    </TaskContextProvider>
  )
}

export default App
