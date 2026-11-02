import mongoose from "mongoose";

const teacherShema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true
        }
    }, {timesstamps: true}

)

const Teacher = mongoose.model("Teacher", teacherShema)
export default Teacher 


