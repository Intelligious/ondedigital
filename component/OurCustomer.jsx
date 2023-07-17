import React from "react";
import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";

const OurCustomer = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
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
    <div className="recent-p">
      <div className="container customer_card ">
        <div className="row ">
          <div className="text-center mt-5 ">
            <div className="recent-text p_text lh-sm">Our Testimonials</div>
            <div className="what_para">What Our Clients Are Saying</div>
            <div className="customer_border" />
          </div>
          <div>
            <Slider {...settings}>
              <div className=" mt-5">
                <div className="card shadow">
                  <img
                    src="images/“.png"
                    width="60px"
                    height="60px"
                    className="mt-4 ms-5"
                  />
                  <div className="card-body">
                    <span className="text-start">
                    Reliable IT support at its finest! Their proactive approach, quick resolutions, and proactive security measures have ensured our systems run smoothly. We appreciate their consistent top-notch service.
                    </span>
                    <hr />
                    <div className="d-flex align-items-center">
                      <img
                        src="images/2.png"
                        width="50px"
                        height="50px"
                        className="ms-2"
                        alt="Avatar"
                      />
                      <div className="d-flex flex-grow-1 justify-content-between">
                        <span className="customer_name">Patrick Mammone</span>
                        {/* <div className="star_icon">
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-5">
                <div className="card shadow">
                  <img
                    src="images/“.png"
                    width="60px"
                    height="60px"
                    className="mt-4 ms-5"
                  />
                  <div className="card-body">
                    <span className="text-start">
                    Onde Digital's seamless integration improved productivity and operations with their professional approach and deep understanding of our unique requirements.
                    </span>
                    <hr />
                    <div className="d-flex align-items-center">
                      <img
                        src="images/3.png"
                        width="50px"
                        height="50px"
                        className="ms-2"
                        alt="Avatar"
                      />
                      <div className="d-flex flex-grow-1 justify-content-between">
                        <span className="customer_name">Sandro Tavares</span>
                        {/* <div className="star_icon">
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-5">
                <div className="card shadow">
                  <img
                    src="images/“.png"
                    width="60px"
                    height="60px"
                    className="mt-4 ms-5"
                  />
                  <div className="card-body">
                    <span className="text-start">
                    The team went above and beyond to solve our technical issues. Their prompt response, expert knowledge, and dedication to customer satisfaction truly impressed us.
                    </span>
                    <hr />
                    <div className="d-flex align-items-center">
                      <img
                        src="images/1.png"
                        width="50px"
                        height="50px"
                        className="ms-2"
                        alt="Avatar"
                      />
                      <div className="d-flex flex-grow-1 justify-content-between">
                        <span className="customer_name">Barbara Smith</span>
                        {/* <div className="star_icon">
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />{" "}
                          <StarIcon
                            style={{
                              fontSize: "18px",
                            }}
                          />
                        </div> */}
                      </div>
                    </div>
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
export default OurCustomer;
