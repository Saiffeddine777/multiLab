import { log } from "console"
import { pathOfTheFile } from "../files/multer"
import{createService, destoryAService, findAllServices, findOneService, updateOneService} from "../models/services"
import { deleteFile, fromPathToServiceImageString } from "../files/logic/fileSystemImages"
import { imageTojpeg } from "../files/logic/sharp"

export const createOneService=  async function(req:any,res:any){
    const {title,sector,category,analysis,description,imageUrl,accredited} = req.body
    try{
       const results = await createService(title,sector,category,analysis,description,imageUrl,accredited)
       console.log(results)
       res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const createServiceImage = async function(req:any,res:any){
    console.log(req)
   try{ 
    const convertedPath = await imageTojpeg(pathOfTheFile)
    const imageToDelete = await deleteFile(pathOfTheFile)
    res.status(200).json(convertedPath)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const getAllServices = async function (req:any,res:any) {
    
    try{
      const results = await findAllServices()
      let transformed : any[]=[]
        await Promise.all(fromPathToServiceImageString(results).map(async(e,i)=>{
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

export const getOneService = async function (req:any,res:any) {
    const {id} = req.params
    try{
      const results = await findOneService(id)
      console.log(results)
      res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err) 
    }
}

export const changeOneSerrvice = async function(req:any,res:any){
    const {id}= req.params
    const {newData} = req.body
    try{
       const results = await updateOneService(id,newData)
       console.log(results)
       res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const removeAService = async function(req:any,res:any){
    const {id}= req.params
    try{
       const results:any = await destoryAService(id)
       console.log(results)
       const imageDelete = await deleteFile(results.imageUrl)
       res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}
