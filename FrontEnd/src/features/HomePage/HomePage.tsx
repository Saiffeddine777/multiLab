import React from 'react'
import icon1 from "../../icons/food-removebg-preview.png"
import icon2 from "../../icons/environment-removebg-preview.png"
import icon3 from "../../icons/animal_food-removebg-preview.png"
import icon4 from "../../icons/training-removebg-preview.png"

import Carousel from './Carousel/Carousel'

export default function HomePage() {

  return (
    <div className ="mt-8 mb-8">
    <div>
     <div>
       <div className="flex flex-col items-center justify-center">
            <div>
            <Carousel></Carousel>
          </div>
       </div>
    </div>

      <div>
        <h2>who we are</h2>
        <img src="" />
        <p>MULTILAB is a private and independent laboratory specializing in agri-food and environmental analyses. It was founded in 2000 to meet the demands of an increasingly discerning consumer and food producers who aim to offer healthy and compliant products that cater to the needs of customers  </p>
      </div> 

      <div>
        <h2>What we do</h2>
        <img src="" />
        <p>At MULTILAB, our mission is to be the vanguard of excellence in the agri-food industry. With our expertise and unwavering commitment, we meticulously ensure the utmost quality and safety of diverse products. Each step we take is guided by the pursuit of exceeding the highest standards, all while delighting and satisfying the discerning tastes of consumersEmbracing innovation and independence, we stand as a stalwart ally to our esteemed clients, offering comprehensive support in delivering exceptional products. From field to table, our dedication is unwavering, ensuring the fulfillment of every culinary dream and the fulfillment of every expectation. At MULTILAB, excellence is not just a goal; it is the very essence of our existence.</p>
      </div>  

      <div>
        <h2>how we do it</h2>
        <img src="" />
        <h3>Cutting-Edge Technology</h3>
        <p>We harness the power of cutting-edge technology and state-of-the-art equipment to conduct precise and thorough analyses of the products we handle. Our advanced laboratory facilities enable us to detect even the most minute details, ensuring nothing escapes our vigilant eye.</p>
        <img src="" />
        <h3>Expert Team of Analysts</h3>
        <p>Our team of expert analysts is the heart and soul of our success. With years of experience and unmatched proficiency, they bring their passion for excellence to every analysis. Rigorous in their work and unyielding in their pursuit of accuracy, they leave no stone unturned in delivering precise and reliable results. </p>
        <img src="" />
        <h3>Unwavering Commitment to Quality</h3>
        <p>Quality is the very foundation of our work. At every step of the process, from sampling to analysis, we adhere to stringent quality control measures. Our commitment to excellence drives us to meet and exceed industry standards, ensuring the safety and satisfaction of both producers and consumers. </p>

      </div>  

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-blue-500 rounded-lg p-2 mt-4 mb-2 group-hover:text-black">
  <div className="text-center group hover:bg-white hover:text-black transition-all duration-300 rounded-lg p-4">
    <img src={icon1} className="h-24 mx-auto mb-4 mb-4 filter brightness-0 group-hover:brightness-100" alt="Food Industry Icon" />
    <h3 className="text-xl font-bold mb-2 greycliffcf-bold group-hover:text-blue-500">Food Industry</h3>
    <p className="text-sm greycliffcf-regular group-hover:text-black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dui auctor, ullamcorper erat a,
      eleifend dui. Duis in libero quis erat varius laoreet in at lorem. Aenean dictum eros a ligula bibendum,
      id vulputate ex venenatis. Nunc posuere, justo eu egestas tempus, sem ex fringilla risus, ac fringilla
      ipsum nisi a turpis.
    </p>
  </div>
  <div className="text-center group hover:bg-white hover:text-black transition-all duration-300 rounded-lg p-4">
    <img src={icon2} className="h-24 mx-auto mb-4 mb-4 filter brightness-0 group-hover:brightness-100" alt="Environment Icon" />
    <h3 className="text-xl font-bold mb-2 greycliffcf-bold group-hover:text-blue-500">Environment</h3>
    <p className="text-sm greycliffcf-regular group-hover:text-black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dui auctor, ullamcorper erat a,
      eleifend dui. Duis in libero quis erat varius laoreet in at lorem. Aenean dictum eros a ligula bibendum,
      id vulputate ex venenatis. Nunc posuere, justo eu egestas tempus, sem ex fringilla risus, ac fringilla
      ipsum nisi a turpis.
    </p>
  </div>
  <div className="text-center group hover:bg-white hover:text-black transition-all duration-300 rounded-lg p-4">
    <img src={icon3} className="h-24 mx-auto mb-4 mb-4 filter brightness-0 group-hover:brightness-100" alt="Animal Nutrition Icon" />
    <h3 className="text-xl font-bold mb-2 greycliffcf-bold group-hover:text-blue-500">Animal Nutrition</h3>
    <p className="text-sm greycliffcf-regular group-hover:text-black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dui auctor, ullamcorper erat a,
      eleifend dui. Duis in libero quis erat varius laoreet in at lorem. Aenean dictum eros a ligula bibendum,
      id vulputate ex venenatis. Nunc posuere, justo eu egestas tempus, sem ex frin gilla risus, ac fringilla
      ipsum nisi a turpis.
    </p>
  </div>
  <div className="text-center group hover:bg-white hover:text-black transition-all duration-300 rounded-lg p-4">
    <img src={icon4} className="h-24 mx-auto mb-4 mb-4 filter brightness-0 group-hover:brightness-100" alt="Audit and Training Icon" />
    <h3 className="text-xl font-bold mb-2 greycliffcf-bold group-hover:text-blue-500">Audit and Training</h3>
    <p className="text-sm greycliffcf-regular group-hover:text-black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dui auctor, ullamcorper erat a,
      eleifend dui. Duis in libero quis erat varius laoreet in at lorem. Aenean dictum eros a ligula bibendum,
      id vulputate ex venenatis. Nunc posuere, justo eu egestas tempus, sem ex fringilla risus, ac fringilla
      ipsum nisi a turpis.
    </p>  
  </div>
</div>


      <div>
        <h2> Key Metrics</h2>
        {/* <div> animations </div> */}
      </div>
      <div className="bg-gray-100 bg-opacity-60 rounded-lg"> {/* Apply bg-opacity-90 to make the background slightly transparent */}
      <div className="px-4 py-8 md:py-16 max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 greycliffcf-heavy">You are always welcome</h2>
        <div className="aspect-w-16 aspect-h-12"> {/* Changed from aspect-h-9 to aspect-h-12 */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1741.1750752165358!2d10.215140010107149!3d36.861859467891925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb373c78826b%3A0x9a3adcc9f78ba614!2sMULTILAB%20SA!5e0!3m2!1sen!2stn!4v1690205917170!5m2!1sen!2stn"
            className="w-full h-full rounded-lg shadow"
            loading="lazy"
            title="Multilab Location"
            style={{ height: '500px' }}
          ></iframe>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
