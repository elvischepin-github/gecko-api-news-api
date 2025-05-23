import "./footerContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function FooterContainer() {
  return (
    <>
      <div className="footerContainer">
        <div className="custom-shape-divider-top-1736841044">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="footer-info">
          <div className="about">
            <h1 id="about-us">About Us</h1>
            <p>
              Search for the latest news using keywords with the magnifying
              glass on your right, and filter crypto coins on your left!
            </p>
          </div>

          <div className="contacts">
            <h1>Contact</h1>
            <ul>
              {/* <li>
                <FontAwesomeIcon icon={faPhone} className="Contact-icons" />
                +370 894 3215
              </li> */}
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="Contact-icons" />
                <a
                  style={{ color: "white", fontSize: "1rem" }}
                  href="mailto:projektasxdevelopment@gmail.com"
                >
                  Email Us
                </a>
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="Contact-icons"
                />
                Vilnius
              </li>
            </ul>
          </div>

          {/* <div className="useful-links">
            <h1>Quick Links</h1>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
          </div> */}

          <div className="follow">
            <h1>Follow Us</h1>
            <div className="follow-icons">
              <a href="https://github.com/elvischepin-github/gecko-api-news-api">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="follow-icons-color"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="follow-icons-color"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="follow-icons-color"
                />
              </a>
            </div>
          </div>
        </div>
        <hr />
        {/* <div className="license">
          <p>© {new Date().getFullYear()} Gecko&News. All rights reserved.</p>
        </div> */}
      </div>
    </>
  );
}

export default FooterContainer;
