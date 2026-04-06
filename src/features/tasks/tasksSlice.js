import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', text: 'Купить продукты', completed: false, date: '2025-01-01' },
  { id: '2', text: 'Сделать зарядку', completed: true, date: '2025-01-02' },
  { id: '3', text: 'Прочитать книгу', completed: false, date: '2025-01-03' },
]

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
            date: new Date().toLocaleDateString('ru-RU'),
          }
        }
      }
    },
    taskToggled(state, action) {
      const task = state.find(task => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    taskDeleted(state, action) {
      return state.filter(task => task.id !== action.payload)
    },
  }
})

export const { taskAdded, taskToggled, taskDeleted } = tasksSlice.actions

export const selectAllTasks = (state) => state.tasks
export const selectActiveTasks = (state) => state.tasks.filter(task => !task.completed)
export const selectCompletedTasks = (state) => state.tasks.filter(task => task.completed)

export default tasksSlice.reducer