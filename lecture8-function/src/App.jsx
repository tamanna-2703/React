import React from 'react'

const App = () => {

  const pageScrolling=()=>{
    console.log('page scolling...');
  }
  return (
    <div>
      <input onChange={function(elem){
        console.log(elem.target.value);
      }}
      typr="text" placeholder='enter name'/>
    </div>
  )
}

export default App
