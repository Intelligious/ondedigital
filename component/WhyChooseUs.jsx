import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-color pb-3">
      <div className="container ">
        <div className="row text-center">
          <div className="text-center">
            <div className="choose-text">Why Choose Us</div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 choose_p text_p">
            <div className="d-flex align-items-center  mb-4">
              <div className="text-end">
                <h2>Economic</h2>
                <span className="text-end">
                  Unlock cost-effective IT solutions tailored to your needs,
                  maximizing value without compromising quality.
                </span>
              </div>
              <img
                src="images/img1.png"
                className="mt-2 ml-3 ms-3"
                width="55px"
                height="55px"
              />
            </div>
            <div className="d-flex align-items-center mb-4">
              <div className="text-end">
                <h2>Professional</h2>
                <span className="text-end">
                  Benefit from our deep pool of professional expertise,
                  empowering your business with cutting-edge IT solutions and
                  industry-leading knowledge.
                </span>
              </div>
              <img
                src="images/img (2).png"
                className="mt-2 ml-3 ms-3"
                width="55px"
                height="55px"
              />
            </div>
            <div className="d-flex align-items-center mb-4">
              <div className="text-end">
                <h2>Security</h2>
                <span className="text-end">
                  With our IT services fortified by robust security measures,
                  safeguarding your valuable data and protecting your digital
                  assets.
                </span>
              </div>
              <img
                src="images/img (4).png"
                className="mt-2 ml-3 ms-3"
                width="55px"
                height="55px"
              />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <img src="images/Frame.png" className="img-fuild mb-3" />
          </div>
          <div className="col-12 col-md-12 col-lg-4 mb-5 ps-3 choose_p text_p">
            {" "}
            <div className="d-flex align-items-center mb-4">
              <img
                src="images/img (5).png"
                className="mt-2 mr-3 me-3"
                width="55px"
                height="55px"
              />
              <div className="text-start">
                <h2>Time</h2>
                <span>
                  Experience time-efficiency at its finest with our IT services,
                  ensuring streamlined processes and rapid solutions.
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <img
                src="images/img (3).png"
                className="mt-2 mr-3 me-3"
                width="55px"
                height="55px"
              />
              <div className="text-start">
                <h2>24*7</h2>
                <span>
                  Stay connected and supported around the clock with our 24/7
                  availability, ensuring your IT needs are met whenever you need
                  us.
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <img
                src="images/img (6).png"
                className="mt-2 mr-3 me-3"
                width="55px"
                height="55px"
              />
              <div className="text-start">
                <h2>User Satisfaction</h2>
                <span>
                  Our unwavering commitment to user satisfaction drives us to go
                  above and beyond, ensuring your needs are not only met but
                  exceeded at every step.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
