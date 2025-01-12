import "./footerContainer.css";

function FooterContainer() {
  return (
    <div className="footerContainer">
      <div className="footer-info">
      <div className="about">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,</p>
      </div>
      <div className="contacts">
        <h1>Contact</h1>
        <ul>
          <li>+3708943215</li>
          <li>crypto@gmail.com</li>
          <li>Vilnius, Lithuania</li>
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
        <p>icon</p>
        <p>icon</p>
        <p>icon</p>
      </div>
      </div>
      <hr />
      <div className="license">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default FooterContainer;
