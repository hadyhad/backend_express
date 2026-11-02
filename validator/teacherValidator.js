import { body, validationResult } from "express-validator";

const validateTeacher = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("le 'Nom' est vide")
        .bail()
        .isLength({min: 5})
        .withMessage("the name should at least 5 caracters"),
    body("course")
        .trim()
        .notEmpty()
        .withMessage("le 'cours' est vide")
        .isLength({min:3})
        .withMessage("the course should at least 3 caracters"),
    (req, res, next)=>{
        
        try{
            const errors = validationResult(req)
            if (!errors){
                return res.status(400).json(errors)
            }
            res.status(200).json(teacher)
        }  catch(error){
            res.status(500).json({message: error.message})
            }
        }

]









