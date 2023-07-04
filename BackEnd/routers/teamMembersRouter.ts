import  express from "express"
import {deleteATeamMember, getAllTeamMembers, getOneTeamMembers, makeATeamMember, updateATeamMember} from "../controllers/teamMembers"


const teamMemberRouter = express.Router()


teamMemberRouter.post("/create",makeATeamMember)
teamMemberRouter.get("/all",getAllTeamMembers)
teamMemberRouter.get("/one/:id",getOneTeamMembers)
teamMemberRouter.put("/update/:id",updateATeamMember)
teamMemberRouter.delete("/delete/:id",deleteATeamMember)


export default teamMemberRouter;