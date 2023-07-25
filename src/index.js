import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Components/About/About';
import {RouterProvider, createBrowserRouter,Outlet} from "react-router-dom"
import Contact from './Components/Contact/Contact';
import Body from './Components/Body/Body';
import RestraDetail from './Components/RestraDetails/RestraDetail';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restra-detail/:id",
        element: <RestraDetail />
      },
     
    ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
