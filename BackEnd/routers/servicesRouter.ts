import express from "express"
import {changeOneSerrvice, createOneService, getAllServices, getOneService, removeAService} from "../controllers/services"

const servicesRouter = express.Router()
servicesRouter.post("/create",createOneService)
servicesRouter.get("/all",getAllServices)
servicesRouter.get("/one/:id",getOneService)
servicesRouter.put("/update/:id",changeOneSerrvice)
servicesRouter.delete("/delete/:id",removeAService)


export default servicesRouter;



