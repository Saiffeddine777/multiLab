import React from 'react'
import { useAppDispatch,useAppSelector } from '../../app/hooks'

export default function Footer() {
    const coordinates = useAppSelector(state=>state.coordinates)
  return (
    <div>
        <div>
        <ul>
            <li>Address: {coordinates.address}</li>
            <li>E-mail: {coordinates.email}</li>
            <li>Phone Number:  {coordinates.phone}</li>
            <li>Fax: {coordinates.fax}</li>
            <li>Contact Quality Departement : {coordinates.qualityContact}</li>
            <li>Contact Commerce Departement : {coordinates.commercialContact}</li>
        </ul>
        </div>
        <br/>
        
        <div className="times">  
           <p>Labour Hours</p>
           <p>Winter hours</p>
         
           <p>Monday to Friday:  8 am - 5 pm</p>
           <p>Saturday from 8am - 1pm</p>
           
           <p>Summer Hours</p>
           
           <p>Monday to Saturday:  8 am - 2:30 pm</p>
        </div>
    </div>
  )
}
