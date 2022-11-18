import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiEndpoint = "https://ironbnb-m3.herokuapp.com/apartments"

function CreateApartment() {
   const [title, setTitle] = useState("")
   const [img, setImg] = useState("")
   const [price, setPrice] = useState("")

   const navigate = useNavigate()

   const titleHandler = (event) => {
      setTitle(event.target.value)
   }
   const imgHandler = (event) => {
      setImg(event.target.value)
   }

   const submitHandler = (event) => {
      event.preventDefault()

      const newApartment =  {
         title: title,
         img: img,
         pricePerDay: price,
      }

      const postApi = async () => {
         try {
            const res = await axios.post(apiEndpoint, newApartment)
            console.log(res)
            navigate("/")
         } catch (error) {
            console.log(error)
         }
      }

      postApi()

      setTitle("")
      setPrice(0)
      setImg("")
   }



   return (
      <div>
         <h1>New apartment</h1>
         <form onSubmit={submitHandler}>
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={titleHandler} />
            <br></br>

            <label>Price per Day</label>
            <input type="number" name="pricePerDay" value={price}  onChange={(event) => setPrice(event.target.value)} />
            <br></br>

            <label>Image</label>
            <input type="text" name="img" value={img} onChange={imgHandler} />
            <br></br>

            <button type="submit">Create</button>
         </form>
      </div>
   )
}

export default CreateApartment
