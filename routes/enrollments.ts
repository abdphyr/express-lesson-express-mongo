import { Router } from "express";
import { getEnrollment } from "../controllers/enrollments/get.enrollment";
import { postEnrollment } from "../controllers/enrollments/post.enrollment";
export const enrollmentRouter = Router()
enrollmentRouter.get("/:id", getEnrollment)
enrollmentRouter.post("/", postEnrollment)