import express from "express"
import {makeAClient,getClients, getOneClient, updateAclient, removeAclient, uploadImage} from '../controllers/clients'
import { uploadClients } from "../files/multer"


const clientRouter = express.Router()

clientRouter.post("/create",makeAClient)
clientRouter.post("/logo",uploadClients.single("logo"),uploadImage)
clientRouter.get("/all",getClients)
clientRouter.get("/one/:id",getOneClient)
clientRouter.put("/update/:id",updateAclient)
clientRouter.delete("/delete/:id",removeAclient)


export default clientRouter;