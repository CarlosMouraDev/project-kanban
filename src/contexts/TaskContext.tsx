import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Task } from "../entities/Task";
import { taskService } from "../services/api";

export interface TaskContextData {
  tasks: Task[],
  createTask: (attributes: Omit<Task, "id">) => Promise<Task>
  updateTask: (id: number, attributes: Partial<Omit<Task, "id">>) => Promise<void>
  deleteTask: (id: number) => Promise<void>
}

export const TaskContext = createContext({} as TaskContextData)

interface TaskContextProviderProps {
  children: ReactNode
}

export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    taskService.fetchTasks().then((data) => {
      setTasks(data)
    })
  })

  const createTask = async () => {
    const newTask: Task = { id: 100, title: "teste", description: "Teste", status: "todo" , priority: "low"}
    return newTask
  }

  const updateTask = async (id: number, attributes: Partial<Omit<Task, "id">>) => {
    
  }

  const deleteTask = async (id: number) => {
    
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}