import { model, Schema, Document, ObjectId } from 'mongoose';

interface ICustomer extends Document<ObjectId> {
    name: string;
    isVip: boolean,
    number: string;
    bonusPoints: number;
}

export const customerSchema = new Schema<ICustomer>({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    isVip: {
        type: Boolean,
        default: false
    },
    number:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    },
    bonusPoints: {
        type: Number,
        required: true
    }
}, { collection: "customer" })

export const Customer = model<ICustomer>("Customer", customerSchema)