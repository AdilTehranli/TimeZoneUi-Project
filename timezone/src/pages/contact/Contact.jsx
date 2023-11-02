import React, { useState, useEffect } from "react";
import Slider from "../../components/slider/Slider";
import "../contact/Contact.scss";
import { FiHome } from "react-icons/fi";
import { TfiTablet } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Contact = () => {
  const navigate = useNavigate();

  const url = "https://localhost:7027";

  const [contact, setContact] = useState([]);

  const [name, setName] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const newContact = {
    name: name,
    mailAddress: mailAddress,
    subject: subject,
    message: message,
  };
  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getAllContact = async () => {
    try {
      const response = await axios.get(`${url}/api/Contacts/GetContact`);
      setContact(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllContact();
  }, []);

  const CreateContact = async (e) => {
    e.preventDefault();

 

    const formData = new FormData();
    for (const [key, value] of Object.entries(newContact)) {
      formData.append(key, value);
    }

    await axios
      .post(`${url}/api/Contacts/CreateContact`, formData, config, {
        headers: {
          Accept: "*/*",
        },
      })
      .then((res) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your message has been sent successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res);
        setContact([]);
        setName("");
        setMailAddress("");
        setSubject("");
        setMessage("");
        navigate("/contact");
      })
      .catch((err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Your message was not sent successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(err);
        navigate("/contact");
      });
  };

  return (
    <div>
      <Slider title="Contacts" />
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622019617!2d-74.30932345776561!3d40.69701929842719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2saz!4v1695983975612!5m2!1sen!2saz"
          style={{ width: "100%", height: "450px", marginTop: "80px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="row">
          <div className="contact__right col-8">
            <h3>Get in Touch</h3>
            <form onSubmit={(e) => CreateContact(e)}>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-control mt-4"
                id="exampleFormControlTextarea1"
                rows="7"
                placeholder="Enter message"
              ></textarea>
              <div className="row">
                <div className="col-6">
                  <input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control mt-4"
                    id="exampleFormControlInput1"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-6">
                  <input
                    name="mailaddress"
                    value={mailAddress}
                    onChange={(e) => setMailAddress(e.target.value)}
                    type="email"
                    className="form-control mt-4"
                    id="exampleFormControlInput1"
                    placeholder="Enter mail address"
                  />
                </div>
              </div>
              <input
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                className="form-control mt-4"
                id="exampleFormControlInput1"
                placeholder="Enter subject"
              />
              <button type="submit">SEND</button>
            </form>
          </div>
          <div className="contact__left col-lg-3 offset-lg-1">
            <div className="contact__info d-flex">
              <FiHome className="contact__icon" />
              <div className="contact__info__text">
                <h5>Buttonwood, California.</h5>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="contact__info d-flex mt-4">
              <TfiTablet className="contact__icon" />
              <div className="contact__info__text">
                <h5>+994702168500</h5>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="contact__info d-flex mt-4">
              <AiOutlineMail className="contact__icon" />
              <div className="contact__info__text">
                <h5>adil.tehranli0@gmail.com</h5>
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
