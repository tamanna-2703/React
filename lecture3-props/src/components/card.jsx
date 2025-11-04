import React from 'react'

const card = (props) => {

  console.log(props);
  return (
      <div className="card">
      <img src="https://images.unsplash.com/photo-1619286188088-de820bdc1230?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" alt="tamannaah" />
      <h1>{props.user}</h1>
      <h2>{props.age}</h2>
      {/* we can pass like that also
      <h1>{props.user},{props.age}</h1> 
      we can also pass image
      <img src={props.img} alt="image" /> */}
      <p>i am a software developer working at microsoft</p>
      <button>Follow</button>
      </div>
  )
}

export default card
