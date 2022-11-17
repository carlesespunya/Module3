import React, {useState} from "react"
import './App.css';
import Counter from './components/useState/Counter';
import Counter1 from './components/useStateLoop/Counter1';
import Counter2 from './components/useEffect/Counter2';
import ApartmentsList from "./components/apartmentsList";

function App() {
   const [show, setShow] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setShow(!show) }>
         {show ? "Hide": "Show"}
      </button>

      {/* <Counter /> */}
      {/* <Counter1 /> */}
      {/* {show && <Counter2 />} */}

      <ApartmentsList></ApartmentsList>
    </div>
  );
}

export default App;
