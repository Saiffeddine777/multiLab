import {Certificate} from "../database"
import { deleteFile } from "../files/logic/fileSystemImages"

export const createCertificate = function(
    name: string,
    description:string,
    reference :string,
    fileUrl :string
){
    return Certificate.create({
        name: name,
        description:description,
        reference :reference,
        fileUrl :fileUrl
    })
}

export const findAllCertficates = function(){
    return Certificate.find()
}

export const findOneCerticate= function(id:string){
    return Certificate.findById(id)
}

export const deleteOneCertficate = function(id:string){
    return Certificate.findByIdAndRemove(id)
}

export const updateOneCertificate = async function(id:string,newData:any){
    if (newData.fileUrl){
        const certificate:any= await Certificate.findById(id)
        const fileToDelete = await deleteFile(certificate.fileUrl)
    }
    return Certificate.findByIdAndUpdate(id,newData,{
            new:true
         })
}

