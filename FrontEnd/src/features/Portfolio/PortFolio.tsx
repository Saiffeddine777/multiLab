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
    <div>PortFolio</div>
    <a onClick={handleReviewsNavigation}>See Reviews</a>
    {clients.error &&
        <p>error getting the clients</p>}
    {clients.loading &&
        <p>..loading</p>}
    {clients.clients.map((e,i)=>{
      return(
        <div key={i}>
            <p>{e.clientName}</p>
            <p>{e.project}</p>
            <img src={`data:image/type;base64,${e.clientsLogoUrl}`}/>
        </div>
        )})}
    </>
  )
}
