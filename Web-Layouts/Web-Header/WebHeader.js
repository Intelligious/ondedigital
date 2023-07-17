import { useState, useEffect } from "react";

export default function WebHeader() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [click, setClick] = useState(false);
  const [screenWidth, setScreenWidth] = useState({
    width: undefined,
    height: undefined,
  });

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    setClick(!click);
  };

  const tabClose = () => {
    setToggleMenu(!toggleMenu);
    setClick(!click);
  };

  useEffect(() => {
    if (toggleMenu) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [toggleMenu]);

  useEffect(() => {
    function handleResize() {
      setScreenWidth({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header_fix">
      <div className=" classicHeader d-flex">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div className="col-md-2 col-lg-2 d-none d-lg-block">
              <a href="/" className="pointer">
                <img
                  src="images/onde digital.svg"
                  className="res_logo_img"
                />
              </a>
            </div>
            <div className="col-10 col-md-10 col-lg-8 text-start">
              <div className="d-block d-lg-none">
                <div className="pointer">
                  <img
                    src="images/onde digital.svg"
                    className="res_logo_img"
                  />
                </div>
              </div>
              <nav className="grid__item d-lg-block d-none" id="AccessibleNav">
                <ul id="siteNav" className="site-nav medium center siteNav ">
                  <li>
                    <a href="#home" className="pointer">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#ourservices" className="pointer">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="pointer">
                      Who are We
                    </a>
                  </li>
                  <li>
                    <a href="#recentprojects" className="pointer">
                      Our Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="pointer">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-2 col-md-2 col-lg-2 text-end ">
              <div className="site-cart d-block d-lg-none">
                <button
                  className="site-header__menu z-index-1"
                  onClick={toggleNav}
                >
                  <i className={click ? "fa fa-bars" : "fa fa-bars"}></i>
                </button>
              </div>
              <div className="hide_icon">
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-facebook head_icon me-3"></i>
                </a>
                <a href="https:///twitter.com" target="_blank">
                  <i className="fa-brands fa-twitter head_icon me-3"></i>
                </a>
                <a href="https://linkedin.com" target="_blank">
                  <i className="fa-brands fa-linkedin-in head_icon me-3"></i>
                </a>
                <a href="https://instagram.com" target="_blank">
                  <i className="fa-brands fa-instagram head_icon me-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-navbar-menu ${toggleMenu ? "open" : ""}`}>
        {(toggleMenu || screenWidth > 500) && (
          <>
            <div className={`closemobileMenu ${toggleMenu ? "open" : ""}`}>
              <i className="icon fa fa-times" onClick={tabClose}></i>
            </div>
            <ul id="MobileNav" className="mobile-nav">
              <li>
                <a href="/" className="pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#whoarewe" className="pointer">
                  Who are We ?
                </a>
              </li>
              <li>
                <a href="#ourservices" className="pointer">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#recentprojects" className="pointer">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#contactus" className="pointer">
                  Contact Us
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
