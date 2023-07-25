import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../images/download-removebg-preview.png"

import {
  pathContact,
  pathHomePage,
  pathPortfolio,
  pathQualifications,
  pathServices,
} from "../../Route Paths";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
<nav className="flex items-center justify-between bg-white text-black rounded-lg p-4 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
  <div className="flex items-center bg-white p-2 rounded-lg">
    <img src={logo} className="w-48 h-auto" alt="Logo" />
  </div>

  <div className="flex justify-center flex-grow flex-shrink">
    <ul className="flex flex-row gap-4 list-none">
      <li className="group cursor-pointer">
        <Link
          className="text-xl greycliffcf-demibold text-black p-2 rounded-lg transition duration-300 ease-in-out hover:text-white transform hover:scale-105"
          to={pathHomePage}
        >
          Home
        </Link>
      </li>
      
      <li className="group cursor-pointer">
        <Link
          className="text-xl greycliffcf-demibold text-black p-2 rounded-lg transition duration-300 ease-in-out hover:text-white transform hover:scale-105"
          to={pathServices}
        >
          Services
        </Link>
      </li>
      <li className="group cursor-pointer">
        <Link
          className="text-xl greycliffcf-demibold text-black p-2 rounded-lg transition duration-300 ease-in-out hover:text-white transform hover:scale-105"
          to={pathQualifications}
        >
          Qualifications
        </Link>
      </li>
      <li className="group cursor-pointer"> 
        <Link
          className="text-xl greycliffcf-demibold text-black p-2 rounded-lg transition duration-300 ease-in-out hover:text-white transform hover:scale-105"
          to={pathPortfolio}
        >
          Portfolio
        </Link>
      </li>  
    </ul>
  </div>

  <div> {/* Add a new div for "Contact" */}
    <ul className="flex flex-row gap-4 list-none">
      <li className="group cursor-pointer">
        <Link
          className="text-xl greycliffcf-demibold text-black p-2 rounded-lg transition duration-300 ease-in-out hover:text-white transform hover:scale-105"
          to={pathContact}
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
</nav>

    </>
  );  
}
