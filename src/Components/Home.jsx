import team from "../assets/team.png";
import { BiLocationPlus } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";
import "./Home.scss";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Home = () => {
  const { t } = useTranslation();
  const leftRef = useRef();
  const rightRef = useRef();

  useGSAP(() => {
    gsap.from(leftRef.current.children, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1, 
      ease: "power3.out",
    });

    gsap.from(rightRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="home container-box" id="home">
      <div className="left" ref={leftRef}>
        <p className="small-heading">{t("smallHeading")}</p>
        <h1>{t("mainHeading")}</h1>
        <h1 className="sColor">{t("premiumBarberShop")}</h1>
        <p>{t("description")}</p>
        <button>
          <BiLocationPlus /> Denton, TX
        </button>
        <Link to="services" smooth={true} offset={-50} duration={300}>
          <button>{t("services")}</button>
        </Link>
        <Link to="contact" smooth={true} offset={-50} duration={300}>
          <button className="sThemeBtn">{t("bookNow")}</button>
        </Link>
        <Link to="about" smooth={true} offset={-50} className="down-arrow" duration={300}>
          <FaArrowDown />
        </Link>
      </div>
      <div className="right" ref={rightRef}>
        <img src={team} alt="Our Team" />
      </div>
    </div>
  );
};
