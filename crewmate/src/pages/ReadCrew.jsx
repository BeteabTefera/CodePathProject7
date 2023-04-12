import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import { Link } from 'react-router-dom';
import DetailView from './DetailView';
import './ReadCrew.css';

//This function is used to read and display the crewmates that have been created

const ReadCrew = () => {

    //set up state variables
    const [crewmates, setCrewmates] = useState([]);

    //get the crewmates from the database
    useEffect(() => {
        //get the crewmates from the database
        const getPosts = async () => {
            const {data} = await supabase
            .from('Posts')
            .select()
            .order('created_at', {ascending: false});
        
        //set crewmates data
        setCrewmates(data);
        }
        getPosts().catch(console.error);
    }, []);

    //display the crewmates
    return (
        <div className="read-crew">
          <img src='src/components/crewmateSource1.png' width='500'/>
            <h1>View Crewmates</h1>
            <div className="crewmates">
            {
                crewmates && crewmates.length > 0 ? crewmates.map((crewmate) => (
                    <div className="crewmate" key={crewmate.id}>
                        <h3>
                            <Link to={`/detail/${crewmate.id}`}>{crewmate.name}</Link>
                        </h3>
                        <p>Speed: {crewmate.speed}</p>
                        <p>Color: {crewmate.color}</p>
                        <Link to={`/edit/${crewmate.id}`}>Edit</Link>
                    </div>
                )) : (
                    <div>
                        <h3>No crewmates yet! :( </h3>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default ReadCrew;