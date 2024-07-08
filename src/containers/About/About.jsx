import React from "react";
import { motion } from "framer-motion";
import {abouts} from '../../data/constants'
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {

 


  const viewResumeHandler = () => {
    window.open("https://smallpdf.com/file#s=ac920da6-19cb-415b-9af0-f063251bfbc4", "_blank");
  };

  return (
    <>
      <h2 className="head-text">
      Bridging the Gap Between <span>Fullstack</span> developer <br /> & Your <span>Business</span>
       Goals
      </h2>

      <div className="app__about-context app__flex">
        <div className="app__about-img app__flex">
          <div className="app__flex">
            <img
              src={
                images.aboutmine
              }
              alt="Profile"
            />
          </div>
        </div>
        <div className="app__about-data app__flex">
          <h2 className="head-text">About Me</h2>
          <p
            className="p-text"
          >Eager to apply my expertise in <span>MongoDB, Express.js, Node.js and firebase </span> for backend to real-world projects. Seeking internship opportunities to help businesses thrive in the digital age Excited to leverage my skills in <span>React.js and Next.js</span> to benefit businesses. Looking for an internship where I can contribute to digital transformation. This portfolio showcases my skills and experience in building <span>responsive, user-friendly websites and applications</span>. Explore my projects to see how I can turn your vision into reality.</p>
          <div>
            <button className="portfolio-button" onClick={viewResumeHandler}>
              Resume
            </button>
          </div>
        </div>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
