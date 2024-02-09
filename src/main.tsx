import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from "./routes/root";
const root: HTMLElement = document.getElementById("root")!;


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //errorElement: <Page404 />,
    children: [
      {
      
      },
    ],
  },
]);

ReactDOM.createRoot(root).render( 
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);