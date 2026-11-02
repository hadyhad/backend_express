import express from "express"
import studentRoutes from "./routes/studentRoute.js"
import logger from "./middlewares/logger.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import courseRoutes from "./routes/coursesRoutes.js"
import adminRoute from "./routes/adminRoute.js"
dotenv.config()
const app = express()
app.use(express.static("public"))
app.use(express.json())
app.use(logger)
app.set("view engine", "ejs")

app.use(express.urlencoded({extended:true}))
app.use(studentRoutes)
app.use(courseRoutes)
app.use(adminRoute)
app.use((req,res)=>{
    res.status(404).json({message:"route not found"})
})
const PORT=process.env.NUM_PORT
connectDB().then(()=>{
    app.listen(PORT, ()=>console.log(`server running at ${PORT}`))
})