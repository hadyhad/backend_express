import mongoose from "mongoose"

const courseShema = new mongoose.Schema(
    {
        title: {
            type:String,
            required: true,
            trim: true
        },
        duree: {
            type: Number,
            required: true,
            trim: true
        }
    }, {timestamps: true}
)

const Course = mongoose.model("Course", courseShema)
export default Course 

