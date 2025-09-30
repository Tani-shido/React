import { useState } from 'react';
import './App.css'
import Form from './Components/Form'
import Todo from './Components/Todo'

function App() {
      const [val, setVal] = useState([]);

        const addArray = (newText) => {
          const newArray = {
            text: newText,
            completed: false
          }
        setVal([...val, newArray]);

      }

      const deleteArray = (index) =>{
        const newArray = val.filter((item, i)=> i != index)
        setVal(newArray);
      }

      const editArray = (index, newText) => {
          const newArray = val.map((item, i)=>{
            if(i === index){
              return {...item, text: newText};
            }else{
              return item;
            }
          });
          setVal(newArray);
      }

      const completeTodo = (index)  =>{
        setVal(val.map((item, i) => {
          if (i === index) {
              return { ...item, completed: !item.completed };
          }
          return item;
        }));
      }
      console.log("Console val: ", val);
  return (
    <>
      <div className='w-full h-screen bg-zinc-600 flex flex-col items-center '>
        <div className='w-full md:w-3xl xl:w-7xl md:m-32 h-full md:h-180 p-4 rounded mx-auto bg-zinc-500 shadow-lg text-xl'>
          <div className='m-4 p-4 text-center rounded bg-zinc-600 hover:bg-zinc-700 transition-all duration-500 ease-out'>
            <h1 className="text-4xl font-bold text-white">A Page To-do</h1>
          </div>
          <div className='border rounded m-4 p-4 '>
            <div>
              <Form onAddTodo={ addArray }/>
            </div>
            <div>
              <Todo AddTodo={ val } EdtTodo={ editArray } DelTodo={ deleteArray } ComplTodo={ completeTodo }/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App