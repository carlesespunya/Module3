import {Routes, Route, Router} from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage"
import ErrorPage from "./pages/ErrorPage"
import Navbar from "./components/Navbar";
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import ProjectDetails from "./pages/ProjectDetails";
import QueryString from "./pages/QueryString";

import projectsData from "./projects-data.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
         <Route path="/" element={<HomePageWithNavigate/>} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/projects" element={<ProjectsPage projects={projectsData} />} />
         <Route path="/projects/:projectId" element={<ProjectDetails projects={projectsData} />} />
         <Route path="/query" element={<QueryString />} />
         <Route path="*" element={<ErrorPage/> } />
      </Routes>
    </div>
  );
}

export default App;
