import React, {useState} from "react"

function Counter() {
   const [count, setCount] = useState(0)

   const sumHandler = () => {
      console.log("clicked")
      setCount((prevState) => {
         return prevState + 1
      })
   }

   const subHandler = () => {
      console.log("clicked")
      setCount((prevState) => {
         return prevState - 1
      })
   }

   return(
      <div>
         <h1>Counter</h1>

         <h2>{count}</h2>

         <button onClick={sumHandler}>+</button>
         <button onClick={subHandler}>-</button>
      </div>
   )
}

export default Counter
