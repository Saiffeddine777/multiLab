import React,{useEffect} from 'react'
import {useAppDispatch,useAppSelector} from '../../app/hooks'
import { getServices } from './Services-api-slice'

export default function Services() {
    const services = useAppSelector(state=>state.services)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getServices())
    },[dispatch])
  return (
    <>
 <div className="p-4 bg-white rounded-lg mt-10">
  <div className="text-3xl font-semibold mb-4 greycliffcf-extrabold text-black">Services</div>
  {services.error && <p className="text-red-500">{services.error}</p>}
  {services.loading && <p>..loading</p>}
  {services.services &&
    services.services.map((service, index) => (
      <div key={index} className="mb-6 border rounded-lg p-4 grid grid-cols-2 gap-4 group hover:bg-blue-200 transition duration-400">
        <div className="col-span-2 md:col-span-1">
          {service.accredited ? (
            <p className="text-green-500 font-semibold greycliffcf-bold">Accredited</p>
          ) : (
            <p className="text-red-300 greycliffcf-extralight">Not Accredited</p>
          )}
          <h2 className="text-xl text-blue-500 greycliffcf-bold"><span className="greycliffcf-extralight"></span>{service.title}</h2>
          <p className="text-black greycliffcf-bold">Category: <span className="greycliffcf-extralight">{service.category}</span></p>
          <p className="text-black greycliffcf-bold">Analysis type: <span className="greycliffcf-extralight">{service.analysis}</span></p>
          <p className="text-black greycliffcf-bold">Sector: <span className="greycliffcf-extralight">{service.sector}</span> </p>
          <p className="text-black greycliffcf-bold">Description:<span className="greycliffcf-extralight">{service.description}</span> </p>
        </div>
        {service.imageUrl && (
          <div className="flex justify-end md:justify-end">
            <img src={`data:image/type;base64,${service.imageUrl}`} alt="Service Image" className="w-32 h-auto rounded-lg" />
          </div>
        )}
      </div>
    ))}
</div>
    </>
  )
}
