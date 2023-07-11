import { deleteFile, fromPathToCertFileString } from "../files/logic/fileSystemImages"
import { pathOfTheFile } from "../files/multer"
import {createCertificate, deleteOneCertficate, findAllCertficates, findOneCerticate, updateOneCertificate} from "../models/certificates"

export const makeAcertificate = async function(req:any,res:any){
    const {name,description,reference,fileUrl} = req.body
    try{
       const results = await createCertificate(name,description,reference,fileUrl)
       res.status(200).json(results)
    }
    catch(err){
       console.log(err)
       res.status(500).json(err)
    }
}

export const insertCertficateFile = async function(req:any,res:any){
    try{
        console.log("certificate inserted")
        res.status(200).json(pathOfTheFile)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const getAllCerticates = async function(req:any,res:any){
    try{
      const results = await findAllCertficates()
      const transformed :any []= []
      await Promise.all(fromPathToCertFileString(results).map(async(e,i)=>{
        const res = await e
        transformed.push(res)
      })) 
      res.status(200).json(transformed)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const getOneCertificate= async function(req:any,res:any){
    const {id} = req.params
    try{
        const results =  await findOneCerticate(id)
        res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const updateCerticate = async function(req:any,res:any){
    const {id}= req.params
    const {newData} = req.body
    try{
        const results = await updateOneCertificate(id,newData)
        res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
} 

export const deleteCertficate= async function(req:any,res:any){
    const {id} = req.params
    try{
       const results:any = await deleteOneCertficate(id)
       const certficateToDelete = await deleteFile(results.fileUrl)
       res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}