import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/router';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <div className="md:max-w-screen-2xl mx-auto">
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
   
  </React.StrictMode>,
)
