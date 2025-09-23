import React from 'react'

export function Card({image, riverName, description, Size, isVisited}) {


  return <>
      <div className='w-sm h-100 bg-blue-100 rounded-xl overflow-hidden'>
        <div className='w-full h-48'>
          <img className='w-full h-full object-cover' src={image} alt="River Images" />
        </div>
        <div className='w-full h-32 p-4 py-4'>
          <h1 className='text-xl pb-4 font-semibold'>{riverName}</h1>
          <p className='text-sm'>{description}</p>
        </div>
        <div className='h-20 p-4 flex justify-center items-end'>
          <span className= {`text-sm mx-4 border rounded-full w-32 p-2 ${Size>1500 ? "bg-blue-400" : "bg-green-200"} `}>
                {Size>1500 ? "Above 1.5k KMs" : "Below 1.5k KMs"}
          </span>
          <button className={`text-sm mx-4 border rounded-full w-32 p-2 ${isVisited ? "bg-blue-400" : "bg-green-200"}`}>
            {isVisited ? "Visited" : "Not Visited"}
          </button>
        </div> 
      </div>

  </>
}


export default Card

