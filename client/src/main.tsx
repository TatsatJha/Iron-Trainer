import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom"
import Home from './pages/home/Home.tsx'
import App  from './App.tsx'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Error from './pages/error'
import './index.css'
import MyPrograms from './pages/my-programs'
import CreateProgram from "./pages/create-program"
import ViewProgram from "./pages/view-program"
import Discover from './pages/discover'
import Auth from './pages/auth'
import SignIn from './pages/sign-in'
import Chat from './pages/chat'
import Checkout from './pages/checkout/Checkout.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <div className='w-screen mx-auto'><Home></Home></div>,
  },
  { 
    path:"auth",
    element: <div className='w-screen mx-auto'><Auth></Auth></div>
  },
  {
    path: "about",
    element: <div className='w-screen mx-auto'></div>
  },
  {
    path: "checkout",
    element: <Checkout></Checkout>
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
      {
        path:"chat",
        element: <Chat></Chat>
      }
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
