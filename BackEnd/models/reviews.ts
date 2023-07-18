import { Review } from "../database/index";

export const createAreview = function (
  reviewerName: string,
  email: string,
  text: string,
  rating: number
) {
  return Review.create({
    reviewerName: reviewerName,
    email: email,
    text: text,
    rating: rating,
    approved:false
  });
}

export const findAll = function(){
    return Review.find()
}

export const findApprovedReviews = function(){
    return Review.find(
      {approved:true}
    )  
}

export const updateToApproved = function(id:string){
  return Review.updateOne({_id:id},
    {approved:true},
    {new:true})
}

export const findOne = function(id:string){
    return Review.findById(id)
}

export const destroyOne = function(id:string){
    return Review.findByIdAndRemove(id)
}


