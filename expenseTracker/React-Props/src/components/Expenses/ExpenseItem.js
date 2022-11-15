import React, { useState } from "react"

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
  let { date, title, amount} = props

  const [currentTitle, setTitle] = useState(title)

  const clickHandler = () => {
    setTitle("Updated")
    console.log(title)
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{currentTitle}</h2>
        <div className="expense-item__price">{amount}€</div>
      </div>
      <button onClick={clickHandler}>Update title</button>
    </div>
  )
}

export default ExpenseItem;
