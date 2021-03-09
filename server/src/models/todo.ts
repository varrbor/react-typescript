import { ITodo } from '../types/todo';
import { model, Schema } from 'mongoose';

const todoSchema: Schema = new Schema(
  {
    text: {
      type: String,
    },
  },
  {timestamps: true}
)

export default model<ITodo>('Todo', todoSchema);
