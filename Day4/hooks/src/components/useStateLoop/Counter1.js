import React, { useState } from "react"

function Counter1() {
   const [count, setCount] = useState(0)

   setInterval(() => {
      setCount(count + 1)
   }, 1000);

   return (
      <div>
         <h1>Counter</h1>
         <h2>{count}</h2>
      </div>
   )
}

export default Counter1
