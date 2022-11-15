import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  const addHandler = () => {
    setCount(count + 1)
  }

  const subHandler = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={addHandler}>+</button>
      <button onClick={subHandler}>-</button>
    </div>
  )
}

export default Counter
