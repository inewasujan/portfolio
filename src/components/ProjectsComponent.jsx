import "./project.scss";
export default function ProjectsComponent(props) {
      if (!props.data || !Array.isArray(props.data)) {
      return <div>No data available</div>;
      }
    return (
    <div className="project-main">
      {props.data.map((item, idx) => {
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
              <a href={item.github} className="btn">
                View Github
              </a>
              <a href={item.project}>
                View project &#8599;
              </a>
            </div>
          </div>
          {/* <div className="image-container">
            <img src={item.image} alt="musiclib" />
          </div> */}
        </div>
      )}
      )}
    </div>
  );
}
