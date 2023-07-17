import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import SlickCarousel from "./SlickCarousel";

import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <ArrowCircleLeftOutlinedIcon className="slide_icon2" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <ArrowCircleRightOutlinedIcon className="slide_icon" />
    </div>
  );
}

const RecentProjects = () => {
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
    <div className="footer-bg pb-5 " id="recentprojects">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-6 mt-5 ">
            <div className="recent-text ">Our Recent Work</div>
            <div className=" what_para">For Your Business</div>
            <div className="recent_border " />
          </div>
          <div className="col-12 col-md-6 mt-5 ">
            <p className="recent_para ">
            Experience our recent impactful work—dynamic web designs, seamless software solutions, and ROI-driven digital marketing. Thrive in today's competitive landscape with our success stories inspiring your next venture.
            </p>
          </div>
          <div className="mt-5 mb-5">
            <Slider {...settings}>
              <div className="p-3">
                <Card className="shadow">
                  <CardMedia
                    component="img"
                    alt=""
                    className="img_p"
                    image="/images/caseIMG1 (1).png"
                  />

                  <CardContent className="line">
                    <h2 className="simplify">Hard Asset</h2>
                    <a target="_blank" href="https://hardassetsalliance.com/">
                      <button className="learn_button">View Work</button>
                    </a>
                  </CardContent>
                </Card>
              </div>
              <div className="p-3">
                <Card className="shadow">
                  <CardMedia
                    component="img"
                    alt=""
                    className="img_p"
                    image="/images/caseIMG1 (2).png"
                  />

                  <CardContent className="line">
                    <h2 className="simplify">Distro Pro</h2>
                    <a target="_blank" href="https://distroproaudio.com/">
                      <button className="learn_button">View Work</button>
                    </a>
                  </CardContent>
                </Card>
              </div>
              <div className="p-3">
                <Card className="shadow">
                  <CardMedia
                    component="img"
                    alt=""
                    className="img_p"
                    image="/images/caseIMG1 (3).png"
                  />

                  <CardContent className="line">
                    <h2 className="simplify">Coachr</h2>
                    <a target="_blank" href="https://www.coachr.io/">
                      <button className="learn_button">View Work</button>
                    </a>
                  </CardContent>
                </Card>
              </div>
              <div className="p-3">
                <Card className="shadow">
                  <CardMedia
                    component="img"
                    alt=""
                    className="img_p"
                    image="/images/caseIMG1 (4).png"
                  />

                  <CardContent className="line">
                    <h2 className="simplify">Wayfair</h2>
                    <a target="_blank" href="https://www.wayfair.com/">
                      <button className="learn_button">View Work</button>
                    </a>
                  </CardContent>
                </Card>
              </div>
              <div className="p-3">
                <Card className="shadow">
                  <CardMedia
                    component="img"
                    alt=""
                    className="img_p"
                    image="/images/caseIMG1 (5).png"
                  />

                  <CardContent className="line">
                    <h2 className="simplify">Fiter</h2>
                    <a target="_blank" href="https://get.fitr.training/">
                      <button className="learn_button">View Work</button>
                    </a>
                  </CardContent>
                </Card>
              </div>
              <div className="p-3">
                <Card className="shadow">
                  <CardMedia
                    component="img"
                    alt=""
                    className="img_p"
                    image="/images/caseIMG1 (6).png"
                  />

                  <CardContent className="line">
                    <h2 className="simplify">Circle</h2>
                    <a target="_blank" href="https://circledna.com/">
                      <button className="learn_button">View Work</button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
