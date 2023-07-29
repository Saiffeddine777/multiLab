import React, { useEffect } from "react";
import { pathCerfications, pathTeam } from "../../Route Paths";
import { useNavigate } from "react-router-dom";
import teamImage from "../../assets/doctor-performing-medical-research-lab (1) (1).jpg"
import certify from "../../assets/lucas-vasques-9vnACvX2748-unsplash (1).jpg"
import { useAppDispatch,useAppSelector } from "../../app/hooks";
import { notVisibleReducer ,visibleReducer } from "./Image-slice";
import  {notVisible1Reducer ,visible1Reducer} from "./image1-slice"


export default function Qualifications() {
  const visible = useAppSelector(state=>state.visible.value)
  const visible1 = useAppSelector(state=>state.visible1.value)
  const dispatch = useAppDispatch()

  const navigate = useNavigate();

  function navigateToTeam(): void {
    navigate(pathTeam);
  }

  function navigateToCertificates(): void {
    navigate(pathCerfications);
  }

  useEffect(()=>{
    console.log(visible1)
  },[visible1])


  return (
    <>
  <div className="rounded-lg bg-white mt-10">
  <div className="text-3xl font-semibold mb-4 greycliffcf-extrabold text-black flex justify-center mt-5">Qualifications</div>
  <div className="p-4 text-black mt-10 rounded-lg flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="sm:w-1/2 rounded-lg bg-white px-4 py-6 group hover:bg-blue-500 transition duration-300"
      onMouseEnter={()=>{dispatch(visibleReducer())}}
      onMouseLeave={()=>{dispatch(notVisibleReducer())}}
     
  >
  <div className="flex flex-col items-center">
    <h2 className="text-xl font-semibold mb-2 group-hover:text-white">Certifications</h2>
    <p className="text-gray-800 mb-4 group-hover:text-white">
      Multilab takes pride in its diverse range of certifications, which are recognized globally. From quality management
      to environmental compliance, our certification programs adhere to international standards, offering businesses
      and professionals a competitive edge in the market. With a team of skilled experts conducting thorough assessments,
      Multilab ensures accuracy and credibility in the certification process, empowering organizations to thrive in
      their respective industries. Our certifications represent a commitment to excellence and continuous improvement,
      fostering trust and recognition in the market.
    </p>
  </div>
  <div className="flex justify-center mt-4">
    {visible &&<img src={certify} className="rounded-lg" />}
  </div>
  <div className="flex justify-center mt-4">
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg group-hover:bg-white group-hover:text-black cursor-pointer 
      transition-all duration-300 greycliffcf-lightoblique"
      onClick={navigateToCertificates}
    >
      See Our Certificates
    </button>
  </div>
</div>

    <div className="sm:w-1/2 mt-6 rounded-lg bg-white px-4 py-6 group hover:bg-blue-500 transition duration-300"
    onMouseEnter={()=>{dispatch(visible1Reducer())}}
    onMouseLeave={()=>{dispatch(notVisible1Reducer())}}
    >
      <h2 className="text-xl font-semibold mb-2 group-hover:text-white">Our Team</h2>
      <p className="text-gray-800 mb-4 group-hover:text-white">
        Multilab boasts a dynamic and talented team that forms the backbone of our success. Comprising experts from various
        fields, our team is dedicated to delivering top-notch solutions and services to our clients. With a passion for
        innovation and a commitment to excellence, our professionals work collaboratively to tackle complex challenges
        and provide tailored solutions. Their collective knowledge and experience enable us to maintain high standards in
        all aspects of our work, ensuring customer satisfaction and loyalty. Multilab values diversity, inclusivity, and
        personal growth, fostering a positive work culture where each team member is encouraged to thrive and contribute
        their unique skills. Together, we are driven by a shared vision to make a positive impact on the industries we
        serve.
      </p>
      {visible1 && <img src={teamImage} className="rounded-lg"/>}
      <div className="flex justify-center mt-3">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer group-hover:bg-white group-hover:text-black hover:bg-blue-600 transition-all duration-300 greycliffcf-lightoblique"
          onClick={navigateToTeam}
        >
          See Our Team Members
        </button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
