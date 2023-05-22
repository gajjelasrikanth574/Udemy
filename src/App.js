// import ExpenseItem from './components/ExpenseItem'
import React,{useState} from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
const Dummy_Expenses=[
{
  id:"e1",
  title:"ToiletPaper",
  amount:94.12,
  date:new Date(2020, 7 ,14)
},{
  id:"e2",
  title:"New Tv",
  amount:94.12,
  date:new Date(2021,2, 12)

},
{
id:"e3",
title:"car",
amount:937.34,
date:new Date(2022, 3 ,25)
},
{
id:"e4",
title:"New Desk",
amount:93.34,
date:new Date(2023, 6 ,25)

},
]
export default function App(){
  
  const [expenses,setExpenses] = useState(Dummy_Expenses)
  
 const addExpenseHandler=(expense)=>{
 setExpenses((prevExpenses)=>{
  return [expense, ...prevExpenses]
 })
 }
  return(<>
  <NewExpense onAddExpense={addExpenseHandler} />
  <Expenses items={expenses}/>

 
  
  </>)
}