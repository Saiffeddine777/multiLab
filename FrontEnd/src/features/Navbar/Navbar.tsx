import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { pathContact, pathHomePage, pathPortfolio, pathQualifications, pathServices } from '../../Route Paths'


export default function Navbar() {
    const navigate = useNavigate()
    
  return (
    <>
     <nav>
      <ul className="flex flex-row gap-4">
        <li className="group cursor-pointer">
          <Link
            className="text-xl greycliffcf-regular text-neutral-800 dark:text-neutral-200 p-2 rounded-lg transition duration-300 ease-in-out group-hover:bg-red-500 group-hover:shadow-lg"
            to={pathHomePage}
          >
            Home
          </Link>
        </li>
        <li className="group cursor-pointer">
          <Link
            className="text-xl greycliffcf-regular text-neutral-800 dark:text-neutral-200 p-2 rounded-lg transition duration-300 ease-in-out group-hover:bg-green-500 group-hover:shadow-lg"
            to={pathContact}
          >
            Contact
          </Link>
        </li>
        <li className="group cursor-pointer">
          <Link
            className="text-xl greycliffcf-regular  text-neutral-800 dark:text-neutral-200 p-2 rounded-lg transition duration-300 ease-in-out group-hover:bg-blue-500 group-hover:shadow-lg"
            to={pathServices}
          >
            Services
          </Link>
        </li>
        <li className="group cursor-pointer">
          <Link
            className="text-xl greycliffcf-regular  text-neutral-800 dark:text-neutral-200 p-2 rounded-lg transition duration-300 ease-in-out group-hover:bg-purple-500 group-hover:shadow-lg"
            to={pathQualifications}
          >
            Qualifications
          </Link>
        </li>
        <li className="group cursor-pointer">
          <Link
            className="text-xl greycliffcf-regular  text-neutral-800 dark:text-neutral-200 p-2 rounded-lg transition duration-300 ease-in-out group-hover:bg-yellow-500 group-hover:shadow-lg"
            to={pathPortfolio}
          >
            Portfolio
          </Link>
        </li>  
      </ul>
    </nav>
    </>
  )
}
