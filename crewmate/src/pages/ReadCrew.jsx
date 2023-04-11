import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import { Link } from 'react-router-dom';
import './ReadCrew.css';

//This function is used to read and display the crewmates that have been created

const ReadCrew = () => {

    //set up state variables
    const [crewmates, setCrewmates] = useState([]);
    const [loading, setLoading] = useState(true);

    //get the crewmates from the database
    useEffect(() => {
        //get the crewmates from the database
        const getPosts = async () => {
            const {data} = await supabase
            .from('Posts')
            .select()
            .order('created_at', {ascending: true});
        
        //set crewmates data
        setCrewmates(data);
        setLoading(false);
        }
        getPosts().catch(console.error);
    }, []);

    //display the crewmates
    return (
        <div className="read-crew">
          <img src='src/components/crewmateSource1.png' width='500'/>
            <h1>View Crewmates</h1>
            <div className="crewmates">
                {loading ? <h1>Loading...</h1> : crewmates.map((crewmate) => (
                    <div className="crewmate" key={crewmate.id}>
                        <h2>{crewmate.name}</h2>
                        <h3>Speed: {crewmate.speed}</h3>
                        <h3>Color: {crewmate.color}</h3>
                        <Link to={`/edit/${crewmate.id}`}>Edit</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReadCrew;