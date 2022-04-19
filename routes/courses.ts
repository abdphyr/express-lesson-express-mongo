import { Router } from "express";
import { getCourse } from "../controllers/courses/get.course";
import { getCourses } from "../controllers/courses/get.courses";
import { postCourse } from "../controllers/courses/post.course";
import { putCourse } from "../controllers/courses/put.course";
import { deleteCourse } from "../controllers/courses/delete.couse";

export const courseRouter = Router()
courseRouter.get('/', getCourses)
courseRouter.get('/:id', getCourse)
courseRouter.post('/', postCourse)
courseRouter.put('/:id', putCourse)
courseRouter.delete('/:id', deleteCourse)