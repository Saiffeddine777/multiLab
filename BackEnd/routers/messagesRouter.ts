import express from "express"
import {createMessage, deleteDealtWithMessages, getAllMessages, getOneMessage, makeMessageAddressed, removeAMessage} from "../controllers/messages"

const messagesRouter = express.Router()
messagesRouter.post("/create",createMessage)
messagesRouter.get("/all",getAllMessages)
messagesRouter.get("/one/:id",getOneMessage)
messagesRouter.delete("/delete/:id",removeAMessage)
messagesRouter.put("/messageaddressed/:id",makeMessageAddressed)
messagesRouter.delete("/deleteAdressed",deleteDealtWithMessages)

export default messagesRouter;