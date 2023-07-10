import express from "express"
import {changeOneSerrvice, createOneService, createServiceImage, getAllServices, getOneService, removeAService} from "../controllers/services"
import { uploadServices } from "../files/multer"

const servicesRouter = express.Router()
servicesRouter.post("/create",createOneService)
servicesRouter.post("/image",uploadServices.single("image"),createServiceImage)
servicesRouter.get("/all",getAllServices)
servicesRouter.get("/one/:id",getOneService)
servicesRouter.put("/update/:id",changeOneSerrvice)
servicesRouter.delete("/delete/:id",removeAService)


export default servicesRouter;



