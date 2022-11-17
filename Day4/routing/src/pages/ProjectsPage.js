import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProjectsPage(props) {
   const [projects, setProjects] = useState([])

   useEffect(()=> {
      setProjects(props.projects)
   }, [])

   return (
      <div>
         <h1>Projects</h1>
         {projects.map((project) => {
            return (
               <div key={project._id}>
                  {project.name}
                  <Link to={`/projects/${project._id}`}>See details</Link>
               </div>
            )
         })}
      </div>
   );
}

export default ProjectsPage;
