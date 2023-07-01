import express from "express"
import cors from "cors"
import servicesRouter from "./routers/servicesRouter"
import messagesRouter from "./routers/messagesRouter"
const port:number = 4000




const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/services",servicesRouter)
app.use("/api/messages",messagesRouter)

app.listen(port,()=>{
    console.log(`server connected from ${port}`)
})