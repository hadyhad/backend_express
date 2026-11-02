import { addCourse, suppCours, GetStudentbyid } from "../controllers/courseController.js";
import express from "express";
import validateCourse from "../validator/courseValidator.js";

const courseRoutes = express.Router()
courseRoutes.post("/course", validateCourse, addCourse)
courseRoutes.post("/course", addCourse)
courseRoutes.delete("/supprimer/:hawiya", suppCours)
courseRoutes.get("/courses/:hh", GetStudentbyid)

export default courseRoutes