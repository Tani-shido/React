import React from 'react'

function Button() {

    const [val, setVal] = useState(true);

  return (
    <div className='p-4'>
      <h1>Your Value: {val.toString()}</h1>
      <button onClick={()=>setVal(!val)} className={`text-xl text-white px-4 py-2 ${val ? "bg-blue-500" : "bg-red-500"} rounded-full `}>{val.toString()}</button>
    </div>
  )
}

export default Button