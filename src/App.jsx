import './App.css'
import Todo from './components/Todo'
// import NavScrollExample from './components/navbar'
// import IndividualIntervalsExample from './components/slide' 
// import Buttons from './components/Button'
// import Dashboard from './pages/dashboard'
// import Anything from './components/Anything'
// import { useState } from 'react'



function App() {
  // const [count,setCount] = useState(0)
  
  
  // const myName= "Shehzad"
  //  const car = (c) => {
  //   console.log("car names",c)
  //  }
  //  const students = [
  //   {
  //     name: "shehzad",
  //     city: "lahore",
  //     age: 16
  //    }, 
  //    {
  //     name: "ismail",
  //     city: "karachi",
  //     age: 17
  //    },
  //    {
  //     name: "sameer",
  //     city: "islamabad",
  //     age: 18
  //    }
  //  ]

  return(
    <div>
      {/* <NavScrollExample/> */}
      {/* <Counter/> */}
      {/* <IndividualIntervalsExample/> */}
      {/* <Dashboard/> */}
      {/* <SelectActionCard/> */}
      {/* <Buttons/> */}

      {/* <div className='shehzad3'>
    
        <h1>Count {count}</h1>
        </div>
        <div className='buttons'>
      <button onClick={()=> setCount(count + 1 )} >
        increment
      </button>
      <button onClick={()=> setCount( 0 )}>
        reset 
      </button>
      <button onClick={()=> setCount(count - 1 )} disabled={count==0}>
        dicrement
      </button>
    </div> */}
    <Todo/>    
    </div>
  )

}

export default App
