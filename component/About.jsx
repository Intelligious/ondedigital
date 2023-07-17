import React, { useEffect, useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const About = () => {
  const [isImageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setImageVisible(window.innerWidth > 992);
    };

    handleResize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="container-fluid" id="about">
      <div className="row">
        {isImageVisible && (
          <div className="col-12 col-md-6 col-lg-6">
            <img
              src="images/Group 2023.png"
              className="img-fluid"
              alt="Landing"
            />
          </div>
        )}
        <div
          className={`col-12 col-md-6 col-lg-6 ${
            !isImageVisible && "col-md-12"
          }`}
        >
          <div className="about_heading">About Us</div>
          <div className="about_para">Fake or Real</div>
          <div className="about_border" />
          <div className="hero_para">
          Innovative IT agency crafting excellence through tech solutions. We elevate businesses with software, web design, and digital marketing expertise. Propel your success with us.
          </div>
          <div className="mt-5 d-flex flex-column flex-sm-row ">
            <a href="https://wa.me/qr/LL6L6AJMAGW5A1">
              <button type="button" className="hero__button button_margin">
                Let’s Talk
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
