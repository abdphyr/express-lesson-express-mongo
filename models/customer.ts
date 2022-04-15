import { model, Schema, Document } from 'mongoose';

interface ICustomer extends Document {
    name: string;
    isVip: boolean,
    number: string;
}

const customerSchema = new Schema<ICustomer>({
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
    }
}, { collection: "customer" })

export const Customer = model<ICustomer>("Customer", customerSchema)