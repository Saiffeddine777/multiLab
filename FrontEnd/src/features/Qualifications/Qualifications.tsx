import React from 'react'
import { pathCerfications, pathTeam } from '../../Route Paths'
import {useNavigate} from "react-router-dom"


export default function Qualifications() {
  const navigate = useNavigate()

  function navigateToTeam():void{
      navigate(pathTeam)
  }

  function navigateToCertificates():void{
      navigate(pathCerfications)
  }

  return (
    <>
    <div>Qualifications</div>
    <button onClick={navigateToCertificates}>Certificates</button>
    <button onClick={navigateToTeam}>team</button>
    </>
  )
}
