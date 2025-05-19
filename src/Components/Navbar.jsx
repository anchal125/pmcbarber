import logo from "../assets/logo.png";
import { Link } from 'react-scroll';
import { FaPhoneAlt } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { IoMdColorPalette, IoMdMenu } from "react-icons/io";
import "./Navbar.scss";
import { useTranslation } from 'react-i18next';

export const Navbar = ({ setTheme, setExpand }) => {
  const { t, i18n } = useTranslation();

  const handleTheme = () => {
    setTheme((p) => (p === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "hi" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav>
      <img className='logo' src={logo} alt="PMC logo" />
      <div className="links close-links">
        <Link to="home" smooth={true} offset={-50} duration={300}>{t("home")}</Link>
        <Link to="about" smooth={true} offset={-50} duration={300}>{t("about")}</Link>
        <Link to="services" smooth={true} offset={-50} duration={300}>{t("services")}</Link>
        <Link to="gallery" smooth={true} offset={-50} duration={300}>{t("gallery")}</Link>
        <Link to="contact" smooth={true} offset={-50} duration={300}>{t("contact")}</Link>
      </div>
      <div className="options close-options">
        <div onClick={handleTheme} className="icon">
          <IoMdColorPalette size="20" />
        </div>
        <div onClick={toggleLanguage} className="icon">
          <GoGlobe size="19" />
        </div>
        <FaPhoneAlt className='sColor' />
        <span>+19408081569</span>
        <Link offset={-50} to="contact" smooth={true} duration={300}>
          <button className="sThemeBtn" type="button">{t("bookAppointment")}</button>
        </Link>
      </div>
      <IoMdMenu onClick={() => setExpand(p => !p)} className="close-menu" />
    </nav>
  );
};
