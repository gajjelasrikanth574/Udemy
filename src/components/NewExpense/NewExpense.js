import React,{useState} from "react"
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
  const NewExpense=(props)=>{
   const [isEdited,setIsEdited] =useState(false)
 const saveExpenseDataHandler=(enteredexpenedata)=>{
    const expensedata={
        ...enteredexpenedata,
        id:Math.random().toString()
    }
    // console.log(expensedata)
    props.onAddExpense(expensedata)
    setIsEdited(false)

 }
 const startEditHandler=()=>{
   setIsEdited(true)
 }
 const stopeditHandler=()=>{
   setIsEdited(false)
 }

    return <div className="new-expense "> 
   {!isEdited && <button onClick={startEditHandler}>Add new Expense</button>}
    {isEdited && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onCancel={stopeditHandler} />}

    </div>
  }

  export default NewExpense;