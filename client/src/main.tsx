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
import ErrorPage from './pages/error-page/ErrorPage.tsx'
import './index.css'
import MyPrograms from './pages/my-programs/MyPrograms.tsx'
import CreateProgram from "./pages/create-program/CreateProgram.tsx"
import ViewProgram from "./pages/view-program/ViewProgram.tsx"
import Discover from './pages/discover/Discover.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SignUp from './pages/sign-up/index.tsx'


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
      { 
        path:"register",
        element: <SignUp></SignUp>
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
