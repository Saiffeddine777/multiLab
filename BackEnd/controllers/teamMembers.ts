import { pathOfTheFile } from "../files/multer"
import {createTeamMember, deleteOneTeamMember, findAllTeamMember, findOneTeamMember, updateOneTeamMember} from "../models/teamMembers"

export const makeATeamMember = async function(req:any,res:any){
    const {teamMember,teamMemberRole , teamMemberDescription,teamMemberEmail,teamMemberPhotoUrl } = req.body
    try{
      const results = await createTeamMember(teamMember,teamMemberRole,teamMemberDescription,teamMemberEmail,teamMemberPhotoUrl)
      res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const insertTeamImage= async function(req:any,res:any){
    try{
        console.log("team Member Image inserted")
        res.status(200).json(pathOfTheFile)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const getAllTeamMembers = async function(req:any,res:any) {
    try{
      const results = await findAllTeamMember()
      res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const getOneTeamMembers =async function(req:any,res:any) {
    const{id} = req.params
    try{
       const results = await findOneTeamMember(id)
       res.status(200).json(results)
    }
    catch(err){
       console.log(err)
       res.status(500).json(err)
    }
}

export const deleteATeamMember = async function(req:any,res:any){
    const {id} = req.params
    try{
        const results = await deleteOneTeamMember(id)
        res.status(200).json(results)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const updateATeamMember = async function(req:any,res:any){
    const {id} = req.params
    const {newData} = req.body
    try{
      const results = await updateOneTeamMember(id,newData)
      res.status(200).json(results)
    }
    catch(err){
       console.log(err)
       res.status(500).json(err)
    }
}

