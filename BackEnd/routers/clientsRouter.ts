import express from "express"
import {makeAClient,getClients, getOneClient, updateAclient, removeAclient} from '../controllers/clients'


const clientRouter = express.Router()

clientRouter.post("/create",makeAClient)
clientRouter.get("/all",getClients)
clientRouter.get("/one/:id",getOneClient)
clientRouter.put("/update/:id",updateAclient)
clientRouter.delete("/delete/:id",removeAclient)


export default clientRouter;