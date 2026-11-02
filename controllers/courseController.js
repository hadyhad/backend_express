import Course from "../models/courseModel.js"
async function addCourse(req, res) {
    try {
        const newCourse = await Course.create({
            title: req.body.title,
            duree: req.body.duree
        })
        console.log(newCourse)
        res.status(200).json(newCourse)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}


async function suppCours(req, res) {
    try {
        const suppcours = await Course.findByIdAndDelete(req.params.hawiya)
        if (!suppcours) {
        return res.status(404).json({
            message: "Course not found"
        });
        }
        res.status(200).json({message:"deleted succesfully"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


async function GetStudentbyid(req, res) {
    try {
        // const id = Number(req.params.id)
    const s = await Course.findById(req.params.hh)
    if(!s){
        return res.status(404).json({message:"student not found"})
    }
    res.status(200).json(s)  
    } catch (error) {
        res.status(500).json({message:error.message})
        
    } 
    
}


export {addCourse, suppCours, GetStudentbyid}


