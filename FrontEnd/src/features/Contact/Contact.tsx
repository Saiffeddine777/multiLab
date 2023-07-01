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
} from "./Contact-api-slice";

export default function Contact() {
  const message = useAppSelector((state) => state.message);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(message.value);
  }, [message.value]);

  return (
    <div className="formContainer">
      <div className="formField">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={(e) => dispatch(firstNameReducer(e.target.value))}
        />
      </div>
      <div className="formField">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={(e) => dispatch(lastNameReducer(e.target.value))}
        />
      </div>
      <div className="formField">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Address"
          onChange={(e) => dispatch(adressReducer(e.target.value))}
        />
      </div>
      <div className="formField">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={(e) => dispatch(emailReducer(e.target.value))}
        />
      </div>
      <div className="formField">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="Phone Number"
          onChange={(e) => dispatch(phoneNumberReducer(e.target.value))}
        />
      </div>
      <div className="formField">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          onChange={(e) => dispatch(titleReducer(e.target.value))}
        />
      </div>
      <div className="formField">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here"
          onChange={(e) => dispatch(messageReducer(e.target.value))}
        ></textarea>
      </div>
      <div>
        <input
          type="button"
          value="Send Message"
          onClick={() => dispatch(createMessage())}
        />
      </div>

      {message.success && (
        <p>Your message has been sent and will be treated in a few days.</p>
      )}
      {message.error && <p>Error sending your message.</p>}
    </div>
  );
}
