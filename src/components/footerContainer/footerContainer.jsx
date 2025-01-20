import "./footerContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

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
          <motion.div
            className="about"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 id="about-us">About Us</h1>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus magni ipsum provident libero deleniti, modi
              perspiciatis.
            </motion.p>
          </motion.div>

          <motion.div
            className="contacts"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1>Contact</h1>
            <motion.ul
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
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
            </motion.ul>
          </motion.div>

          <motion.div
            className="useful-links"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h1>Quick Links</h1>
            <motion.a
              href="#"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Services
            </motion.a>
            <motion.a
              href="#"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Careers
            </motion.a>
            <motion.a
              href="#"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              Privacy Policy
            </motion.a>
          </motion.div>

          <motion.div
            className="follow"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <h1>Follow Us</h1>
            <div className="follow-icons">
            <motion.a
              href=""
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <FontAwesomeIcon icon={faGithub} className="follow-icons-color" />
            </motion.a>
            <motion.a
              href=""
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.1 }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="follow-icons-color"
              />
            </motion.a>
            <motion.a
              href=""
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="follow-icons-color"
              />
            </motion.a>
            </div>
          </motion.div>
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
