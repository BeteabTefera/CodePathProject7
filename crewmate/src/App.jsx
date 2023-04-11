import { useState } from 'react'
import React from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SideNav from './components/SideNav'
import ReadCrew from './pages/ReadCrew'
import CreateCrew from './pages/CreateCrew'
import EditCrew from './pages/EditCrew'


function App() {

  //set up routes
  let routes = useRoutes([
    { path: '/', element: <ReadCrew /> },
    { path: '/create', element: <CreateCrew /> },
    { path: '/view', element: <ReadCrew /> },
    { path: '/edit/:id', element: <EditCrew /> },
  ])

  return (
    <Router>
      <div className="App">
        <div className="sidenav">

        </div>

        <div className="whole-page">
          <h1>Welcome to the Crewmate Creator</h1>
          <h3>Here is where you can create your very own set of crewmates before sending them off into space!</h3>
          <img src='src/components/crewmateSource1.png' width='500'/>
          <br/>
          <img src='src/components/crewmateShip.png' width='500'/>
        </div>
      </div>


    </Router>

  )
}

export default App
