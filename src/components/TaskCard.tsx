import { Badge, Button, Card, Flex, Heading, Text } from "@radix-ui/themes"
import type { Task, TaskPriority, TaskStatus } from "../entities/Task"

interface TaskCardProps {
  task: Task
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const getActionText = (status: TaskStatus) => {
    const actionTexts = {
      "todo": "Iniciar",
      "doing": "Concluir",
      "done": "Arquivar"
    }

    return actionTexts[status]
  }

  const getActionColor = (status: TaskStatus) => {
    const actionColors: { [key: string]: "indigo" | "green"  } = {
      "todo": "indigo",
      "doing": "green"
    }

    return actionColors[status]
  }

  const getPriorityColor = (priority: TaskPriority) => {
    const priorityColors: { [key: string]: "sky" | "amber" | "tomato" } = {
      "low": "sky",
      "medium": "amber",
      "high": "tomato"
    }

    return priorityColors[priority]
  }

  return (
    <Card>
      <Flex align="center" gap="4">
        <Heading as="h3" size="3" weight="bold">{task.title}</Heading>
        <Badge color={getPriorityColor(task.priority)}>{task.priority}</Badge>
      </Flex>

      <Text as="p" my="4">{task.description}</Text>

      <Flex gap="2">
        {task.status !== "done" && (
          <Button color={getActionColor(task.status)}>
            {getActionText(task.status)}
          </Button>
        )}
        <Button color="red">Excluir</Button>
      </Flex>
    </Card>
  )
}