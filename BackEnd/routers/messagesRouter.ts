import express from "express"
import {createMessage, getAllMessages, getOneMessage, removeAMessage} from "../controllers/messages"

const messagesRouter = express.Router()
messagesRouter.post("/create",createMessage)
messagesRouter.get("/all",getAllMessages)
messagesRouter.get("/one/:id",getOneMessage)
messagesRouter.delete("/delete/:id",removeAMessage)

export default messagesRouter;