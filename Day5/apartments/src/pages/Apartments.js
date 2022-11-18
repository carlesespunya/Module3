import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiEndpoint = "https://ironbnb-m3.herokuapp.com/apartments"

function Apartments() {
   const [apartments, setApartments] = useState([])

   useEffect(() => {
      const apiCall = async () => {
         const res = await axios.get(apiEndpoint)
         setApartments(res.data)
      }

      apiCall()
   }, [])

   return (
      <div>
         <h1>Apartments</h1>
         <ul>
            {apartments.map((apartment) => {
               return (
                  <li key={apartment._id}>
                     {apartment.title} -- {apartment.pricePerDay} € /
                       <Link to={`/apartments/${apartment._id}`}>See more</Link>
                  </li>
               )
            })}
         </ul>
         <Link to="/apartments/create">New Apartment</Link>
      </div>
   )
}

export default Apartments
