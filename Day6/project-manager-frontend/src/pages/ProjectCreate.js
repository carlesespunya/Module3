import { useState } from "react";
import axios from "axios";

function ProjectCreate() {
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")


   const API_ENDPOINT = "http://localhost:5005/api/projects"

   const submitHandler = async (event) => {
      event.preventDefault()


      const newProject = {
         title: title,
         description: description
      }

      try {
         await axios.post(API_ENDPOINT, newProject)
         setTitle("")
         setDescription("")
      } catch (error) {
         console.log(error)
      }

   }

   return (
      <div>
         <h1>New Project</h1>
         <form onSubmit={submitHandler} >
            <label>Title:</label>
            <input
               type="text"
               name="title"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />

            <label>Description:</label>
            <textarea
               type="text"
               name="description"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">Submit</button>
         </form>
      </div>
   )
}

export default ProjectCreate
