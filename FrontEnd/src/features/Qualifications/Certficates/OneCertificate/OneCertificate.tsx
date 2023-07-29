import React from 'react'
import {useAppDispatch,useAppSelector} from "../../../../app/hooks"
import { getOneCertificate } from './OneCertificate-api-slice'
import { useLocation } from 'react-router-dom'
import { stringToPdf } from '../../../../helpers/intercept-PDF-File'

export default function OneCertificate() {
    const location = useLocation()
    const id  = location.state
    const certificate = useAppSelector(state=>state.oneCertificate)
    const dispatch=useAppDispatch()
     
    React.useEffect(()=>{
       dispatch(getOneCertificate(id))
    },[id,dispatch])
  return (
    <>
<div className="p-4 bg-white text-gray-800 mt-10 rounded-lg group hover:bg-blue-500 transition duration-300">
  <div className="text-3xl font-semibold mb-4 greycliffcf-extrabold group-hover:text-white">Certificate</div>

  <a
    href={stringToPdf(certificate.oneCertificate.fileUrl)}
    className="text-blue-500 hover:text-blue-700 block mb-2 greycliffcf-bold group-hover:text-gray-300 "
    target="_blank"
    rel="noopener noreferrer"
  > 
    Download Certificate File
  </a>

  <p className="text-gray-800 mb-2 greycliffcf-bold group-hover:text-white">Certficate Name: <span className='greycliffcf-light'>{certificate.oneCertificate.name}</span></p>
  <p className="text-gray-800 mb-2 greycliffcf-bold group-hover:text-white">Reference: <span className='greycliffcf-light'>{certificate.oneCertificate.reference}</span></p>
  <p className="text-gray-800 mb-4 greycliffcf-bold group-hover:text-white">Desciprtion: <span className='greycliffcf-light'>{certificate.oneCertificate.description}</span></p>

  <div className="aspect-w-16 aspect-h-70 h-screen">
    <iframe
      src={stringToPdf(certificate.oneCertificate.fileUrl)}
      className="w-full h-full"
      title="PDF Viewer"
    />
  </div>
</div>


    </>
  )
}
