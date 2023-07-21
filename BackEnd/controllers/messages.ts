import {createAMessage, destroyMessage, findAllMessages, findOneMessage , updateToAddressed,deleteAddressedMessages} from "../models/messages"

export const createMessage=  async function(req:any,res:any){
    const {   firstName,
        lastName,
        title,
        message,
        phoneNumber,
        email,
        adress,
        adressed} = req.body
    try{
       const results = await createAMessage(firstName,
        lastName,
        title,
        message,
        phoneNumber,
        email,
        adress,
        adressed)
       console.log(results)
       res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


export const getAllMessages =  async function(req:any,res:any){
    try{
       const results = await findAllMessages()
       console.log(results)
       res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const makeMessageAddressed = async function (req:any,res:any) {
    const {id}  = req.params
    try{
        const results = await updateToAddressed(id)
        res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.stastus(500).json(err)
    }
}

export const getOneMessage = async function(req:any,res:any){
    const {id}= req.params
    try{
       const results = await findOneMessage(id)
       console.log(results)
       res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


export const removeAMessage = async function(req:any,res:any){
    const {id} = req.params
    try{
        const results = await destroyMessage(id)
        console.log(results)
        res.status(200).json(results)
     }
     catch(err){
         console.log(err)
         res.status(500).json(err)
     }
}

export const deleteDealtWithMessages = async function(req:any,res:any){
    try{  
        const results = await deleteAddressedMessages()
        res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


