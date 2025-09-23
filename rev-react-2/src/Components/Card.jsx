import React from 'react'

function Card({data, handleClick, index}) {
    const {image, songName, artist, added} = data;
    
  return <>
    <div className='w-72 h-36 border p-4 pb-8 bg-blue-100 rounded-md flex gap-4 relative'>
      <div className='w-24 h-24 rounded-md bg-blue-400 overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt="Song JPG" />
      </div>
      <div>
        <h1 className='text-xl font-semibold'>{songName}</h1>
        <h1 className='text-sm'>{artist}</h1>
      </div>
      <button onClick={()=>handleClick(index)} className={`${added === true ? "bg-sky-700" : "bg-zinc-700"} p-4 px-6 rounded-full text-xs text-white font-medium whitespace-nowrap absolute bottom-0 translate-y-[50%] left-1/2 -translate-x-[50%]`}>
        {added === true ? "Added" : "Add to favourites"}
      </button>
    </div>
  </>
}

export default Card