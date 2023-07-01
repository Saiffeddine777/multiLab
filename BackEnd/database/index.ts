import mongoose from "./database"
import {Document } from "mongoose"

interface ServiceDocument extends Document{
   title : string,  
   sector : string,
   category :string,
   analysis:string,
   description:string
   accredited : boolean
}

const ServiceSchema = new mongoose.Schema<ServiceDocument>({
    title:{type:String,required:true},          // service Name 
    sector:{type :String,required :true},       // food , eviroment or animal food
    category:{type:String ,required:true},       // domain or realm (traing .., micobiology physicho Chemistry)
    analysis:{type :String },                    // the type of analysis performed (on menerals physiqco chimique...)
    description:{type :String ,required:true},   //brief paragraph of describing the process or the 
    accredited:{type: Boolean,required :true}    //certified or not
})

interface MessageDocument extends Document{
   firstName :string,
   lastName :string,
   title: string,
   message : string,
   phoneNumber :string,
   email: string,
   adress: string,
   adressed:boolean
}
const MessageSchema = new mongoose.Schema<MessageDocument>({
   firstName :{type : String,required :true},
   lastName :{type :String,required:true},
   title: {type:String , required :true },
   message :{type :String ,required :true},
   phoneNumber :{type :String ,required : true},
   email: {type : String, required : true},
   adress: {type :String},
   adressed:{type :Boolean , required:true}
})


export const Service = mongoose.model<ServiceDocument>("Service",ServiceSchema)
export const Message = mongoose.model<MessageDocument>("Message",MessageSchema)





