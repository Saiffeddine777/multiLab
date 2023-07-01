import express from "express"
import {createOneService, getAllServices, getOneService} from "../controllers/services"

const servicesRouter = express.Router()
servicesRouter.post("/create",createOneService)
servicesRouter.get("/all",getAllServices)
servicesRouter.get("/one/:id",getOneService)


export default servicesRouter;



