import "./About.scss";
import Shop from "../assets/shop.png";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const { t } = useTranslation();

  useGSAP(() => {
    
    gsap.from(".about .animate-item", {
      y: 40,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".about",
        start: "top 20%",
      },
    });

  
    gsap.from(".about .left-section", {
      x: -200,
      opacity: 0,
      ease: "power2.out",
      duration:1,
      scrollTrigger: {
        trigger: ".about",
        start: "top 20%",
      },
    });
  }, []);

  return (
    <div className="about container-box">
      <p className="small-heading animate-item">{t("ourStory")}</p>
      <h1 className="underlined-heading animate-item">{t("aboutHeading")}</h1>
      <p className="description animate-item">{t("aboutIntro")}</p>
      <div className="sections">
        <div className="left-section">
          <img src={Shop} alt={t("aboutImageAlt")} />
          <p className="years sThemeBtn">{t("aboutExperience")}</p>
        </div>

        <div className="right-section">
          <p className="animate-item">{t("aboutIntro")}</p>
          <div className="box animate-item">
            <small>{t("aboutDetails")}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
