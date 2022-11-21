import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const API_ENDPOINT = "http://localhost:5005/api/projects"

function ProjectsList() {
   const [projects, setProjects] = useState([])

   useEffect(() => {

      const apiCall = async () => {
         try {
            const res = await axios.get(API_ENDPOINT)

            setProjects(res.data)
         } catch (error) {
            console.log(error)
         }
      }
      apiCall()
   }, [])

   return(
      <div>
         <h1>Home Page</h1>
         {projects.map((project) => {
            return (
               <div key={project._id}>
                  <Link to={`/projects/${project._id}`}>
                     {project.title}
                  </Link>
               </div>
            )
         })}
         <Link to="/projects/create">Create New Project</Link>
      </div>
   )
}

export default ProjectsList
