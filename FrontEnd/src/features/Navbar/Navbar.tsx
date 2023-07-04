import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { pathContact, pathHomePage, pathPortfolio, pathQualifications, pathServices } from '../../Route Paths'

export default function Navbar() {
    const navigate = useNavigate()
    
  return (
    <>
    <nav>
        <ul>
     <Link to={pathHomePage} >
        <li>Home</li>
     </Link>
     <Link to={pathContact} >
        <li>Contact</li>
     </Link>
     <Link to={pathServices} >
        <li>services</li>
     </Link>
     <Link to={pathQualifications} >
        <li>Qualifications</li>
     </Link>
     <Link to={pathPortfolio} >
        <li>PortFolio</li>
     </Link>
     <Link to={pathServices} >
        <li>services</li>
     </Link>
        </ul>
    </nav>
    </>
  )
}
