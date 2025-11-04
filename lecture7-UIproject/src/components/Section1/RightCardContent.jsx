import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'> 
      <h2 className='bg-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-2xl'>{props.id+1}</h2>
      <div>
         <p className='text-xl leading-relaxed mb-10 text-white '>
      lorem20 hdf sndksjd ndaknhd fdf sds fvvsfdg drgdt rty fsf sfwsf ferwf</p>
    

      <div className='flex justify-between'>
      <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
      <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
      </div>
      </div>
      </div>
  )
}

export default RightCardContent
