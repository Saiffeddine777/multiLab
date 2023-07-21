// Footer.js
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import './Footer.css'; // Import the CSS file for styling

export default function Footer() {
  const coordinates = useAppSelector((state) => state.coordinates);

  return (
    <div className="footer-container greycliffcf-thin">
      <div className="contact-info">
        <ul>
          <li>Address: {coordinates.address}</li>
          <li>E-mail: {coordinates.email}</li>
          <li>Phone Number: {coordinates.phone}</li>
          <li>Fax: {coordinates.fax}</li>
          <li>Contact Quality Department: {coordinates.qualityContact}</li>
          <li>Contact Commerce Department: {coordinates.commercialContact}</li>
        </ul>
      </div>
      <div className="labour-hours">
        <h3>Labour Hours</h3>
        <div className="winter-hours">
          <p>Winter Hours</p>
          <p>Monday to Friday: 8 am - 5 pm</p>
          <p>Saturday from 8 am - 1 pm</p>
        </div>
        <div className="summer-hours">
          <p>Summer Hours</p>
          <p>Monday to Saturday: 8 am - 2:30 pm</p>
        </div>
      </div>
    </div>
  );
}
