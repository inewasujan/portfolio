export default function Navigation({ onToggleTheme, isDarkMode }) {   
    return (
        <div className={`nav-bar ${isDarkMode ? 'light-mode' : 'dark-mode'}`}>
            <div className="nav-bar-logo">
                <a href= "#logo">Sam</a>
            </div>
            <div className="nav-bar-links">
                <a href= "#home">Home</a>
                <a href= "#about">About</a>
                <a href= "#projects">Projects</a>
                <a href= "#contact">Contact</a>  
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