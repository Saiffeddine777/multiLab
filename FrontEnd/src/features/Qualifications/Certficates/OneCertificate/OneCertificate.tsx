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
    <div>OneCertificate</div>
    <p>{certificate.oneCertificate.name}</p>
    <p>{certificate.oneCertificate.reference}</p>
    <p>{certificate.oneCertificate.description}</p>
    <iframe src={stringToPdf(certificate.oneCertificate.fileUrl)} width="100%" height="500px" title="PDF Viewer"/>
    <a href={stringToPdf(certificate.oneCertificate.fileUrl)}>Download Certficate File</a>
    </>
  )
}
