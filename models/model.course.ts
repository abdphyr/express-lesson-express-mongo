import { model, Schema, Document, ObjectId } from 'mongoose'
import { categorySchema, ICategory } from './model.category'

export interface ICourse extends Document<ObjectId> {
    title: string;
    fee: number;
    trainer: string;
    status: 'Active' | 'Inactive';
    tags: string[];
    category: ICategory & { _id: ObjectId | undefined }
}

export interface IReqCourse extends ICourse {
    categoryName: string;
}

export const courseSchema = new Schema<ICourse>({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    fee: {
        type: Number,
        required: true
    },
    trainer: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        required: true,
    },
    tags: {
        type: [String],
        required: true
    },
    category: {
        type: categorySchema,
        required: true
    }
})

export const Course = model<ICourse>('Course', courseSchema)





