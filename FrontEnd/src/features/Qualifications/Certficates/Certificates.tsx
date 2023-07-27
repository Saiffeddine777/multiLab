import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getCertificates } from './Certicates-api-slice'
import { stringToPdf } from '../../../helpers/intercept-PDF-File'
import { useNavigate } from 'react-router-dom'
import { pathToOneCertificate } from '../../../Route Paths'


export default function Certificates() {
  const navigate = useNavigate()

  const handleNavigationToOneCertificate= function(id:string){
    navigate(pathToOneCertificate,{
      state:id
    })
  }
  
  const certificates = useAppSelector(state=>state.certificates)
  const dispatch= useAppDispatch()

  React.useEffect(()=>{
     dispatch(getCertificates())
     console.log(certificates.certificates)
  },[dispatch])
  

  return (
    <>
<div className="p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-10 rounded-lg shadow-lg">
  <div className="text-3xl font-bold mb-4 greycliffcf-extrabold">Certificates</div>

  {certificates.error && <p className="text-red-500">Error fetching certificates</p>}
  {certificates.loading && <p>Loading...</p>}

  {certificates.certificates.map((e, i) => (
    <div
      key={e._id}
      className="my-4 border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-all duration-300"
    >
      <p className="text-gray-800 font-semibold mb-2">{e.name}</p>
      <div className="aspect-w-16 aspect-h-9">
        <iframe src={stringToPdf(e.fileUrl)} className="w-full h-full" title="PDF Viewer" />
      </div>
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 greycliffcf-lightoblique"
        onClick={() => handleNavigationToOneCertificate(e._id)}
      >
        See more details
      </button>
    </div>
  ))}
</div>


    </>
    
  )
}
