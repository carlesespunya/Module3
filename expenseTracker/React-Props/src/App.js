import './App.css';
import Expenses from './components/Expenses/Expenses';
import Counter from "./components/counter"
import Projects from "./components/Projects";
import NewExpense from './components/NewExpenses/NewExpense';

import React, {useState} from "react"

const expensesArray = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(expensesArray)

  const expenseDataHandler = (expenseData) => {
    console.log(expenseData)
    setExpenses((prevState) => {
      return [...prevState, expenseData]
    })

  }

  return (
    <div className="App">
      <NewExpense onExpenseData={expenseDataHandler} ></NewExpense>
      <Expenses expenses={expenses} />
      {/* < Counter />
      <Projects /> */}
    </div>
  );
}

export default App;
