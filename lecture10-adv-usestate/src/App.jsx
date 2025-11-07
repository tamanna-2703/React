import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:'tamanna',age:21})

  const btnClicked=()=>{
    const newNum ={...num};
    newNum.user='ridhi'
    newNum.age=24
    setNum(newNum)

    // setNum(prev=>({...prev,age:50}))
  }
  return (
    <div>
    <h1>{num.user}, {num.age}</h1>
    <button onClick={btnClicked}>click</button>
      
    </div>
  )
}

export default App
