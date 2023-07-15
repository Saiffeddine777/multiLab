import React from 'react'
import Certificates from './Certficates/Certificates'
import Team from './Team/Team'
import { useNavigate } from 'react-router-dom'
import { pathToReviews } from '../../Route Paths'

export default function Qualifications() {
  const navigate = useNavigate()

  function handleReviewsNavigation(){
     navigate(pathToReviews)
  }
  return (
    <>
    <div>Qualifications</div>
    <a onClick={handleReviewsNavigation}>See Reviews</a>
    <Certificates/>
    <Team/>
    </>
  )
}
