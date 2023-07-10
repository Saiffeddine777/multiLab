import mongoose from "./database"
import { Document } from "mongoose"

interface ServiceDocument extends Document{
   title : string,  
   sector : string,
   category :string,
   analysis:string,
   description:string,
   imageUrl:string,
   accredited : boolean
}

const ServiceSchema = new mongoose.Schema<ServiceDocument>({
    title:{type:String,required:true},          // service Name 
    sector:{type :String,required :true},       // food , eviroment or animal food //sector 
    category:{type:String ,required:true},       // domain or realm (traing .., micobiology physicho Chemistry)
    analysis:{type :String },                    // the type of analysis performed (on menerals physiqco chimique...)
    description:{type :String ,required:true},   //brief paragraph of describing the process or the
    imageUrl:{type:String},                      // url of an image
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

interface ReviewsDocument extends Document{
   reviewerName:string,
   email:string,
   text :string,
   rating : number
}

const ReviewSchema = new mongoose.Schema<ReviewsDocument>({
   reviewerName:{type:String,required:true},
   email:{type:String,required: true},
   text:{type:String,required:true},
   rating:{type:Number,required:true}
})

interface ClientDocument extends Document{
   clientName : string,
   project : string,
   projectPhotoUrl :string,
   clientsLogoUrl:string
}

const ClientSchema = new mongoose.Schema<ClientDocument>({
   clientName:{type:String,required:true},
   project:{type:String,required:true},
   projectPhotoUrl:{type:String},
   clientsLogoUrl:{type:String,required:true}
})


interface TeamMemberDocument extends Document{
   teamMember:string,
   teamMemberRole :string,
   teamMemberDescription :string,
   teamMemberEmail :string,
   teamMemberPhotoUrl :string
}

const TeamMemberSchema = new mongoose.Schema<TeamMemberDocument>({
   teamMember:{type :String,required:true},
   teamMemberRole:{type:String,required:true},
   teamMemberDescription:{type:String,required:true},
   teamMemberEmail:{type:String,required :true},
   teamMemberPhotoUrl:{type:String}
})

interface CertificateDocument extends Document {
   name: string,
   description:string,
   reference :string,
   fileUrl :string  
}

const CertificateSchema = new mongoose.Schema<CertificateDocument>({
   name :{type:String,required:true},
   description:{type:String,required : true},
   reference:{type:String,required:true},
   fileUrl:{type:String}
})




export const Service = mongoose.model<ServiceDocument>("Service",ServiceSchema)
export const Message = mongoose.model<MessageDocument>("Message",MessageSchema)
export const Review = mongoose.model<ReviewsDocument>("Review",ReviewSchema)
export const Client = mongoose.model<ClientDocument>("Client",ClientSchema)
export const TeamMember = mongoose.model<TeamMemberDocument>("TeamMember",TeamMemberSchema)
export const Certificate = mongoose.model<CertificateDocument>("Certifcate",CertificateSchema)





