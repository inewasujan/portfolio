
export default function Home() {
    return (
        <>
        <div className="home-main-container">
            <div className="home-sub">                
            <p className="profile-info">Hello there!👋 </p>
            <p className= "name-tag">I am <a className= "name">Samuel</a></p>
            <p className="profile-info">
                A passionate front-end web developer
                with a love for creating engaging and user-friendly
                digital experiences. Welcome to my corner of the web,
                where  I bring ideas to life with code and design.
            </p>
            <div className="social-links">
                <a href="#github"><img className="social-links-img" src="./icons/github.svg" alt="github" /></a>
                <a href="#instagram"><img className="social-links-ig" src="./icons/instagram.svg" alt="instagram" /></a>
                <a href="#facebook"><img className="social-links-img" src="./icons/facebook.svg" alt="facebook" /></a>
                <a href="#linkedin"><img className="social-links-img" src="./icons/linkedin.svg" alt="linkedin" /></a>
                <a href="#twitter"><img className="social-links-img" src="./icons/twitter.svg" alt="twitter" /></a>
            </div>
            </div>
            <img className="profile-img" src ="./profile.jpg" alt="profile-image" />
        </div>            
        </>
    )
}