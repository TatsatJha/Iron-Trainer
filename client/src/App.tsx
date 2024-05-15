import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
import MyPrograms from "./Pages/MyPrograms"
import Layout from "./Pages/Layout"
import Discover from './Pages/Discover'
import Progress from './Pages/Progess'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


export default function App(){
  return(
    // break up into components
    <>
    <DndProvider backend={HTML5Backend}>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout/>}>
        <Route index element={<Home />}></Route>
        <Route path="programs" element={<MyPrograms />}></Route>
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
