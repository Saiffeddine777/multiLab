import {TeamMember} from "../database"
import { deleteFile } from "../files/logic/fileSystemImages"

export const createTeamMember = function(
    teamMember:string,
    teamMemberRole:string,
    teamMemberDescription :string,
    teamMemberEmail :string,
    teamMemberPhotoUrl :string
  ){
    return TeamMember.create({
        teamMember:teamMember,
        teamMemberRole:teamMemberRole,
        teamMemberDescription :teamMemberDescription,
        teamMemberEmail :teamMemberEmail,
        teamMemberPhotoUrl :teamMemberPhotoUrl
    })
}

export const findAllTeamMember = function(){
    return TeamMember.find()
}

export const findOneTeamMember = function(id:string){
    return TeamMember.findById(id)
}

export const deleteOneTeamMember = function(id:string){
    return TeamMember.findByIdAndRemove(id)
}

export const updateOneTeamMember= async function(id:string,newData:any){
    if(newData.teamMemberPhotoUrl){
        const member:any= await TeamMember.findById(id)
        const deleteMemberPhoto = await deleteFile(member.teamMemberPhotoUrl)
    }
    return TeamMember.findByIdAndUpdate(id,newData,{
        new:true
        })
}


