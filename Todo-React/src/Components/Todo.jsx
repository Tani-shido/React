import React, { useState } from 'react'

function Todo({ AddTodo, EdtTodo, DelTodo, ComplTodo}) {

    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState('');

    const handleEditStart = (index, currentText) => {
      setEditingIndex(index);
      setEditingText(currentText);
    };

    // This function is called to exit edit mode without saving
    const handleEditCancel = () => {
      setEditingIndex(null);
      setEditingText('');
    };

   const handleEditSave = (index) => {
    if (editingText.trim()) {
        EdtTodo(index, editingText);
    }
    setEditingIndex(null); // Exit edit mode
  };
    
    // This function allows saving with "Enter" or canceling with "Escape"
    const handleKeyDown = (event, index) => {
      if (event.key === 'Enter') {
        handleEditSave(index);
      } else if (event.key === 'Escape') {
        handleEditCancel();
      }
    };

  return (
    <div className='flex flex-col items-center '>
        {/* {AddTodo.map((elem, index)=>{
          return 
          <div key={ index } className={`border-b rounded m-4 p-2 flex justify-between ${elem.completed ? "opacity-80 line-through" : "bg-100-blue"}`}>
            <span><h1>{index+1}. {elem.text}</h1></span>

            <span>
              <button className='border-none rounded-lg text-white font-semibold cursor-pointer hover:bg-red-900 px-5 mx-2 bg-red-500' onClick={ ()=>DelTodo(index) }>x</button>

              <button className= 'border-none rounded-lg text-white font-semibold cursor-pointer hover:bg-slate-900 px-4 mx-2 bg-slate-600' onClick={()=>ComplTodo(index)}>✓</button>

              <button className={` border-none rounded-lg text-white font-semibold cursor-pointer hover:bg-cyan-900 px-4 mx-2 bg-cyan-500`} onClick={()=>{
                const newText = prompt("Enter Todo: ", elem);
                if(newText) EdtTodo(index, newText);
                }}>Edit
              </button>

            </span>
          </div>
        })} */}
        {AddTodo.map((elem, index) => {
        // --- THIS IS THE MISSING LINE ---
        // You must define `isEditing` inside the map for each item.
        const isEditing = index === editingIndex;

        return (
          // This is the single parent div for each todo item
          <div
            key={index}
            className={`border-b-2 rounded-md m-4 w-3xl p-2 flex justify-between items-center bg-zinc-400 ${
              elem.completed ? 'opacity-60 line-through' : ''
            }`}
          >
            {isEditing ? (
              // ---- RENDER THIS WHEN EDITING ----
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="flex-grow p-1 mr-2 text-lg bg-zinc-400 text-white rounded outline-none"
                  autoFocus
                />
                <span className="flex-shrink-0">
                  <button
                    className="border-none rounded-lg text-white font-semibold cursor-pointer hover:bg-green-700 px-4 mx-2 bg-green-500"
                    onClick={() => handleEditSave(index)}
                  >
                    Save
                  </button>
                  <button
                    className="border-none rounded-lg text-white font-semibold cursor-pointer hover:bg-slate-900 px-4 mx-2 bg-slate-600"
                    onClick={handleEditCancel}
                  >
                    Cancel
                  </button>
                </span>
              </>
            ) : (
              // ---- RENDER THIS BY DEFAULT ----
              <>
                <span className="break-all pr-2">
                  <h1>
                    {index + 1}. {elem.text}
                  </h1>
                </span>

                <span className="flex-shrink-0">
                  <button
                    className="border-none rounded-lg text-white font-semibold cursor-pointer hover:bg-red-900 px-5 mx-2 bg-red-500"
                    onClick={() => DelTodo(index)}
                  >
                    x
                  </button>

                  <button
                    className="border-none rounded-lg text-white font-semibold cursor-pointer hover:bg-slate-900 px-4 mx-2 bg-slate-600"
                    onClick={() => ComplTodo(index)}
                  >
                    ✓
                  </button>

                  <button
                    className="border-none rounded-lg text-white font-semibold cursor-pointer hover:bg-cyan-900 px-4 mx-2 bg-cyan-500"
                    onClick={() => handleEditStart(index, elem.text)}
                  >
                    Edit
                  </button>
                </span>
              </>
            )}
          </div>
        );
      })}
    </div>
  )
}

export default Todo