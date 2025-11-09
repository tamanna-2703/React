import React from 'react'

const App = () => {

  const user ={
    username:'Tamannaah',
    age:21,
    city:'nilokheri'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera= JSON.parse(localStorage.getItem('user'))

  console.log(usera);

  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem('age')

  // console.log(user, age);

  // to set items in thee local storgeee
  // localStorage.setItem('user',"tamannaah")
  // localStorage.setItem('age',"21")
  return (
    <div>
      appp
    </div>
  )
}

export default App
