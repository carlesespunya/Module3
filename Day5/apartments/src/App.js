import './App.css';
import { Routes, Route } from "react-router-dom";
import Apartments from './pages/Apartments';
import ApartmentDetails from './pages/ApartmentDetails';
import CreateApartment from './pages/CreateApartment';

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Apartments />}/>
            <Route path="/apartments/:apartmentId" element={<ApartmentDetails />} />
            <Route path="/apartments/create" element={<CreateApartment></CreateApartment>} />
         </Routes>
      </div>
   );
}

export default App;
