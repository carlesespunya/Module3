import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


const apiEndpoint = "https://ironbnb-m3.herokuapp.com/apartments/"

function ApartmentDetails() {
   const { apartmentId } = useParams()
   const [apartment, setApartment] = useState({})

   useEffect(() =>{
      const apiCall = async () => {
         const res = await axios.get((apiEndpoint + apartmentId))
         setApartment(res.data)
      }

      apiCall()
   }, [])


   return (
      <div>
         <h1>Apartment Details</h1>
         {apartment.title}
         {apartment.pricePerDay}
      </div>
   )
}

export default ApartmentDetails
