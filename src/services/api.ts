import type { Task } from "../entities/Task"


export const tasksService = {
  async fetchTasks(): Promise<Task[]> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`)
    const data: Task[] = await response.json()
    return data
  },

  async createTask(body: Omit<Task, "id">): Promise<Task> {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/tasks`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    )
    const newTask: Task = await response.json()
    return newTask
  },
  async updateTask(id: string, attributes: Partial<Omit<Task, "id">>): Promise<Task> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(attributes)
    })
    const updatedTask: Task = await response.json()
    return updatedTask
  },
  async delete(id: string) {
    await fetch(
      `${import.meta.env.VITE_API_URL}/tasks/${id}`,
      {
        method: "DELETE",
      }
    )
  }
}