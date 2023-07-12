import e from "express"
import { deleteFile, fromPathToTeamMemberImagString } from "../files/logic/fileSystemImages"
import { pathOfTheFile } from "../files/multer"
import {createTeamMember, deleteOneTeamMember, findAllTeamMember, findOneTeamMember, updateOneTeamMember} from "../models/teamMembers"
import { imageTojpeg } from "../files/logic/sharp"

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
        const convertedPath = await imageTojpeg(pathOfTheFile)
        const deleteOldImage = await deleteFile(pathOfTheFile)
        console.log("team Member Image inserted and converted")
        res.status(200).json(convertedPath)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const getAllTeamMembers = async function(req:any,res:any) {
    try{
      const results = await findAllTeamMember()
      const transFormed:any[]=[]
      await Promise.all(fromPathToTeamMemberImagString(results).map(async (e,i)=>{
        const res = await e
        transFormed.push(res)
      }))
      res.status(200).json(transFormed)
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
        const results:any = await deleteOneTeamMember(id)
        const imageToDelete = await deleteFile(results.teamMemberPhotoUrl)
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

