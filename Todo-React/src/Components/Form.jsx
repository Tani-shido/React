import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'


function Form({ onAddTodo }) {
    const {register, handleSubmit, reset} = useForm();

    const handleFormSubmit = (data) => {

        console.log("Console: ", data.text);

        onAddTodo(data.text);

        reset();
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit(handleFormSubmit) } className='flex justify-center items-center'>
            <input {...register("text")} className='border rounded m-2 p-2 w-xl outline-none' type="text" placeholder='Enter your Todo' />
            <input className='border-none rounded-2xl m-2 p-2 px-4 bg-slate-600 text-white font-semibold cursor-pointer hover:bg-slate-800 transition-all ease-out' type='submit'></input>
        </form>
        
    </div>
  )
}

export default Form