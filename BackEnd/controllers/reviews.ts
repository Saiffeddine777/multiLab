import { sendReviewEmail } from "../mailer/nodeMailerConfig"
import { createAreview , destroyOne, findAll, findOne,findApprovedReviews,updateToApproved } from "../models/reviews"

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

export const sendReviewEmailRequest = async function (req:any,res:any) {
     const {email} = req.body  
     try{
      const mailResponce = await sendReviewEmail(email)
      res.status(200).json(mailResponce)
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

export const getApprovedReviews = async function(req:any,res:any){
     try{
      const results = await findApprovedReviews()
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

export const approveOne =async function(req:any,res:any) {
     const {id} = req.params
     try{
       const result = await updateToApproved(id)
       res.status(200).json(result)
     }
     catch(err){
        console.log(err)
        res.status(500).json(err)
     }
}