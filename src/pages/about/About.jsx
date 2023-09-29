import React from "react";
import Slider from "../../components/slider/Slider";
import '../about/About.scss';
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import video from "../../assets/videos/Rolex Glidelock – Take it up a notch.mp4";
import Wrapper from "../../components/wrapper/Wrapper";

const About = () => {
  return (
    <div>
      <Slider title="About Us" />

      <div className="about">
        <div className="container">
          <div className="about__title">
            <h3>
              <span></span>   Our Mission
            </h3>
            <p className="about__desc">
              Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
              labore et dolore magna aliqua. Quis ipsum <br /> suspendisces gravida.
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo <br /> viverra sebfd dho eiusmod tempor maecenas
              accumsan lacus.
            </p>
            <p>
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho <br /> eiusmod tempor maecenas
              accumsan.
            </p>
          </div>
        
          <div className="about__title">
            <h3>
              <span></span>   Our vision
            </h3>
            <p className="about__desc">
              Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
              labore et dolore magna aliqua. Quis ipsum <br /> suspendisces gravida.
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo <br /> viverra sebfd dho eiusmod tempor maecenas
              accumsan lacus.
            </p>
            <p>
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho <br /> eiusmod tempor maecenas
              accumsan.
            </p>
          </div>
        </div>
      </div>
      <div className="video">
        <Video >
          <source src={video} type="video/webm" />
        </Video>
      </div>
      <Wrapper/>
    </div>
  );
};

export default About;
