import React, { useState, useEffect } from "react"
import axios from "axios"

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";


const ApartmentsList = () => {
   const [apartments, setApartments] = useState([])

   useEffect(() => {
      const apiCAll = async () => {
         const res = await axios.get(apiURL)
         console.log(res.data)
         setApartments(res.data)
      }

      apiCAll()
   }, [])

   return (
      <div>
         <h1>List of apartments</h1>
         {apartments.map((apt) => {
            return (<div key={apt._id} className="card">
               <img src={apt.img} alt="apartment" />
               <h3>{apt.title}</h3>
               <p>Price: {apt.pricePerDay}</p>
            </div>)
         })}
      </div>
   )
}

export default ApartmentsList
