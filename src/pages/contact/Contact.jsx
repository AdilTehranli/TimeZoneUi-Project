import React from "react";
import Slider from "../../components/slider/Slider";
import "../contact/Contact.scss";
import { FiHome } from "react-icons/fi";
import { TfiTablet } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <Slider title="Contacts" />
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622019617!2d-74.30932345776561!3d40.69701929842719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2saz!4v1695983975612!5m2!1sen!2saz"
          style={{ width: "100%", height: "450px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="row">
          <div className="contact__right col-8">
            <h3>Get in Touch</h3>
            <textarea
              className="form-control mt-4"
              id="exampleFormControlTextarea1"
              rows="7"
              placeholder="enter message"
            ></textarea>
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control mt-4"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div className="col-6">
                {" "}
                <input
                  type="email"
                  className="form-control mt-4"
                  id="exampleFormControlInput1"
                  placeholder="Enter mail address"
                />
              </div>
            </div>
            <input
              type="text"
              className="form-control mt-4"
              id="exampleFormControlInput1"
              placeholder="Enter subject"
            />
            <button>SEND</button>
          </div>
          <div className="contact__left col-4">
            <div className="contact__info d-flex">
              <FiHome className="contact__icon"/>
              <div className="contact__info__text">
                <h5>
Buttonwood, California.</h5>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="contact__info d-flex mt-4">
              <TfiTablet className="contact__icon"/>
              <div className="contact__info__text">
                <h5>
+994702168500</h5>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="contact__info d-flex mt-4">
              <AiOutlineMail className="contact__icon"/>
              <div className="contact__info__text">
                <h5>
adil.tehranli0@gmail.com</h5>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
