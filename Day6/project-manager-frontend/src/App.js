
import './App.css';
import { Routes, Route } from "react-router-dom";
import ProjectsList from './pages/ProjectsList';
import Navbar from './components/Navbar';
import ProjectDetails from './pages/ProjectDetails';
import ProjectCreate from './pages/ProjectCreate';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
         <Route path="/" element={<ProjectsList />} ></Route>
         <Route path="/projects/:projectId" element={<ProjectDetails />} ></Route>
         <Route path="/projects/create" element={<ProjectCreate />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
