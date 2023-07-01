import React,{useEffect} from 'react'
import {useAppDispatch,useAppSelector} from '../../app/hooks'
import { getServices } from './Services-api-slice'

export default function Services() {
    const services = useAppSelector(state=>state.services)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getServices())
    },[dispatch])
  return (
    <>
    <div>Services</div>
    {services.error && <p>{services.error}</p>}
    {services.loading && <p>..loading</p>}
    <ul>
    {services.services && services.services.map((e,i)=>{
        return <li>{e.title}</li>
    })}
    </ul>
    </>
  )
}
