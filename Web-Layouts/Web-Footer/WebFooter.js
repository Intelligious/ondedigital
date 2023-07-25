export default function WebFooter() {
  return (
    <footer className="footer-bg" id="contact">
      <div className="container mb-3">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-4  mt-5 ">
            <div className="footer-logo-container">
              <a href="#home">
                <img
                  src="images/onde digital.svg"
                  class="res_logo_img"
                />
              </a>
            </div>
            <div style={{ textAlign: "center" }} className="mt-2 mb-3">
              <a style={{ textDecoration: "underline" }} href="mailto:hi@onde.digital">
              hi@onde.digital
              </a>
            </div>
            <div className="mt-2 mb-2">
              <ul
                id="MobileNav"
                className="mobile-nav d-flex justify-content-center nav-fix"
              >
                <li>
                  <a href="#home" className="pointer">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="pointer">
                    Who are We
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
                  <a href="#contact" className="pointer">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <h6 className="f_text">
              We blend innovation, design, and technology to deliver exceptional
              solutions that empower our clients' growth. Join us on the path to
              digital transformation and unlock your true potential today.
            </h6>
          </div>
          <div className="text-center mt-3">
          <a href="https://www.facebook.com/profile.php?id=100094250689352" target="_blank">
                  <i className="fa-brands fa-facebook head_icon me-3"></i>
                </a>
                <a href="https://www.youtube.com/@ondedigital" target="_blank">
                  <i className="fa-brands fa-youtube head_icon me-3"></i>
                </a>
                <a href="https://www.linkedin.com/company/onde-digital/" target="_blank">
                  <i className="fa-brands fa-linkedin-in head_icon me-3"></i>
                </a>
                <a href="https://www.instagram.com/ondedigital/" target="_blank">
                  <i className="fa-brands fa-instagram head_icon me-3"></i>
                </a>
              </div>
        </div>
      </div>
      <div className="footer_hr " />
      <h4 className="text-center pb-2 pt-3">
        © 2023 öndë digital | All Rights Reserved
      </h4>
    </footer>
  );
}
