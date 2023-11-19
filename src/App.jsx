import {useState} from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Navigation from './components/Navigation.jsx'
// import About from './pages/About.jsx'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false) 

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode)
  };

  return (
    <>
    <div className={`my-app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navigation onToggleTheme={toggleTheme} isDarkMode={isDarkMode}/>  
      <Home />
      {/* <About /> */}
    </div>
    </>
  )
}

export default App
