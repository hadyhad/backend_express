import express from "express";
import { updateTeacherByPut ,addTeacher, deleteTeacher, getTeacher, getTeacherById } from "../controllers/teacherController";



const teacherRoute=express.Router()

teacherRoute.post("/teacher", )
teacherRoute.get("/teachers",getTeacher)
teacherRoute.get("/teachers/:id",getTeacherById)
teacherRoute.delete("/teachers/:id", deleteTeacher)
teacherRoute.post("/teachers",addTeacher)
teacherRoute.put("/teachers/:id",updateTeacherByPut)

export default teacherRoute