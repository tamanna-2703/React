import React from 'react'
import Section1 from './components/Section1/Section1'


const App = () => {
  const users =[
    { 
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
      intro: '',
      tag: 'Satisfied'
    } ,
    { 
      img:"https://plus.unsplash.com/premium_photo-1661284852147-c2454d4c1ec7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3N3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      intro:'',
      tag:'Underserved'
    },
    { 
      img:"https://images.unsplash.com/photo-1573166953836-06864dc70a21?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
      intro:'',
      tag:'UnderBanked'
    },
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
      intro: '',
      tag: 'Satisfied'
    }
  ];
  return (
    <div>
      <Section1 users={users}/>
    
    </div>
  )
}

export default App
