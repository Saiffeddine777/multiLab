
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import './Footer.css'; // Import the CSS file for styling

export default function Footer() {
  const coordinates = useAppSelector((state) => state.coordinates);

  return (
<div className="footer-container bg-blue-500 p-6 flex flex-wrap justify-between rounded-lg font-light hover:bg-white hover:text-black transition duration-300 ease-in-out">
  <div className="contact-info w-full sm:w-1/3">
    <ul>
      <li className="mb-2 hover:text-blue-500">Address: {coordinates.address}</li>
      <li className="mb-2 hover:text-blue-500">E-mail: {coordinates.email}</li>
      <li className="mb-2 hover:text-blue-500">Phone Number: {coordinates.phone}</li>
      <li className="mb-2 hover:text-blue-500">Fax: {coordinates.fax}</li>
      <li className="mb-2 hover:text-blue-500">Contact Quality Department: {coordinates.qualityContact}</li>
      <li className="hover:text-blue-500">Contact Commerce Department: {coordinates.commercialContact}</li>
    </ul>
  </div>

  <div className="mt-auto text-center text-sm w-full sm:w-1/3 hover:text-blue-500"> {/* Add mt-auto and text-center */}
    Copyright: @MULTILAB 2023
  </div>

  <div className="labour-hours w-full sm:w-1/3 text-right">
    <h3 className="text-xl greycliffcf-bold mb-4 hover:text-blue-500">Labour Hours</h3>
    <div className="winter-hours mb-4">
      <p className="greycliffcf-bold hover:text-blue-500">Winter Hours</p>
      <p className="hover:text-blue-500">Monday to Friday: 8 am - 5 pm</p>
      <p className="hover:text-blue-500">Saturday from 8 am - 1 pm</p>
    </div>
    <div className="summer-hours">
      <p className="greycliffcf-bold hover:text-blue-500">Summer Hours</p>
      <p className="hover:text-blue-500">Monday to Saturday: 8 am - 2:30 pm</p>
    </div>
  </div>  
</div>



  );
}
