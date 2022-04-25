import { startSession } from 'mongoose';
import { RequestHandler } from "express";
import { Enrollment } from "../../models/model.enrollment";
import { Customer } from "../../models/model.customer";
import { Course } from "../../models/model.course";
import { enrollmentValidator } from "./validate.enrollment";
import { IReqEnrollment } from "../../models/model.enrollment";

export const postEnrollment: RequestHandler = async (req, res) => {
    const reqBody = req.body as IReqEnrollment
    const { error } = enrollmentValidator(reqBody)
    if (error){
        res.status(400).send(error.details[0].message)
    }
    const course = await Course.findById(reqBody.courseId)
    if (!course){
        res.status(404).send(`${reqBody.courseId} id ega kurs topilmadi`)
        return;
    }
    const customer = await Customer.findById(reqBody.customerId)
    if (!customer){
        res.status(404).send(`${reqBody.customerId} id ega customer topilmadi`)
        return;
    }
    const enrollment = new Enrollment({
        customer: {
            _id: customer._id,
            name: customer.name
        },
        course: {
            _id: course._id,
            title: course.title
        },
        courseFee: customer.isVip ? course.fee * 0.8 : course.fee
    })
    const saveEnrollment = await enrollment.save()
    customer.bonusPoints++
    customer.save()
    res.status(201).send(saveEnrollment)
}