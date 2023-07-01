import express from "express"
import {createMessage} from "../controllers/messages"

const messagesRouter = express.Router()
messagesRouter.post("/create",createMessage)

export default messagesRouter;