import { Response, Request } from 'express'
import { ITodo } from './../types/todo'
import Todo from '../models/todo'

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, 'text'>

    const todo: ITodo = new Todo({
      text: body.text,
    })

    const newTodo: ITodo = await todo.save()
    const allTodos: ITodo[] = await Todo.find()

    res.status(201).json({ message: 'Todo added', todo: newTodo, todos: allTodos })
  } catch (error) {
    throw error
  }
}

export { addTodo }
