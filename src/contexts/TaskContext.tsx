import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Task } from "../entities/Task";
import { tasksService } from "../services/api";

export interface TaskContextData {
  tasks: Task[],
  createTask: (attributes: Omit<Task, "id">) => Promise<void>
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
    tasksService.fetchTasks().then((data) =>  setTasks(data))
  }, [])

  const createTask = async (attributes: Omit<Task, "id">) => {
    const newTask = await tasksService.createTask(attributes)
    setTasks((currentState) =>  [...currentState, newTask])
  }

  const updateTask = async (id: number, attributes: Partial<Omit<Task, "id">>) => {
    
  }

  const deleteTask = async (id: number) => {
    await tasksService.delete(id)
    setTasks((currentState) => currentState.filter((task) => task.id !== id))
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}