import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AboutUs = () => {
  return (
    <div className="bg-color " id="whoarewe">
      <div className="container ">
        <div className="row ">
          <div className="text-center  ">
            <div className="text-color page-margin">About Us</div>
            <div className="text-bott0m-color mt-4 h_text">
              Transforming Ideas into Digital Excellence
            </div>
            <div className="text-center p_text mt-3">
              <p>
                At Knewton Consulting, we are passionate about transforming
                ideas into digital excellence. With a relentless pursuit of
                innovation and a commitment to delivering exceptional solutions,
                we partner with businesses across industries to help them
                navigate the digital landscape successfully. Our team of
                talented professionals combines technical expertise, creative
                thinking, and a customer-centric approach to deliver customized
                solutions that drive growth, enhance efficiency, and elevate the
                digital presence of our clients. With a focus on collaboration,
                transparency, and excellence, we strive to build long-term
                partnerships that create a lasting impact in the digital world.
              </p>
            </div>
            <div className=" mt-5 text-center">
              <a href="https://wa.me/qr/47O6U47IHJNZD1">
                <button type="button" className="hero__button  text-center">
                  Let’s Talk{" "}
                  <ChatBubbleOutlineIcon
                    style={{
                      width: "24px",
                      height: "24px",
                      marginLeft: "3px",
                    }}
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
