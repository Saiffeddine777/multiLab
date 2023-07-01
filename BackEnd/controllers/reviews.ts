import { createAreview , destroyOne, findAll, findOne } from "../models/reviews"

export const makeAreview =  async function(req:any,res:any){
    const {reviewerName, email,text, rating} = req.body
    try{
      const results = await createAreview(reviewerName, email,text, rating)
      console.log(results)
      res.status(200).json(results)
    }
    catch(err){
       console.log(err)
       res.status(500).json(err)
    }
}

export const getAll = async function(req:any,res:any){
    try{
      const results = await findAll()
      console.log(results)
      res.status(200).json(results) 
    }
    catch(err){
       console.log(err)
       res.status(500).json(err)
    }
}

export const getOne = async function(req:any,res:any){
    const {id}= req.params
    try{
      const results = await findOne(id)
      console.log(results)
      res.status(200).json(results) 
    }
    catch(err){
       console.log(err)
       res.status(500).json(err)
    }
} 

export const deleteOne = async function(req:any,res:any){
    const {id} = req.params
    try{
      const results = await destroyOne(id)
      console.log(results)
      res.status(200).json(results) 
    }
    catch(err){
       console.log(err)
       res.status(500).json(err)
    }
} 