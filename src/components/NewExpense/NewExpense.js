import React from "react"
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
  const NewExpense=(props)=>{
 const saveExpenseDataHandler=(enteredexpenedata)=>{
    const expensedata={
        ...enteredexpenedata,
        id:Math.random().toString()
    }
    // console.log(expensedata)
    props.onAddExpense(expensedata)
 }

    return <div className="new-expense "> 
    <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}/>

    </div>
  }

  export default NewExpense;