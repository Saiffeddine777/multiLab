import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { fetchTeamMember } from './TeamMember-api-slice'
import { useLocation } from 'react-router-dom'


export default function TeamMember() {
    const location =useLocation()
    const id = location.state 
    console.log("oneTeamMember",id)
    const teamMember = useAppSelector(state=>state.oneTeamMember)
    const dispatch = useAppDispatch()
    React.useEffect(()=>{
         dispatch(fetchTeamMember(id))
    },[id,dispatch])
  return (
    <div>
    <div>TeamMember</div>
    <p>{teamMember.teamMember.teamMember}</p>
    <p>{teamMember.teamMember.teamMemberRole}</p>
    <p>{teamMember.teamMember.teamMemberDescription}</p>
    <p>{teamMember.teamMember.teamMemberEmail}</p>
    <img src={`data:image/type;base64,${teamMember.teamMember.teamMemberPhotoUrl}`}/>

    </div>
  )
}
