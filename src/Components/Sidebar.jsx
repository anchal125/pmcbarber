import "./Sidebar.scss"
import logo from "../assets/logo.png"
import { Link } from 'react-scroll'
import { FaPhoneAlt } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { IoMdColorPalette } from "react-icons/io";
import { useTranslation } from 'react-i18next';

export const Sidebar = ({ setExpand, setTheme }) => {
  const { t, i18n } = useTranslation();

  const handleTheme = () => {
    setTheme(p => (p === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "hi" : "en");
  };

  return (
    <aside className="sidebar">
      <div className="top">
        <img className='logo' src={logo} alt="PMC logo" />
        <span style={{ float: "right", fontSize:"150%" }} onClick={() => setExpand(false)}>x</span>
      </div>
      
      <p className="sColor">{t("menu")}</p>
      <div className="links">
        <Link to="home" smooth={true} offset={-50} duration={300} onClick={() => setExpand(false)}>{t("home")}</Link>
        <Link to="about" smooth={true} offset={-50} duration={300} onClick={() => setExpand(false)}>{t("about")}</Link>
        <Link to="services" smooth={true} offset={-50} duration={300} onClick={() => setExpand(false)}>{t("services")}</Link>
        <Link to="gallery" smooth={true} offset={-50} duration={300} onClick={() => setExpand(false)}>{t("gallery")}</Link>
        <Link to="contact" smooth={true} offset={-50} duration={300} onClick={() => setExpand(false)}>{t("contact")}</Link>
      </div>

      <div className="options">
        <div className="phone">
          <FaPhoneAlt className='sColor' />
          <span>+19408081569</span>
        </div>
        <div className="prefernces">
          <IoMdColorPalette onClick={handleTheme} size="20" />
          <GoGlobe onClick={toggleLanguage} size="19" style={{ cursor: "pointer" }} />
        </div>
        <Link to="contact" smooth={true} duration={300} onClick={() => setExpand(false)}>
          <button className="sThemeBtn" type="button">{t("bookAppointment")}</button>
        </Link>
      </div>
    </aside>
  );
};
