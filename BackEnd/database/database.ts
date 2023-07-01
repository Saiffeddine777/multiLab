import { Mongoose } from "mongoose"
const mongoose = new Mongoose()

mongoose.connect('mongodb://127.0.0.1:27017/multiLab')
   .then(()=>{
    console.log("connected")
   })
   .catch((err)=>{
    console.log("we have an error connecting to the database",err)
   }) 

export default mongoose;