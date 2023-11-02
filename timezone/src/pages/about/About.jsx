import React, { useEffect, useState } from "react";
import Slider from "../../components/slider/Slider";
import "../about/About.scss";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import video from "../../assets/videos/Rolex Glidelock – Take it up a notch.mp4";
import Wrapper from "../../components/wrapper/Wrapper";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7027/api/Abouts/GetAbout").then((res) => {
      setAbout(res.data);
    });
  }, []);
  return (
    <div>
      <Slider title="About Us" />

      <div className="about">
        <div className="container">
          <div className="row">
            {about.map((item, index) => (
              <div key={index} className="about__title col-xl-7 col-lg-10 col-md-12 col-sm-10 ">
                <h3>
                  <span></span> {item.title}
                </h3>
                <p className="about__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="video">
        <Video>
          <source src={video} type="video/webm" />
        </Video>
      </div>
      <Wrapper />
    </div>
  );
};

export default About;
