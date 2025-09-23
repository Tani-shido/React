
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return <div>
    <BrowserRouter>
    <Link to={"/"}>Allen</Link>
    |
    <Link to={"/home/neet/coaching-class-11"}>Class11</Link>
    |
    <Link to={"/home/neet/coaching-class-12"}>Class12</Link>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/home/neet/coaching-class-11" element={<Class11 />} />
        <Route path="/home/neet/coaching-class-12" element={<Class12 />} />
      </Routes>
    </BrowserRouter>
  </div>
}


function Home() {
  return<div>
    Wellcome to Allen
  </div>
}

function Class11() {
  return<div>
    Class-11 Page
  </div>
}

function Class12() {
  return<div>
    Class-12 Page
  </div>
}

function ErrorPage() {
  return <div>
    Sorry Page not found
  </div>
}
export default App
