import ProjectsComponent from "../components/ProjectsComponent"
export default function Projects() {
    const data = [
        {
            "id": "1",        
            "title": "Music Library",
            "info": "This project aims to recreate the sleek and intuitive design of Apple's music platform while leveraging the power of React components for a dynamic and responsive user experience. ",
            "github": "#",
            "project": "#",
            "image": "./musiclib.jpg",
        },
        {
            "id": "2",        
            "title": "Shopping Cart",
            "info": "This project aims to recreate the sleek and intuitive design of Apple's music platform while leveraging the power of React components for a dynamic and responsive user experience. ",
            "github": "#",
            "project": "#",
            "image": "./musiclib.jpg",
        },
        {
            "id": "3",
            "title": "Weather App",
            "info": "This project aims to recreate the sleek and intuitive design of Apple's music platform while leveraging the power of React components for a dynamic and responsive user experience. ",
            "github": "#",
            "project": "#",
            "image": "./Untitled.png",
        },
    ]
    return (
        <div className="project">
            <ProjectsComponent data={data}/>            
        </div>
    )
}