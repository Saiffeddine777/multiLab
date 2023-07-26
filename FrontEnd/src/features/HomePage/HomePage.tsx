import React,{useEffect} from "react";
import icon1 from "../../icons/food-removebg-preview.png";
import icon2 from "../../icons/environment-removebg-preview.png";
import icon3 from "../../icons/animal_food-removebg-preview.png";
import icon4 from "../../icons/training-removebg-preview.png";
import buildingImage from "../../images/low-rise-building (1) (1).jpg";
import tubes from "../../images/medical-test-tubes-with-blood-desk-laboratory (1).jpg";
import quality from "../../images/laboratory-supplies-medical-work (1).jpg";
import experts from "../../images/medium-shot-scientists-posing-together (1).jpg";
import tech from "../../images/virolog-coducting-experiment-course-coronavirus-pandemic-with-micropipette-chemist-modern-laboratory-doing-research-using-dispenser-during-global-epidemic-with-covid-19 (1) (1).jpg";
import Lottie from  "lottie-react"
import pieChart from "../../assets/6Mm68mW7cL.json"
import Carousel from "./Carousel/Carousel";
import manSplaning from "../../assets/1.json"
import chart from "../../assets/chart.json"

export default function HomePage() {
  const handleScroll = () => {
    const elements = document.querySelectorAll(".smooth-scroll");
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const isVisible = elementTop < window.innerHeight && elementBottom >= 0;
      element.classList.toggle("visible", isVisible);
    });
  };

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }
  },[])

  return (
    <div className="mt-8 mb-8" id="homepage-content">
      <div>
        <div>
          <div className="flex flex-col items-center justify-center smooth-scroll">
            <div>
              <Carousel></Carousel>
            </div>
          </div>
        </div>

        <div className="group bg-gray-100 p-8 mt-4 mt-8 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white smooth-scroll">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 greycliffcf-bold group-hover:text-white">
              who we are
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={buildingImage}
                alt="MULTILAB Image"
              />
              <div className="text-gray-800">
                <p className="text-lg md:text-xl mb-4 greycliffcf-regular group-hover:text-white">
                  MULTILAB is a private and independent laboratory specializing
                  in agri-food and environmental analyses. It was founded in
                  2000 to meet the demands of an increasingly discerning
                  consumer and food producers who aim to offer healthy and
                  compliant products that cater to the needs of customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="group bg-gray-100 p-8 mt-4 mt-8 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white smooth-scroll">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="text-gray-800 order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 greycliffcf-bold group-hover:text-white text-right">
                  What we do
                </h2>
                <img
                  className="w-full h-full object-cover rounded-lg order-2 md:order-1"
                  src={tubes}
                  alt="MULTILAB Image"
                />
              </div>
              <p className="text-lg md:text-xl mb-4 greycliffcf-regular text-gray-800 group-hover:text-white">
                At MULTILAB, our mission is to be the vanguard of excellence in
                the agri-food industry. With our expertise and unwavering
                commitment, we meticulously ensure the utmost quality and safety
                of diverse products. Each step we take is guided by the pursuit
                of exceeding the highest standards, all while delighting and
                satisfying the discerning tastes of consumers. Embracing
                innovation and independence, we stand as a stalwart ally to our
                esteemed clients, offering comprehensive support in delivering
                exceptional products. From field to table, our dedication is
                unwavering, ensuring the fulfillment of every culinary dream and
                the fulfillment of every expectation. At MULTILAB, excellence is
                not just a goal; it is the very essence of our existence.
              </p>
            </div>
          </div>
        </div>

        <div className="group bg-gray-100 p-8 mt-4 mt-8 rounded-lg hover:bg-blue-500 transition-colors duration-300 smooth-scroll">
  <div className="max-w-screen-xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 greycliffcf-bold text-center group-hover:text-white">
      how we do it
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="text-center">
        <img
          src={tech}
          alt="Cutting-Edge Technology"
          className="w-full h-full object-cover rounded-lg mb-4 max-h-[300px]"
        />
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 greycliffcf-bold mb-2 group-hover:text-white">
          Cutting-Edge Technology
        </h3>
        <p className="text-lg md:text-xl text-gray-800 greycliffcf-regular mb-4 group-hover:text-white">
          We harness the power of cutting-edge technology and
          state-of-the-art equipment to conduct precise and thorough
          analyses of the products we handle. Our advanced laboratory
          facilities enable us to detect even the most minute details,
          ensuring nothing escapes our vigilant eye.
        </p>
      </div>

      <div className="text-center">
        <img
          src={experts}
          alt="Expert Team of Analysts"
          className="w-full h-full object-cover rounded-lg mb-4 max-h-[300px]"
        />
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 greycliffcf-bold mb-2 group-hover:text-white">
          Expert Team of Analysts
        </h3>
        <p className="text-lg md:text-xl text-gray-800 greycliffcf-regular mb-4 group-hover:text-white">
          Our team of expert analysts is the heart and soul of our
          success. With years of experience and unmatched proficiency,
          they bring their passion for excellence to every analysis.
          Rigorous in their work and unyielding in their pursuit of
          accuracy, they leave no stone unturned in delivering precise
          and reliable results.
        </p>
      </div>
    </div>

    <div className="text-center mx-auto max-w-[600px]">
      <img
        src={quality}
        alt="Unwavering Commitment to Quality"
        className="w-full h-full object-cover rounded-lg mb-4 max-h-[300px]"
      />
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 greycliffcf-bold mb-2 group-hover:text-white">
        Unwavering Commitment to Quality
      </h3>
      <p className="text-lg md:text-xl text-gray-800 greycliffcf-regular mb-4 group-hover:text-white">
        Quality is the very foundation of our work. At every step of
        the process, from sampling to analysis, we adhere to
        stringent quality control measures. Our commitment to
        excellence drives us to meet and exceed industry standards,
        ensuring the safety and satisfaction of both producers and
        consumers.
      </p>
    </div>
  </div>
</div>



        <div className="text-black grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-lg p-2 mt-4 mb-2 group-hover:text-black smooth-scroll">
          <div className="text-center group hover:bg-blue-500 hover:text-black transition-all duration-300 rounded-lg p-4">
            <img
              src={icon1}
              className="h-24 mx-auto mb-4 mb-4 filter brightness-100 group-hover:brightness-0"
              alt="Food Industry Icon"
            />
            <h3 className="text-xl font-bold mb-2 greycliffcf-bold group-hover:text-white">
              Food Industry
            </h3>
            <p className="text-sm greycliffcf-regular group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              dui auctor, ullamcorper erat a, eleifend dui. Duis in libero quis
              erat varius laoreet in at lorem. Aenean dictum eros a ligula
              bibendum, id vulputate ex venenatis. Nunc posuere, justo eu
              egestas tempus, sem ex fringilla risus, ac fringilla ipsum nisi a
              turpis.
            </p>
          </div>
          <div className="text-center group hover:bg-blue-500 hover:text-black transition-all duration-300 rounded-lg p-4">
            <img
              src={icon2}
              className="h-24 mx-auto mb-4 mb-4 filter brightness-100 group-hover:brightness-0"
              alt="Environment Icon"
            />
            <h3 className="text-xl font-bold mb-2 greycliffcf-bold group-hover:text-white">
              Environment
            </h3>
            <p className="text-sm greycliffcf-regular group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              dui auctor, ullamcorper erat a, eleifend dui. Duis in libero quis
              erat varius laoreet in at lorem. Aenean dictum eros a ligula
              bibendum, id vulputate ex venenatis. Nunc posuere, justo eu
              egestas tempus, sem ex fringilla risus, ac fringilla ipsum nisi a
              turpis.
            </p>
          </div>
          <div className="text-center group hover:bg-blue-500 hover:text-black transition-all duration-300 rounded-lg p-4">
            <img
              src={icon3}
              className="h-24 mx-auto mb-4 mb-4 filter brightness-100 group-hover:brightness-0"
              alt="Animal Nutrition Icon"
            />
            <h3 className="text-xl font-bold mb-2 greycliffcf-bold group-hover:text-white">
              Animal Nutrition
            </h3>
            <p className="text-sm greycliffcf-regular group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              dui auctor, ullamcorper erat a, eleifend dui. Duis in libero quis
              erat varius laoreet in at lorem. Aenean dictum eros a ligula
              bibendum, id vulputate ex venenatis. Nunc posuere, justo eu
              egestas tempus, sem ex frin gilla risus, ac fringilla ipsum nisi a
              turpis.
            </p>
          </div>
          <div className="text-center group hover:bg-blue-500 hover:text-black transition-all duration-300 rounded-lg p-4">
            <img
              src={icon4}
              className="h-24 mx-auto mb-4 mb-4 filter brightness-100 group-hover:brightness-0"
              alt="Audit and Training Icon"
            />
            <h3 className="text-xl font-bold mb-2 greycliffcf-bold group-hover:text-white">
              Audit and Training
            </h3>
            <p className="text-sm greycliffcf-regular group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              dui auctor, ullamcorper erat a, eleifend dui. Duis in libero quis
              erat varius laoreet in at lorem. Aenean dictum eros a ligula
              bibendum, id vulputate ex venenatis. Nunc posuere, justo eu
              egestas tempus, sem ex fringilla risus, ac fringilla ipsum nisi a
              turpis.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 mt-4 mb-4 rounded-lg text-center hover:bg-blue-500 hover:text-white transition-all duration-300 smooth-scroll">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 greycliffcf-bold text-gray-800 hover:text-white">
        What We Promise
      </h2>

      <div className="flex justify-between gap-6">
        <div className="rounded-lg bg-gray-100 p-4 flex-1">
          <h2 className="text-xl font-bold mb-2 greycliffcf-bold text-gray-600">
            Scientific Approach
          </h2>
          <Lottie animationData={pieChart} className="w-48 h-48 mx-auto mb-4" />
        </div>

        <div className="rounded-lg bg-gray-100 p-4 flex-1">
          <h2 className="text-xl font-bold mb-2 greycliffcf-bold text-gray-600">
            Clear Data
          </h2>
          <Lottie animationData={manSplaning} className="w-48 h-48 mx-auto mb-4" />
        </div>

        <div className="rounded-lg bg-gray-100 p-4 flex-1">
          <h2 className="text-xl font-bold mb-2 greycliffcf-bold text-gray-600">
            Detailed Reports  
          </h2>
          <Lottie animationData={chart} className="w-48 h-48 mx-auto mb-4" />
        </div>
      </div>
    </div>
        <div className="bg-gray-100 bg-opacity-60 rounded-lg smooth-scroll">
   
          {/* Apply bg-opacity-90 to make the background slightly transparent */}
          <div className="px-4 py-8 md:py-16 max-w-screen-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 greycliffcf-heavy">
              You are always welcome
            </h2>
            <div className="aspect-w-16 aspect-h-12">
              {" "}
              {/* Changed from aspect-h-9 to aspect-h-12 */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1741.1750752165358!2d10.215140010107149!3d36.861859467891925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb373c78826b%3A0x9a3adcc9f78ba614!2sMULTILAB%20SA!5e0!3m2!1sen!2stn!4v1690205917170!5m2!1sen!2stn"
                className="w-full h-full rounded-lg shadow"
                loading="lazy"
                title="Multilab Location"
                style={{ height: "500px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
