import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "./Contact.css";
import {
  createMessage,
  firstNameReducer,
  lastNameReducer,
  emailReducer,
  adressReducer,
  phoneNumberReducer,
  titleReducer,
  messageReducer,
} from "./Contact.-api-slice";

export default function Contact() {
  const message = useAppSelector((state) => state.message);
  const dispatch = useAppDispatch();



  return (
    
 <div className="grid place-items-center h-screen mt-10 mb-10">
  <div className=" group bg-blue-500 p-4 rounded-lg space-y-4 w-1/2 hover:bg-white hover:text-gray-500 transition-all duration-300">
  <div className ="flex flex-col items-center justify-center"> 
    <h2 className="greycliffcf-heavyoblique text-3xl">Send us a message</h2>
  </div>
  <div className="flex flex-col ">
    <label htmlFor="firstName" className="text-white font-semibold greycliffcf-lightoblique group-hover:text-gray-500">
      First Name
    </label>
    <input
      id="firstName"
      name="firstName"
      type="text"
      placeholder="First Name"
      className="px-3 py-2 border border-black rounded-lg focus:outline-none focus:border-blue-500 text-black"
      onChange={(e) => dispatch(firstNameReducer(e.target.value))}
    />
  </div>
  <div className="flex flex-col ">
    <label htmlFor="lastName" className="text-white font-semibold greycliffcf-lightoblique group-hover:text-gray-500">
      Last Name
    </label>
    <input
      id="lastName"
      name="lastName"
      type="text"
      placeholder="Last Name"
      className="px-3 py-2 border border-black rounded-lg focus:outline-none focus:border-blue-500 text-black"
      onChange={(e) => dispatch(lastNameReducer(e.target.value))}
    />
  </div>
  <div className="flex flex-col ">
    <label htmlFor="address" className="text-white font-semibold greycliffcf-lightoblique group-hover:text-gray-500">
      Address
    </label>
    <input
      id="address"
      name="address"
      type="text"
      placeholder="Address"
      className="px-3 py-2 border border-black rounded-lg focus:outline-none focus:border-blue-500 text-black"
      onChange={(e) => dispatch(adressReducer(e.target.value))}
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="email" className="text-white font-semibold greycliffcf-lightoblique group-hover:text-gray-500">
      E-mail
    </label>
    <input
      id="email"
      name="email"
      type="text"
      placeholder="E-mail"
      className="px-3 py-2 border border-black rounded-lg focus:outline-none focus:border-blue-500 text-black"
      onChange={(e) => dispatch(emailReducer(e.target.value))}
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="phoneNumber" className="text-white font-semibold greycliffcf-lightoblique group-hover:text-gray-500">
      Phone Number
    </label>
    <input
      id="phoneNumber"
      name="phoneNumber"
      type="text"
      placeholder="Phone Number"
      className="px-3 py-2 border border-black rounded-lg focus:outline-none focus:border-blue-500 text-black"
      onChange={(e) => dispatch(phoneNumberReducer(e.target.value))}
    />
  </div>
  <div className="flex flex-col ">
    <label htmlFor="title" className="text-white font-semibold greycliffcf-lightoblique group-hover:text-gray-500">
      Title
    </label>
    <input
      id="title"
      name="title"
      type="text"
      placeholder="Title"
      className="px-3 py-2 border border-black rounded-lg focus:outline-none focus:border-blue-500 text-black"
      onChange={(e) => dispatch(titleReducer(e.target.value))}
    />
  </div>
  <div className="flex flex-col ">
    <label htmlFor="message" className="text-white font-semibold greycliffcf-lightoblique group-hover:text-gray-500">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      placeholder="Write your message here"
      className="px-3 py-2 border border-black rounded-lg focus:outline-none focus:border-blue-500 h-40 resize-y text-black"
      onChange={(e) => dispatch(messageReducer(e.target.value))}
    ></textarea>
  </div>
  <div className = "flex justify-center items-center">
    <input
      type="button"
      value="Send Message"
      className="px-4 py-2 bg-blue-100 text-black rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 greycliffcf-lightoblique"
      onClick={() => dispatch(createMessage(message.value))}
    />
  </div>

  {message.success && (
    <p className="text-green-500">
      Your message has been sent and will be treated in a few days.
    </p>
  )}
  {message.error && <p className="text-red-500">Error sending your message.</p>}
</div>
</div>

  )
}
