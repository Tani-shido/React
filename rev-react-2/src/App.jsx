import './App.css'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

function App() {

  const mainData = [
    {image:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",songName:"Eye for an eye",artist:"Tanishq", added: false },
    {image:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?_gl=1*svfycf*_ga*MjUyMjQ2OTcuMTc1ODYzMjA0Mw..*_ga_8JE65Q40S6*czE3NTg2MzIwNDIkbzEkZzAkdDE3NTg2MzIwNDIkajYwJGwwJGgw",songName:"Hare Krishna",artist:"Krishna", added: false },
    {image:"https://i.pinimg.com/736x/2d/95/e5/2d95e5886fc4c65a6778b5fee94a7d59.jpg",songName:"Feather",artist:"Rahul", added: false },
    {image:"https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",songName:"Bule Bird",artist:"Rahul", added: false }
  ]
  const [data, setData] = useState(mainData);

  const handleClick = (index)=> {
    setData((prev)=>{
      return prev.map((item, itemIndex)=>{
        if(itemIndex === index) return {...item, added: !item.added}
        return item;
      })
    })
  }

  return <>
  <div className='w-full h-screen bg-blue-200'>
    <Navbar navData={data}/>
    <div className='w-full h-screen p-4 mt-20 flex gap-10 flex-wrap'>
      {data.map((obj, index)=>(
       <Card data={obj} handleClick={handleClick} key={index} index={index}/>
      ))}
    </div>
  </div>
  </>
  
}

export default App
