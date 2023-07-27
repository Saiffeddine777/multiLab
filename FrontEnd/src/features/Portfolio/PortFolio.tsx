import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getClients } from './Portfolio-slice'
import  {useNavigate} from "react-router-dom"
import { pathToReviews } from '../../Route Paths'

export default function PortFolio() {
  const clients = useAppSelector(state=>state.clients)
  const dispatch = useAppDispatch()
  
  React.useEffect(()=>{
    dispatch(getClients())
  },[dispatch])

  const navigate = useNavigate()

  function handleReviewsNavigation(){
     navigate(pathToReviews)
  }
  
  return (
    <>
<div className="p-4 rounded-lg bg-white mt-8">
  <div className="text-3xl font-bold mb-4 text-black">Our Clients</div>
  <a onClick={handleReviewsNavigation} className="text-blue-500 cursor-pointer hover:text-blue-700">See Reviews</a>

  {clients.error && <p className="text-red-500">Error getting the clients</p>}
  {clients.loading && <p>Loading...</p>}

  <div className="grid grid-cols-4 gap-4 mt-4">
    {clients.clients.map((e:any, i:number) => (
      <div key={i} className="group border rounded-lg p-4 bg-gray-100 hover:bg-blue-500">
        <p className="text-gray-800 font-semibold greycliffcf-boldoblique group-hover:text-white">Client: {e.clientName}</p>
        <p className="text-gray-600 greycliffcf-lightoblique group-hover:text-white">Project: {e.project}</p>
        <img src={`data:image/type;base64,${e.clientsLogoUrl}`} alt="Client Logo" className="w-40 h-40 mt-4 mx-auto" />
      </div>
    ))}
  </div>
</div>

    </>
  )
}
