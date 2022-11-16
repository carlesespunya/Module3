import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {

  const saveExpenseHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString()
    }
    console.log(expenseData)

    props.onExpenseData(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={saveExpenseHandler} ></ExpenseForm>
    </div>
  )
}

export default NewExpense
