import React, { useRef, useState, useEffect } from "react";
import "./Contact.scss";
import {
  FaEnvelope,
  FaMapMarker,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { ImGithub } from "react-icons/im";
import { GrLinkedinOption } from "react-icons/gr";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7f7huex",
        "template_hhgkhs7",
        e.target,
        "kxG6uJFwp_DNseQWW"
      )
      .then(
        (result) => {
          // alert("Message Sent!");
          console.log("Message Sent!");
        },
        (error) => {
          // alert("Failed to send!");
          console.error("Failed to send!");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="Contact container section" id="contactSec">
      <h1 className="contactTitle">
        Contact <span>Me</span>
      </h1>
      <div className="mainContact">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="inputsDiv"
          data-aos="fade-right"
        >
          <div className="towInputs">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="input1"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="input2"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input3"
            required
          />
          <textarea
            name="message"
            className="input4"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="sendBtn" disabled={loading}>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>{loading ? "Sending..." : "Send"}</span>
          </button>
        </form>

        <div className="informations" data-aos="fade-left">
          <div className="infoDiv">
            <IoPersonSharp className="icon" />
            <h4>Fatma Gamal</h4>
          </div>
          <div className="infoDiv">
            <MdOutlinePhoneAndroid className="icon" />
            <h4>+01062236623</h4>
          </div>
          <div className="infoDiv">
            <FaEnvelope className="icon" />
            <h4>fatmagamal.webdev@gmail.com</h4>
          </div>
          <div className="infoDiv">
            <FaMapMarker className="icon" />
            <h4>Cairo, Egypt</h4>
          </div>
          <div className="iconsDiv">
            <div className="iconDiv">
              <a href="https://www.linkedin.com/in/fatma-gamal-98b297235">
                <GrLinkedinOption className="icon" />
              </a>
            </div>
            <div className="iconDiv">
              <a href="http://t.me/Fatmagamal26">
                <FaTelegramPlane className="icon" />
              </a>
            </div>
            <div className="iconDiv">
              <a href="https://github.com/fatmaindex">
                <ImGithub className="icon" />
              </a>
            </div>
            <div className="iconDiv">
              <a href="https://www.instagram.com/fatma.gamal.733">
                <FaInstagram className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
