import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home"
import MyPrograms from "./Pages/MyPrograms/MyPrograms"
import Layout from "./Pages/Root"
import Discover from './Pages/Discover/Discover'
import Progress from './Pages/Progress/Progess'


export default function App(){
  return(
    // break up into components
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout/>}>
        <Route index element={<Home />}></Route>
        <Route path="my-programs" element={<MyPrograms />}></Route>
          <Route path='my-programs/create-program' element={<ProgramForm />}></Route>
          <Route path='my-programs'></Route>
        <Route path="progress" element={<Progress />}></Route>
        <Route path="discover" element={<Discover />}></Route>

      </Route>
    </Routes>
    </BrowserRouter>
{/* routing needed to dynamically display content in the future */}
      
    </>
  )
}
