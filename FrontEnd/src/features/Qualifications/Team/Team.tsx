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
<div className="p-4 bg-white text-white mt-10 rounded-lg hover:gray-200">
  <div className="text-3xl font-bold mb-4 text-black greycliffcf-light">Our Team</div>
  {teamMembers.error && <p className="text-red-500">Error getting team</p>}
  {teamMembers.loading && <p>Loading...</p>}
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
    {teamMembers.teamMembers.map((e, i) => (
      <div key={i} className="group p-4 border rounded-lg bg-gray-100 hover:bg-blue-500">
        <p className="text-gray-800 font-semibold greycliffcf-boldoblique group-hover:text-white">Name: {e.teamMember}</p>
        <p className="text-gray-600 greycliffcf-lightoblique group-hover:text-white">Role: {e.teamMemberRole}</p>
        <img src={`data:image/type;base64,${e.teamMemberPhotoUrl}`} alt={e.teamMember} className="w-40 h-40 mt-4 mx-auto" />
        <button className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg cursor-pointer group-hover:bg-gray-100 group-hover:text-gray-500" onClick={() => handleNavigationToMember(e._id)}>More Details</button>    
      </div>
    ))}
  </div>
</div>

    </>
  )
}
