import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card"

function Expenses(props) {
  const expenses = props.expenses

  let expensesContent = <h1>No expenses</h1>

  if (expenses.length > 0) {
    expensesContent = expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <Card className="expenses">
      {/* {expenses.length === 0 && <h1>No expenses</h1>}
      {expenses.length !== 0 && expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)
      )} */}


      {/* Ternary Operator */}
      {/* {expenses.length === 0 ? <h1>No expenses</h1> : expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)
      )} */}


      {expensesContent}
    </Card>
  )
}

export default Expenses;
