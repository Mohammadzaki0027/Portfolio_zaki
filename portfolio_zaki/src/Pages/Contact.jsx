import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
console.log(e);
    emailjs
      .sendForm(
        "service_ulk3eyf",
        "template_zqb0wuh",
        form.current,
        "4a6GhZnFUCi5KY2oK"
      )
      .then(
        (result) => {
          alert("Thanks for contact me");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactcontainer" id="contact">
      <div id="contact" className="contact">
        <h2 id="connect">Connect Me</h2>
        <div className="contact-form">
          <form action="" ref={form} onSubmit={sendEmail}>
            <div className="subject">
              <input
                type="text"
                variant="outline"
                size="lg"
                placeholder="  Enter Your Name"
                required
                name="user_name"
              />
            </div>
            <div className="subject">
              <input
                type="text"
                placeholder="  Subject"
                required
                name="user_subject"
              />
            </div>
            <div className="subject">
              <input
                type="email"
                placeholder="  Enter Your Email"
                className="emailto"
                required
                name="user_email"
              />
            </div>
            <div>
              <textarea
                className="Message"
                placeholder=" Send Your Message"
                required
                name="message"
              ></textarea>
            </div>
            <div className="subject">
              <input
                type="submit"
                value="Send"
                className="button"
                name="send"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="spacerfooter"></div>
    </div>
  );
};

export default Contact;
