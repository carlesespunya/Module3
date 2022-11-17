import { useParams } from "react-router-dom";

function ProjectDetails(props) {
   const projects = props.projects
   const { projectId } = useParams()

   const selectedProject = projects.find((project)=> {
      return project._id === projectId
   })


   return (
      <div>
         Details page
         <h2> Project with Id:{projectId}</h2>
         {selectedProject.name}
      </div>
   )
}

export default ProjectDetails
