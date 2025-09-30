import { useRef, useState } from 'react'

import './App.css'
import { useForm } from 'react-hook-form';

function App() {

// 1st Using useRef
  const refer = useRef(null);
  const handleSubmit1 = (event)=>{
    event.preventDefault()
    console.log(refer.current.value);
  }

// 2nd Using Controlled Components
  const [val, setVal] = useState({name: " "});
  const handleChange = (event)=>{
    setVal({...val, name: event.target.value});
  }
  const handleSubmit2 = (event)=>{
    event.preventDefault();
    console.log(val);
  }

  // 3 Using react-hook-form
  const {register, handleSubmit, reset} = useForm();  
  const handleFormSubmit = data => {
    console.log(data);
    reset();
  }
  return<>
  <div>

    <div className='bg-blue-200 p-4 m-4 border'>
      <h1>Form Handling: Using useRef</h1>
      <div>
        <form action="" onSubmit={handleSubmit1}>
          <input className='border m-4' ref={refer} type="text" placeholder='Enter your name' />
          <input className='border m-4' type="submit" />
        </form>
      </div>
      <div>
        <h1></h1>
      </div>
    </div>

    <div className='bg-blue-200 p-4 m-4 border'>
      <h1>Form Handling: Using Controlled Components</h1>
      <div>
        <form action="" onSubmit={handleSubmit2}>
          <input className='border m-4' onChange={handleChange} type="text" placeholder='name' />
          <input className='border m-4' type="submit" />
        </form>
      </div>
    </div>
    
    <div className='bg-blue-200 p-4 m-4 border'>
      <h1>Form Handling: Using react-hook-form</h1>
      <div>
        <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
          <input {...register('name')} className='border m-4' type="text" placeholder='name' />
          <input className='border m-4' type="submit" />
        </form>
      </div>
    </div>

  </div>
  </>
}

export default App
