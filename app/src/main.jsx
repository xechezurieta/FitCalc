import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
)
