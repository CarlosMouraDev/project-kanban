import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"

export const useTasks = () => {
  return useContext(TaskContext)
}