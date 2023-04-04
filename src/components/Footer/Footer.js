import vk from "./../../images/icons/Vector-11.svg";
import f from "./../../images/icons/Vector-2.svg";
import i from "./../../images/icons/Vector-3.svg";
import t from "./../../images/icons/Vector-4.svg";
import ins from "./../../images/icons/Vector-vector.svg";

import "./../Footer/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vk} alt="" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={f} alt="" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={i} alt="" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={t} alt="" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={ins} alt="" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
