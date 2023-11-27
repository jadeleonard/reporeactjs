import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dashboard from './dashboard/dashboard'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/dashboard',
    element:<Dashboard />
  }
])
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClerkProvider publishableKey={clerkPubKey}>
      <RouterProvider router={router} />
  </ClerkProvider>
);

