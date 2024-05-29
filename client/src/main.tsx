import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './Pages/Home/Home.tsx'
import App  from './App.tsx'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ErrorPage from './Pages/ErrorPage/ErrorPage.tsx'
import './index.css'
import MyPrograms from './Pages/MyPrograms/MyPrograms.tsx'
import CreateProgram from "./Pages/CreateProgram/CreateProgram.tsx"
import ViewProgram from "./Pages/ViewProgram/ViewProgram.tsx"
import Discover from './Pages/Discover/Discover.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"",
        element: <Home></Home>
      },
      {
        path:"my-programs",
        element: <MyPrograms></MyPrograms>,
      },
      {
        path: "create-program",
        element: <CreateProgram></CreateProgram>
      },
      {
        path:"discover",
        element: <Discover></Discover>
      },
      {
        path:"my-programs/:programId",
        element: <ViewProgram ></ViewProgram>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router}></RouterProvider>
    </DndProvider>
  </React.StrictMode>,
)
