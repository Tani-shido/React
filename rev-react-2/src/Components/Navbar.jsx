import React from 'react'

function Navbar({navData}) {
  return <>
      <div className='flex justify-between p-4 px-12 bg-blue-300'>
      <h1 className='text-2xl font-semibold '>Bookmark~Saver</h1>
      <div className='p-2 flex gap-4 rounded bg-zinc-600 text-white'>
        <h1 className='text-lg font-semibold'>Bookmarks</h1>
        <h1 className='font-medium text-xl'>{navData.filter(item => item.added).length}</h1>
      </div>
    </div>
  </>
}

export default Navbar