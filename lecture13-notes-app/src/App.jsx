import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
 

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([]) // to store title and details on add note i.e array

  const submitHandler =(e)=>{
    e.preventDefault()
    // console.log(title,details);
    const copyTask=[...task];
    copyTask.push({title, details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote =(idx)=>{
    const copyTask = [...task];
   
    copyTask.splice(idx,1)
    setTask(copyTask)
  }


  return (
    <div className='h-screen lg:flex bg-black text-white p-10'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
{/*  
      phla input */}
        <input
         type="text"
        placeholder='Enter Notes heading'
         className='px-5  py-2 font-medium flex item-start flex-row w-full border-2 rounded outline-none'
          value = {title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}

          />

         {/* detailed input  */}
        <textarea
        type="text"
        className='px-5 h-32 w-full py-2 font-medium border-2 rounded flex-row outline-none'
        placeholder='write Details'
        value={details}
        onChange={(e)=>{
         setDetails(e.target.value)
        }}

        />
      <button className='bg-white font-medium outline-none px-5 py-2 h-10 w-full gap-1 active:scale-95 text-black rounded'>Add Note</button>
      </form>
       <div className='flex lg:w-1/2 lg:border-l-2 bg-gray-900 p-10'>
         <h1 className='text-xl font-bold'>Recent Notes </h1>
         <div className='flex gap-5 flex-wrap mt-5 overflow-auto h-[90%]'>
        {task.map(function(elem, idx){

          return <div key={idx} className=' flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black pt-9 pb-4 px-4 bg-white'>
          <div>
          <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
          <p className='mt-3 leading-tight text-sm font-medium text-gray-500'>{elem.details}</p>
          </div>
          <button onClick={()=>{
            deleteNote(idx)
          }} 
          className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
         </div>
        })}
  
        </div>
      </div>
    </div>
  )
}

export default App
