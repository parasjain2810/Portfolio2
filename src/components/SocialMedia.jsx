import React from "react";

import { BsLinkedin ,BsGithub, BsTwitter} from "react-icons/bs";


const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/parasjain2810/"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/parasjain2810"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://x.com/ParasJain140450"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsTwitter/>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
