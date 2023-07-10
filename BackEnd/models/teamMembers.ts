import {TeamMember} from "../database"

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

export const updateOneTeamMember= function(id:string,newData:any){
    return TeamMember.findByIdAndUpdate(id,newData,{
        new:true
        })
}


