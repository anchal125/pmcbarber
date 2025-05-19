import { Link } from "react-scroll"
import "./Footer.scss"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="copyrights">
        <small>&copy; 2023 PMC Barbershop. All rights reserved.</small>
      </div>
      <div className="links">
        <Link to="home" smooth={true} offset={-50} duration={300}>Home</Link>
        <Link to="about" smooth={true} offset={-50} duration={300}>About</Link>
        <Link to="services" smooth={true} offset={-50}  duration={300}>Services</Link>
      </div>
    </div>
  )
}
