import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getCertificates } from './Certicates-api-slice'
import { stringToPdf } from '../../../helpers/intercept-PDF-File'


export default function Certificates() {
  
  const certificates = useAppSelector(state=>state.certificates)
  const dispatch= useAppDispatch()

  React.useEffect(()=>{
     dispatch(getCertificates())
     console.log(certificates.certificates)
  },[dispatch])
  

  return (
    <>
    <div>Certificates</div>
    {certificates.error
      && <p>error fetching</p>}
    {certificates.loading
      && <p>..loading</p>}
    {certificates.certificates.map((e,i)=>{
      return(
        <>
        <div key={e._id} >
          <p>{e.name}</p>
          <p>{e.description}</p>
          <a href={stringToPdf(e.fileUrl)} download={e.name}>download Certficate</a>
        </div>
        </>
      )
    })}
    </>
  )
}
