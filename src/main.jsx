import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <div className="md:max-w-screen-2xl mx-auto">
    <RouterProvider router={router} />
    </div>
    </AuthProvider>
    </HelmetProvider>
   
  </React.StrictMode>,
)
