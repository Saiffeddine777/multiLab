import multer from "multer"
import crypto from "crypto"
import path, { dirname } from "path"


export const  namingTheFile = function():string{
       const nameOfTheFile= crypto.randomBytes(16).toString("hex")
       return nameOfTheFile
}

export let pathOfTheFile :string 

export const storageServices = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"files/servicesImages/")
    },
    filename:(req,file,cb)=>{
        const fileExt= path.extname(file.originalname)
        const name =namingTheFile()
        pathOfTheFile = path.resolve(__dirname,"servicesImages",name+fileExt)
        console.log("pathOftheFile",pathOfTheFile)
        cb(null,name+fileExt)
    }
})
// can you get the absolute path once you inserted this so I could stor it in the database

export const storageCertficates = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"files/certificates/")
    },
    filename:(req,file,cb)=>{
        const fileExt = path.extname(file.originalname)
        const name = namingTheFile()
        pathOfTheFile= path.resolve(__dirname,"certificates",name+fileExt)
        console.log("pathOftheFile",pathOfTheFile)
        cb(null,name+fileExt)
    }
})

export const storageTeamMembers = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "files/team/")
    },
    filename:(req,file,cb)=>{
        const fileExt = path.extname(file.originalname)
        const name = namingTheFile()
        pathOfTheFile = path.resolve(__dirname,"team",name+fileExt)
        console.log(pathOfTheFile)
        cb(null,name+fileExt)
    }
})

export const uploadServices = multer({storage:storageServices})
export const uploadCertificates = multer({storage:storageCertficates})
export const uploadTeamImages = multer({storage:storageTeamMembers})


