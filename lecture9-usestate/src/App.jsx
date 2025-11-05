import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(2)

  function increaseNum(){
    setNum(num+1)

  }
  function decreaseNum(){
    setNum(num-1)

  }
  function Jump(){
    setNum(num+5)
  }
  function drop(){
    setNum(num-2)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Incresed</button>
      <button onClick={decreaseNum}>Decreased</button>
      <button onClick={Jump}>Jump by 5</button>
      <button onClick={drop}>Decreased by 2</button>
    </div>
  )
}

export default App
