import React, {useState} from "react"

const projectsData = [
  { _id: '127fae', name: 'EatBCN', techStack: 'React, Express, MongoDB' },
  { _id: '985afw', name: 'TravelLite', techStack: 'React, Express, Redux' },
  { _id: '347eef', name: 'IronClub', techStack: 'Express, HBS, MongoDB' },
  { _id: '90af21', name: 'ChatApp', techStack: 'React, Express, SocketIO' }
];

// const projectP = projects.map((project) => {
//   return(
//     <p>{project.name}</p>
//   )
// })

function Projects() {
  // Use state
  const [projects, setProjects] = useState(projectsData)

  const deleteProject = (projectId) => {
    const newArray = projects.filter(project => {
      return project._id !== projectId
    })

    setProjects(newArray)
  }

  return (
    <div>
      <h1>Projects</h1>

      {projects.map((project) => {
        return (
          <div key={project._id}>
            <p><strong>{project.name}</strong></p>
            <p>{project.techStack}</p>
            <button onClick={() => deleteProject(project._id)}>Delete</button>
          </div>
        )
      })}

    </div>
  )
}

export default Projects
