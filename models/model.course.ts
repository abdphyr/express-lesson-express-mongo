import { model, Schema, Document, ObjectId } from 'mongoose'
import { categorySchema, ICategory } from './model.category'

export interface ICourse extends Document<ObjectId> {
    title: string;
    trainer: string;
    status: string;
    tags: string[];
    category : ICategory & { _id: ObjectId |  undefined }
}

const courseSchema = new Schema<ICourse>({
    title: { type: String, required: true },
    trainer: { type: String, required: true },
    status: { type: String, required: true },
    tags: { type: [String], required: true },
    category: categorySchema
})

export const Course = model<ICourse>('Course', courseSchema)





