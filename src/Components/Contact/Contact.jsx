import React from "react";
import "./Contact.css";
import Lottie from "lottie-react";
import done from "../../image/done.json";
import email from "../../image/email.json";

import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("mvojdbpq");

  
 
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-2">
            <div className="d-flex  align-items-center">
              <i
                className="fs-1  mr-2 fa-solid fa-envelope"
                style={{ color: "var(--subTitle)" }}
              ></i>
              <h1 className="mx-3 fw-bold " style={{ color: "var(--title)" }}>
                Contact Me
              </h1>
            </div>
            <p style={{ color: "var(--subTitle)", lineHeight: "1.8rem" }}>
              Contact Me For More Information And Get Notified When I Publish
              Something New.
            </p>
          </div>
          <div className="img-contact-mobile  col-md-6 "><Lottie className="email email-mobile"  animationData={email}  /></div>

          <div className="col-md-6 pt-5">
            <form onSubmit={handleSubmit}>
              <div className="flex-contact my-3">
                <label htmlFor="email" style={{ color: "var(--subTitle)" }}>
                  {" "}
                  Email Address{" "}
                </label>
                <input
                autoComplete="off"
                  type="email"
                  required
                  name="email"
                  id="email"
                  placeholder=" Email Address"
                  className="mx-4 fromControl"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="flex-contact">
                <label htmlFor="message" style={{ color: "var(--subTitle)" }}>
                  {" "}
                  Your Message{" "}
                </label>
                <textarea
                name="message"
                  id="message"
                  required
                  className="mx-4 fromControl"
                  placeholder="Message"
                  rows="4"
                  cols="30"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="sub">
                <button className="btn-main submit my-3"type="submit" disabled={state.submitting}> {state.submitting?"Submiting ...":"Submit"}</button>
              </div>
              { state.succeeded&&(
              <p className="d-flex align-items-center" style={{fontSize:"14px",marginTop:"1.7rem"}}>
                <Lottie loop={false} animationData={done} style={{height:"37px"}} />Message has been sent. Thank you</p>)}

            </form>
          </div>
          <div className="img-contact col-md-6 "><Lottie className="email"  animationData={email}  /></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
