import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://t.me/prodam_slona" target="_blank" rel="noreferrer">
          <BsTelegram />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/denis.orlovsky.1"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="#contact">
          <GrMail />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
