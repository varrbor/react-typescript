import { Document } from 'mongoose'

export interface ITodo extends Document {
    text: string
}

export interface IProduct extends Document {
    name: string
}


