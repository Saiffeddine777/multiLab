import {createClient,deleteAClient,findAllClients, findOneClient, updateOneClient} from "../models/clients"

export const makeAClient = async function(req:any,res:any){
    const { clientName,project,projectPhotoUrl,clientsLogoUrl}= req.body
    try{
        const results = await createClient( clientName,project,projectPhotoUrl,clientsLogoUrl)
        res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const getClients = async function(req:any,res:any){
    try{
        const results = await findAllClients()
        res.status(200).json(results)
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






