import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react';
import Hero from './components/Hero.jsx';
import FoodDetail from './pages/FoodDetail.jsx';
import Contact from './pages/Contact.jsx';
import CreateFood from './pages/CreateFood.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import EditFood from './pages/EditFood.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/register', element: <Register /> },



   { path: '/home', element: <App />,
    children: [
      { path: '/home', element: <Hero />, }
    ]
   },

   { path: '/', element: <App />,
    children: [
      { path: '/contact', element: <Contact />, }
    ]
   },



  { path: '/category-page', element: <App />,
    children: [
      { path: '/category-page/:category', element: <CategoryPage />, }
    ]
   },


  
   { path: '/category', element: <App />,
    children: [
      { path: '/category/foods/:cate/:id', element: <FoodDetail />, }
    ]
   },

  


  
   { path: '/meal', element: <App />,
    children: [
      { path: '/meal/create', element: <CreateFood />, }
    ]
   },

   { path: '/meal', element: <App />,
    children: [
      { path: '/meal/edit/:category/:id', element: <EditFood />, }
    ]
   },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
