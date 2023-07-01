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
  });
}

export const findAll = function(){
    return Review.find()
}

export const findOne = function(id:string){
    return Review.findById(id)
}

export const destroyOne = function(id:string){
    return Review.findByIdAndRemove(id)
}


