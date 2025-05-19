import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About",
          services: "Services",
          gallery: "Gallery",
          contact: "Contact",
          bookAppointment: "Book an Appointment",
          bookNow: "Book Now",
          menu: "Menu",
          smallHeading: "Premium Barber Services in Denton",
          mainHeading: "Classic Cuts, Modern Style",
          premiumBarberShop: "Premium Barber Shop",
          description:"At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.",
          contactHeadingSmall: "Book appointment",
          contactHeadingMain: "Contact Us",
          contactDescription: "Reach out to us to book your appointment or for any inquiries. We're here to help.",
          galleryIntro: "Our Work & Shop",
          galleryHeading: "Our Barbershop Gallery",
          galleryDescription: "Check out some shots from our shop and the work we do!",
          faqTitle: "FAQs",
          faqDesc: "Answers to common questions about our barbershop services.",
          commonQuestions: "Common questions",
          ourStory: "Our Story",
          aboutHeading: "About PMC Barbershop",
          aboutIntro:
            "Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.",
          aboutDetails:
            "We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.",
          aboutExperience: "5+ years",
          aboutImageAlt: "Our shop",
          servicesIntro: "Premium Grooming",
          servicesHeading: "Our Barber Services",
          servicesDescription:
            "Professional barbering services to keep you looking sharp for everyday confidence or special occasions.",
          faqCategories: {
            all: "All",
            general: "General",
            services: "Services",
            pricing: "Pricing",
            support: "Support"
          },
          faqs: {
            q1: "Do I need an appointment or can I walk in?",
            a1: "You can walk in, but we recommend making an appointment to ensure availability.",
            q2: "How long does a typical haircut take?",
            a2: "A typical haircut takes around 30–45 minutes depending on the style and service.",
            q3: "What form of payment do you accept?",
            a3: "We accept cash, all major credit/debit cards, and digital payments.",
            q4: "Do you offer any loyalty programs or discounts?",
            a4: "Yes, we have a loyalty program. Ask our team for details during your visit.",
            q5: "What hair products do you use and sell?",
            a5: "We use and sell premium professional products like XYZ Brand. Ask our barbers for recommendations."
          }
        }
      },
      hi: {
        translation: {
          home: "Home",
          about: "Hamare Baare Mein",
          services: "Sevayein",
          gallery: "Gallery",
          contact: "Sampark Karein",
          bookAppointment: "Appointment Book Karein",
          bookNow: "Abhi Book Karein",
          menu: "Menu",
          smallHeading: "Denton mein Premium Nai Sevayein",
          mainHeading: "Classic Cuts, Modern Style",
          premiumBarberShop: "Premium Barber Shop",
          contactHeadingSmall: "Appointment Book Karein",
          contactHeadingMain: "Sampark Karein",
          contactDescription: "Appointment book karne ya kisi bhi sawal ke liye humein sampark karein. Hum madad ke liye yahan hain.",
          galleryIntro: "Hamara Kaam aur Dukaan",
          galleryHeading: "Hamari Barbershop Gallery",
          galleryDescription: "Hamare kaam aur dukaan ki kuch jhalak dekhiye!",
          description:
            "PMC Barbershop mein, hum paramparik nai techniques ko modern styling ke saath milaake aapko perfect look dete hain. Hamare anubhav se bhare nai precision cuts, daadhi grooming aur relaxing hot towel shaves dete hain ek classic barbershop atmosphere mein.",
          faqTitle: "FAQs",
          faqDesc: "Hamari barbershop services ke baare mein aam prashno ke jawab.",
          commonQuestions: "Aam Prashn",
          ourStory: "Hamari Kahani",
          aboutHeading: "PMC Barbershop ke baare mein",
          aboutIntro:
            "2018 mein sthaapit, PMC Barbershop Denton, TX ke purusho ko premium grooming services de raha hai. Hamara mission hai ek swagat yogya, classic barbershop environment mein behtareen haircut aur grooming services dena.",
          aboutDetails:
            "Hum har chhoti baat aur personal service par dhyan dene mein garv mehsoos karte hain, jisse har client best dekh sake aur feel kar sake. Hamare skilled barbers traditional techniques aur modern trends ko milaake custom styles banate hain jo har vyakti ki personality aur lifestyle ke hisaab se ho.",
          aboutExperience: "5+ saal",
          aboutImageAlt: "Hamari Dukaan",
          servicesIntro: "Premium Grooming",
          servicesHeading: "Hamari Barber Sevayein",
          servicesDescription:
            "Professional barbering services jo aapko rozana ya khaas maukon par smart banayein rakhein.",
          faqCategories: {
            all: "Sabhi",
            general: "General",
            services: "Sevayein",
            pricing: "Price",
            support: "Support"
          },
          faqs: {
            q1: "Kya mujhe appointment ki zarurat hai ya seedha aa sakta hoon?",
            a1: "Aap seedha aa sakte hain, lekin hum availability ensure karne ke liye appointment lene ki salah dete hain.",
            q2: "Ek normal haircut mein kitna samay lagta hai?",
            a2: "Ek haircut lagbhag 30–45 minutes leta hai, style aur service par depend karta hai.",
            q3: "Aap kis tarah ka payment accept karte hain?",
            a3: "Hum cash, sabhi major credit/debit cards aur digital payments accept karte hain.",
            q4: "Kya aapke paas koi loyalty program ya discount hai?",
            a4: "Haan, hamare paas loyalty program hai. Apni visit ke dauraan hamari team se poochhein.",
            q5: "Aap kaunse hair products use aur sell karte hain?",
            a5: "Hum XYZ brand jaise premium professional products ka use aur sale karte hain. Hamare barbers se suggestion lein."
          }
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
