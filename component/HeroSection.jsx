import React, { useEffect, useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSection = () => {
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
    <div className="container-fluid" id="home">
      <div className="row">
        <div
          className={`col-12 col-md-6 col-lg-6 ${
            !isImageVisible && "col-md-12"
          }`}
        >
          <div className="hero_heading">We Help you</div>
          <div className="hero_head">to grow your </div>
          <div className="business_head">Business</div>
          <div className="border_color" />

          <div className="hero_para">
            At öndë digital we offer a comprehensive range of services to
            fuel your digital success.
          </div>
          <div className="mt-5 d-flex flex-column flex-sm-row ">
            <a href="https://wa.me/qr/LL6L6AJMAGW5A1">
              <button type="button" className="hero__button button_margin">
                Let’s Talk{" "}
              </button>
            </a>
          </div>
        </div>
        {isImageVisible && (
          <div className="col-12 col-md-6 col-lg-6">
            <img
              src="images/Group 2014.png"
              className="img-fluid"
              alt="Landing"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
