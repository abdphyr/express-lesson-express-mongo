import { model, Schema, Document, ObjectId } from 'mongoose';

export interface ICategory extends Document<ObjectId> {
    id: number;
    name: string;
}

export const categorySchema = new Schema<ICategory>({
    id: { type: Number, required: true },
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
        lowercase: true,
        trim: true,
    }
}, { collection: 'category' })

export const Category = model<ICategory>("Category", categorySchema)