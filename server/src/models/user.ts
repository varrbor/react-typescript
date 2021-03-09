import { IUser } from '../types/user';
import { model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    accessToken: {
      type: String,
    },
  },
  {timestamps: true}
)

export default model<IUser>('User', UserSchema);

