import ProjectsComponent from "../components/ProjectsComponent"
export default function Projects() {
    const data = [
        {
            "id": "1",        
            "title": "Music Library",
            "info": "This project aims to recreate the sleek and intuitive design of Apple's music platform while leveraging the power of React components for a dynamic and responsive user experience. ",
            "github": "https://github.com/inewasujan/musiclib",
            "project": "https://singular-crisp-cd5e90.netlify.app/",
        },
        {
            "id": "2",        
            "title": "Travel Journal",
            "info": "Capture and share your travel adventures with this intuitive travel journal app. Utilizing React components, the app provides a dynamic and responsive user experience, allowing users to document their journeys, add photos, and share their favorite travel moments.",
            "github": "https://github.com/inewasujan/mtj",
            "project": "https://glistening-marigold-215da2.netlify.app/",
        },
        {
            "id": "3",
            "title": "Weather App",
            "info": "Stay informed about the weather with this interactive weather app. Built using React, the app allows users to check the current weather, view forecasts, and get details like temperature, humidity, and wind speed. It provides a user-friendly interface for a seamless weather tracking experience.",
            "project": "#",
        },
    ]
    return (
        <div className="project">
            <ProjectsComponent data={data}/>            
        </div>
    )
}