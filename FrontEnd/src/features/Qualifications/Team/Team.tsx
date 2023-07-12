import React from 'react'
import {useAppDispatch,useAppSelector} from "../../../app/hooks"
import { getTeamMembers } from './Team-slice'
import { pathToOneTeamMember } from '../../../Route Paths'
import { useNavigate } from 'react-router-dom'



export default function Team() {
  const teamMembers = useAppSelector(state=>state.teamMembers)
  const dispatch = useAppDispatch() 
  const navigation = useNavigate()
  const handleNavigationToMember= function(id:string){
     navigation(pathToOneTeamMember,{
      state:id
     })
  }

  React.useEffect(()=>{
    dispatch(getTeamMembers())
  },[dispatch])
  return (
    <>
    <div>Our Team</div>
    {teamMembers.error &&
      <p>error getting team</p>}
    {teamMembers.loading && 
      <p>..loading</p>}
    {teamMembers.teamMembers.map((e,i)=>{
      return (  
      <div key ={i}>
        <p>{e.teamMember}</p>
        <p>{e.teamMemberRole}</p>
        <img src={`data:image/type;base64,${e.teamMemberPhotoUrl}`} alt={e.teamMember}/>
        <button value="More Details" onClick={()=>handleNavigationToMember(e._id)}></button>    
      </div>
      )})}
    </>
  )
}
