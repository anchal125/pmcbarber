export const services = [
  {
    title: "Haircuts",
    icon: "💇‍♀️", 
    description: "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
    items: ["Classic Cuts", "Modern Styles"]
  },
  {
    title: "Beard Services",
    icon: "🧔‍♂️", 
    description: "Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.",
    items: ["Beard Trims", "Beard Shaping"]
  },
  {
    title: "Premium Services",
    icon: "✨",
    description: "Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.",
    items: ["Hair Coloring", "Scalp Treatments"]
  }
];


import gallery1 from "./assets/gallery1.png"
import gallery2 from "./assets/gallery2.png"
import gallery3 from "./assets/gallery3.png"

export const gallery = [
  { image: gallery1 },
  { image: gallery2 },
  { image: gallery3 },
];


import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export const contactDetails = [
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    info: "518 Acme St unit 101, Denton, TX 76205, United States"
  },
  {
    icon: FaPhoneAlt,
    title: "Phone",
    info: "+19408081569"
  },
  {
    icon: FaClock,
    title: "Business Hours",
    info: "Mon-Fri: 9:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM, Sun: Closed"
  }
];