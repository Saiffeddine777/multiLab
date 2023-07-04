import express from "express"
import cors from "cors"
import servicesRouter from "./routers/servicesRouter"
import messagesRouter from "./routers/messagesRouter"
import reviewsRouter from "./routers/reviewsRouter"
import clientRouter from "./routers/clientsRouter"
import certificateRouter from "./routers/certificatesRouter"
import teamMemberRouter from "./routers/teamMembersRouter"

const port:number = 4000
const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/services",servicesRouter)
app.use("/api/messages",messagesRouter)
app.use("/api/reviews/",reviewsRouter)
app.use("/api/clients",clientRouter)
app.use("/api/certificates",certificateRouter)
app.use("/api/teamMembers",teamMemberRouter)


app.listen(port,()=>{
    console.log(`server connected from ${port}`)
})