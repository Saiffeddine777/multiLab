import{createService, destoryAService, findAllServices, findOneService, updateOneService} from "../models/services"

export const createOneService=  async function(req:any,res:any){
    const {title,sector,category,analysis,description,accredited} = req.body
    try{
       const results = await createService(title,sector,category,analysis,description,accredited)
       console.log(results)
       res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const getAllServices = async function (req:any,res:any) {
    try{
      const results = await findAllServices()
      console.log(results)
      res.status(200).json(results)
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
       const results = await destoryAService(id)
       console.log(results)
       res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}
