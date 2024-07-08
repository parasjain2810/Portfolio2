import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonial.scss";

const Testimonial = () => {
 


  return (
    <>
      <h2 className="head-text">
        See what <span>Others</span> say about me!
      </h2>
        <>
          <div className="app__testimonial-carousel app__flex">
            <p>"While I don't have direct quotes from others, I believe they'd describe me as dedicated and reliable. In a recent <span>project</span>, I improved our backend processes, which my team appreciated. I strive to stay positive and work well with others."</p>
          </div>
        </>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
