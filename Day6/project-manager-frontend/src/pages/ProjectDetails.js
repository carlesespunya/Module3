import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_ENDPOINT = "http://localhost:5005/api/projects/"

function ProjectDetails() {
   const [project, setProject] = useState({})

   const { projectId  } = useParams()

   useEffect(() => {
      const apiCall = async () => {
         try {
            const res = await axios.get(API_ENDPOINT + projectId)
            setProject(res.data)
            console.log(res.data)
         } catch (error) {
            console.log(error)
         }
      }

      apiCall()
   }, [projectId])

   return (
      <div>
         <h1>Project Details</h1>
         <h4>{project.title}</h4>
         <p>{project.description}</p>
      </div>
   )
}

export default ProjectDetails
