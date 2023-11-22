import {Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import Navigation from './components/Navigation.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx' 
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false) 

  const toggleTheme = () => {
    // setIsDarkMode((prevMode) => !prevMode)
    setIsDarkMode(!isDarkMode)
  };

  return (
    <>
    <div className={`my-app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navigation onToggleTheme={toggleTheme} isDarkMode={isDarkMode}/>  
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
