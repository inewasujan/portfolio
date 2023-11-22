import "./pages.scss";
export default function ProjectsComponent(props) {
  return (
    <div className="project-main">
      { props.data.map((item, idx) => {
        return (
        <div className="project-item" key={idx}>
          <div className="project-info" key={item.id}>
            <h3>{item.title}</h3>
            <ul className="language-used">
              <li className="language-list">HTML</li>
              <li className="language-list">CSS</li>
              <li className="language-list">JavaScript</li>
              <li className="language-list">React</li>
            </ul>
            <p>{item.info}</p>
            <div className="project-links">
              <button href={item.github} className="btn">
                View Github
              </button>
              <a href={item.project} className="btn">
                View project &#8599;
              </a>
            </div>
          </div>
          <div className="image-container">
            <img src={item.image} alt="musiclib" />
          </div>
        </div>
      )}
      )}
    </div>
  );
}
