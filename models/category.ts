import { model, Schema, Document } from 'mongoose';

interface ICategory extends Document {
    id: number;
    name: string;
}

const categorySchema = new Schema<ICategory>({
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