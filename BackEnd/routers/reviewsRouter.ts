import express from "express"
import {makeAreview,getAll, getOne, deleteOne, sendReviewEmailRequest, getApprovedReviews, approveOne} from "../controllers/reviews"

const reviewsRouter = express.Router()
reviewsRouter.post("/create",makeAreview)
reviewsRouter.get("/all",getAll)
reviewsRouter.get("/one/:id",getOne)
reviewsRouter.delete("/delete/:id",deleteOne)
reviewsRouter.post("/sendreviewFrom",sendReviewEmailRequest)
reviewsRouter.get("/approved",getApprovedReviews)
reviewsRouter.put("/approve/:id",approveOne)

 


export default reviewsRouter;