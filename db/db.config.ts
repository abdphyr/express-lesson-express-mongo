import { connect } from 'mongoose';

export const connectdb = async () => {
    await connect('mongodb://localhost/category')
        .then(() => {
            console.log("Mongo db ga ulandi !!!")
        })
        .catch(err => {
            console.log("Ulanishda xatolik ro'y berdi", err)
        })
}


