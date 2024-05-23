import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home"
import MyPrograms from "./Pages/MyPrograms/MyPrograms"
import Layout from "./Pages/Layout"
import Discover from './Pages/Discover/Discover'
import Progress from './Pages/Progress/Progess'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ProgramForm from './Components/MyPrograms/ProgramForm'


export default function App(){
  return(
    // break up into components
    <>
    <DndProvider backend={HTML5Backend}>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout/>}>
        <Route index element={<Home />}></Route>
        <Route path="my-programs" element={<MyPrograms />}>
          <Route path='create-program' element={ProgramForm}></Route>
        </Route>
        <Route path="progress" element={<Progress />}></Route>
        <Route path="discover" element={<Discover />}></Route>

      </Route>
    </Routes>
    </BrowserRouter>
    </DndProvider>
{/* routing needed to dynamically display content in the future */}
      
    </>
  )
}
