import { body, validationResult } from "express-validator"



const validateCourse = [
    body("title")
        .trim() // supprimer les espaces
        .notEmpty()
        .withMessage("the title is mandoraty")
        .bail() // stop ici
        .isLength({min:3})
        .withMessage("The title should at least 3 caracters"), // si Erreur
    
    body("duree")
        .trim()
        .notEmpty()
        .withMessage("The duration is mandoraty")
        .bail()
        .isFloat({min:1})
        .withMessage("The duration should be 1h"),
    (req, res, next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json(errors)
        }
        next()
    }

]

export default validateCourse 