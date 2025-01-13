import "./footerContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function FooterContainer() {
  return (
    <>
      <div className="footerContainer">
        <div className="shapedividers_com-146"></div>
        <div className="footer-info">
          <div className="about">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus magni ipsum provident libero deleniti, modi
              perspiciatis.
            </p>
          </div>
          <div className="contacts">
            <h1>Contact</h1>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPhone} className="Contact-icons" />
                +370 894 3215
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="Contact-icons" />
                crypto@gmail.com
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="Contact-icons"
                />
                Vilnius, Lithuania
              </li>
            </ul>
          </div>
          <div className="useful-links">
            <h1>Quick Links</h1>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="follow">
            <h1>Follow Us</h1>
            <div className="follow-icons">
              <a href="">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="follow-icons-color"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="follow-icons-color"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="follow-icons-color"
                />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="license">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default FooterContainer;
