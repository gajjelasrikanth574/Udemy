import ExpenseItem from './components/ExpenseItem.js'
export default function App(){
  const expenses=[{
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
},{
  id:"e4",
  title:"New Desk",
  amount:93.34,
  date:new Date(2023, 6 ,25)

}]
  return(<>
  <h1>welcome to react</h1>
  <ExpenseItem title={expenses[0].title } amount={expenses[0].amount} date={expenses[0].date}/>
  <ExpenseItem title={expenses[1].title } amount={expenses[1].amount} date={expenses[1].date}/>
  <ExpenseItem title={expenses[2].title } amount={expenses[2].amount} date={expenses[2].date}/>
  <ExpenseItem title={expenses[3].title } amount={expenses[3].amount} date={expenses[3].date}/>
  
  </>)
}