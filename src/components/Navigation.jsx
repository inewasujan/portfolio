import {Link,} from 'react-router-dom';

export default function Navigation({ onToggleTheme, isDarkMode }) {   
    return (
        <div className={`nav-bar ${isDarkMode ? 'light-mode' : 'dark-mode'}`}>
            <div className="nav-bar-logo">
            <Link to="/">Sujan.</Link>
            </div>
                <div className="nav-bar-links">                
                    <Link to="./about">About</Link>
                    <Link to="./projects">Projects</Link>
                    <Link to="./contact">Contact</Link>
                </div>
            <div className="feature-night" onClick={onToggleTheme}>
                <a href="#moon">
                <img
                        className="moon"
                        src={isDarkMode ? './icons/moon-stars.svg' : './icons/sun-filled.svg'}
                        alt=""
                    />
                </a>
            </div>  
        </div>
    );
}