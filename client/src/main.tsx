import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './pages/home/Home.tsx'
import App  from './App.tsx'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Error from './pages/error/ErrorPage.tsx'
import './index.css'
import MyPrograms from './pages/my-programs/MyPrograms.tsx'
import CreateProgram from "./pages/create-program/CreateProgram.tsx"
import ViewProgram from "./pages/view-program/ViewProgram.tsx"
import Discover from './pages/discover/Discover.tsx'
import SignUp from './pages/sign-up/index.tsx'
import SignIn from './pages/sign-in/SignIn.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <div className='w-screen mx-auto'><Home></Home></div>,
  },
  { 
    path:"register",
    element: <div className='w-screen mx-auto'><SignUp></SignUp></div>
  },
  {
    path: "login",
    element: <div className='w-screen mx-auto'><SignIn></SignIn></div>
  },
  {
    path: "about",
    element: <div className='w-screen mx-auto'></div>
  },
  {
    path: "/App",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
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
