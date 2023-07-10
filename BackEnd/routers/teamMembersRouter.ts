import  express from "express"
import {deleteATeamMember, getAllTeamMembers, getOneTeamMembers, insertTeamImage, makeATeamMember, updateATeamMember} from "../controllers/teamMembers"
import { uploadTeamImages } from "../files/multer"



const teamMemberRouter = express.Router()


teamMemberRouter.post("/create",makeATeamMember)
teamMemberRouter.post("/image",uploadTeamImages.single("teamImage"),insertTeamImage)
teamMemberRouter.get("/all",getAllTeamMembers)
teamMemberRouter.get("/one/:id",getOneTeamMembers)
teamMemberRouter.put("/update/:id",updateATeamMember)
teamMemberRouter.delete("/delete/:id",deleteATeamMember)


export default teamMemberRouter;