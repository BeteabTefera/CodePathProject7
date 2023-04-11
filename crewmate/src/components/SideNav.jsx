import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import './SideNav.css'
const SideNav = () => {
    //this functions displays option to create a new crewmate, or to view all crewmates
    return (
      <div className="sidenav"> 
        <Link to ='/' >Home</Link>
        <br/>
        <Link to ='/create'>Create Crewmate!</Link>
        <br/>
        <Link to ='/view'>View Crewmates</Link>

        <img className='img' src='src/components/peekingCrewmate.png' width='150px'/>

      </div>
  
  
    );
  };
  export default SideNav;