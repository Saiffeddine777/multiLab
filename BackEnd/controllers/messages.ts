import {createAMessage} from "../models/messages"

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
