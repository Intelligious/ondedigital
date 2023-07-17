import React, { useState } from "react";
import SlickCarousel from "./SlickCarousel";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <ArrowCircleLeftOutlinedIcon className="slider_icon2" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <ArrowCircleRightOutlinedIcon className="slider_icon" />
    </div>
  );
}

const OurServices = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="footer-bg " id="ourservices">
      <div className="container mt-4 ">
        <div className="row service_card">
          <div className="text-center mt-5">
            <div className="what_heading">What We Do</div>
            <div className=" what_para">For Your Business</div>
            <div className="what_border " />
          </div>
          <div className="mt-5 mb-5">
            <Slider {...settings}>
              <div className="p-2">
                <div className="card ">
                  <div className="card-body text-center">
                    <img src="images/web design.png" className="mt-3 mb-3" />
                    <h2>Website Design</h2>
                    <p>
                    We create stunning and responsive websites with cutting-edge technology and design.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="card">
                  <div className="card-body text-center">
                    <img src="images/Web dev.png" className="mt-3 mb-3" />
                    <h2>Web Development</h2>
                    <p>
                    We develop secure and scalable web apps to streamline your business processes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="card">
                  <div className="card-body text-center">
                    <img
                      src="images/Mobile dev.png"
                      className="mt-3 mb-3"
                    />
                    <h2>Mobile APP Development</h2>
                    <p>
                    We develop customized mobile apps for iOS and Android, delivering exceptional user experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="card">
                  <div className="card-body text-center">
                    <img src="images/Digital marketing.png" className="mt-3 mb-3" />
                    <h2>Digital Marketing</h2>
                    <p>
                    We do data-driven digital marketing for targeted reach, brand visibility, and measurable conversions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="card">
                  <div className="card-body text-center">
                    <img src="images/qa.png" className="mt-3 mb-3" />
                    <h2>Quality Assurance</h2>
                    <p>
                    We provide bug-free software solutions with seamless user experience through comprehensive QA testing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="card">
                  <div className="card-body text-center">
                    <img src="images/ui ux.png" className="mt-3 mb-3" />
                    <h2>UX UI Design</h2>
                    <p>
                    We focus on creating exceptional UI/UX experiences that delight users and drive engagement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="card">
                  <div className="card-body text-center">
                    <img src="images/custom dev.png" className="mt-3 mb-3" />
                    <h2>Custom Software Development</h2>
                    <p>
                    We develop custom software solutions for business growth through collaboration and scalability.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurServices;
