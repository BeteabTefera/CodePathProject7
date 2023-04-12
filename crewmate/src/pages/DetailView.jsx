import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import { Link } from 'react-router-dom';
import './DetailView.css';

//this component is used to get detail view of a crewmate
const DetailView = () => {

    //get the id from the url
    const { id } = useParams();

    //set up state variables
    const [crewmate, setCrewmate] = useState(null);

    //fetch the crewmate from the database
    useEffect(() => {
        const getCrewmate = async () => {
            const { data } = await supabase
                .from('Posts')
                .select()
                .eq('id', id);

            if (data.length > 0) {
                setCrewmate(data[0]);
            }
        };
        getCrewmate().catch(console.error);
    }, [id]);

    if (!crewmate) {
        return <h1>Loading...</h1>;
    }

    //the return statement will give a detail view and special message based on the crewmate's speed
    return (
        <div className="detail-view">
            <img src='/src/components/blankCrewmate.png' ></img>
            <h1>{crewmate.name}</h1>
            <p>Speed: {crewmate.speed}</p>
            <p>Color: {crewmate.color}</p>
            <div className="special-message">
                {crewmate.speed > 5 ? (
                    <p>Wow, {crewmate.name} is fast!</p>
                ) : (
                    <p>{crewmate.name} is slow.</p>
                )}

            </div>
        </div>
    );
};

export default DetailView;
