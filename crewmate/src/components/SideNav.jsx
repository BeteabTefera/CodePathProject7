import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import './SideNav.css'

const SideNav = () => {
    //this functions displays option to create a new crewmate, or to view all crewmates
    return (
      <div className="sidenav"> 
        <Link to ='/'>Home</Link>
        <Link to ='/create'>Create Crewmate!</Link>
        <Link to ='/view'>View Crewmates</Link>

        <img src='src/components/peekingCrewmate.png' height='150px' width='auto' style='position: absolute; bottom: 10px;' />


      </div>
  
  
    );
  };
  export default SideNav;