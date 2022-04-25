import { Schema, model, Document, ObjectId } from 'mongoose';
import { courseSchema } from './model.course';
import { customerSchema } from './model.customer';

export interface IReqEnrollment {
    customerId: string;
    courseId: string;
    courseFee: number;
}

interface IEnrollment extends Document<ObjectId> {
    customer: {
        _id: ObjectId;
        name: string;
    }
    course: {
        _id: ObjectId;
        title: string;
    }
    courseFee: number;
    datestart: number;
}

const enrollmentSchema = new Schema<IEnrollment>({
    customer: {
        type: customerSchema,
        required: true,
    },
    course: {
        type: courseSchema,
        required: true,
    },
    courseFee: {
        type: Number,
        required: true
    },
    datestart: {
        type: Number,
        required: true,
        default: Date.now()
    }
})

export const Enrollment = model<IEnrollment>("Enrollment", enrollmentSchema)