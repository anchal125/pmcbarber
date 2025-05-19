import './App.scss'
import { Navbar } from './Components/Navbar'
import { Sidebar } from './Components/Sidebar'
import { Home } from './Components/Home'
import { Services } from './Components/Services'
import { About } from './Components/About'
import {Faq} from "./Components/Faq"
import { Contact } from './Components/Contact'
import { Gallery } from './Components/Gallery'
import { Footer } from './Components/Footer'
import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function App() {
  const [visible,setVisible]=useState(false)
  const [theme,setTheme]=useState("light")
  const [expand,setExpand]=useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div data-theme={theme} className="app">
      <Navbar setTheme={setTheme} setExpand={setExpand}/>
      {expand && <Sidebar setTheme={setTheme} setExpand={setExpand}/>}
      <Home/>
      <About/>
      <Services/>
      <Gallery/>
      <Faq/>
      <Contact/>
      {visible && <button onClick={()=> window.scrollTo({top:0,behavior:"smooth"})} aria-label="Scroll to top" className="scrollUp sThemeBtn"><FaArrowUp className="arrowup" size="15"/></button>}
      <Footer/>
    </div>
  )
}

export default App
