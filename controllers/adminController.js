import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

async function addAdmin(req, res){
    try {
        const {name, email, password}=req.body
        const existingadmin = await Admin.findOne({email})
        if (existingadmin){
            return res.status(400).json({message: "cet email existe déja"})
        }
        const hashpassword = await bcrypt.hash(password,10)
        const admin = await Admin.create({
            name, email, password: hashpassword
        })
        return res.status(201).json({
            message: "administrateur ajoute avec succes", admin
        })
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

async function login(req, res){
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "email et password sont "})
            
        }
        const admin = await Admin.findOne({email})
        if(!admin){
            return res.status(401).json({message: "email dosen't exist"})
        }
        const ispasswordcorrect = await bcrypt.compare(password, admin.password)
        if (!password){
            return res.status(401).json({message: "email or password incorrect"})
        }

        const token = jwt.sign(
            {
                id: admin.id,
                role: admin.role
            },
            process.env.JWT_SECRET, 
            {expiresIn:'id'}
        )
        return res.status(200).json({message: "connexion reussie", token, admin})

    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

export {admin, login}







export {addAdmin}







