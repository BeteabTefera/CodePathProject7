import React from "react";
import './Home.css';

//Home Page

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Crewmate Creator</h1>
            <h3>Here is where you can create your very own set of crewmates before sending them off into space!</h3>
            <img src='src/components/crewmateSource1.png' width='500'/>
            <br/>
            <img src='src/components/crewmateShip.png' width='500'/>
        </div>
    )
}

export default Home;