import React, { useState, useEffect } from "react"

function Counter2() {
   const [count, setCount] = useState(0)

   useEffect(() => {
      // function we want to call
      console.log("Mounting component")

      const countInt =setInterval(() => {
         setCount((prevState)=> {
            return prevState + 1
         })
      }, 1000);


      return () => {
         console.log("component dismounted")
         clearInterval(countInt)
      }

   }, []);

   useEffect(() => {
      console.log("count updated")
   }, [count])

   return (
      <div>
         <h1>Counter</h1>
         <h2>{count}</h2>
      </div>
   )
}

export default Counter2
