import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getClients } from './Portfolio-slice'

export default function PortFolio() {
  const clients = useAppSelector(state=>state.clients)
  const dispatch = useAppDispatch()
  
  React.useEffect(()=>{
    dispatch(getClients())
  },[dispatch])
  
  return (
    <>
    <div>PortFolio</div>
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
