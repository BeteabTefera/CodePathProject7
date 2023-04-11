import { useState } from 'react'
import React from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SideNav from './components/SideNav'
import ReadCrew from './pages/ReadCrew'
import CreateCrew from './pages/CreateCrew'
import EditCrew from './pages/EditCrew'
import Home from './pages/Home'


function App() {

  //set up routes
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/create', element: <CreateCrew /> },
    { path: '/view', element: <ReadCrew /> },
    { path: '/edit/:id', element: <EditCrew /> },
  ])


  return (
    <div className="App">
      <SideNav />
      {routes}
    </div>
  )
}

export default App
