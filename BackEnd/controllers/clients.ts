import { fromPathToClientImageString } from "../files/logic/fileSystemImages"
import { pathOfTheFile } from "../files/multer"
import {createClient,deleteAClient,findAllClients, findOneClient, updateOneClient} from "../models/clients"

export const makeAClient = async function(req:any,res:any){
    const { clientName,project,clientsLogoUrl}= req.body
    try{
        const results = await createClient( clientName,project,clientsLogoUrl)
        res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const uploadImage = async function(req:any,res:any){
    try{
       console.log("logo inserted")
       res.status(200).json(pathOfTheFile)
    }
    catch(err){
       console.log(err)
       res.status(500).json(err)
    }
}

export const getClients = async function(req:any,res:any){
    try{
        const results = await findAllClients()
        const transformed:any[]=[]
        await Promise.all(fromPathToClientImageString(results).map(async(e,i)=>{
           const res =await e
           transformed.push(res)
        }))
        res.status(200).json(transformed)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const getOneClient = async function(req:any,res:any){
    const {id} = req.params
    try{
        const results = await findOneClient(id)
        res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const updateAclient = async function(req:any,res:any){
    const {id} = req.params
    const {newData} =req.body
    try{
        const results = await updateOneClient(id,newData)
        res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const removeAclient = async function(req:any ,res:any){
    const {id} =  req.params
    try{
        const results = await deleteAClient(id)
        res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}






