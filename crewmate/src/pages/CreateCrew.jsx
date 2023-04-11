import React from "react";
import { supabase } from "../client";


//This component is used to create a new crewmate

const CreateCrew = () => {
    
    const createPost = async (e) => {
        e.preventDefault();
        
        //Get the values from from the form
        const name = document.getElementById('name').value;
        const speed = document.getElementById('speed').value;
        const color = document.querySelector('input[name="color"]:checked')?.value;

        //Create a new post
        const post = {
            name: name,
            speed: speed,
            color: color
        }


        await supabase
        .from('Posts')
        .insert(post)
        .select();


        //Redirect to the home page
        window.location = '/';
        

    }

    return (
        <div className="create-crew">
            <h1>Create a new crewmate</h1>
            <img src='src/components/crewmateSource1.png' width='500'/>
            <form onSubmit={createPost}>
                <label>Name</label>
                <input type="text" id="name" required/>
                <label>Speed</label>
                <input type="number" id="speed" required/>
                <label>Color</label>
                <div className="color-options">
                    <label>
                        <input type="radio" name="color" value="red" required/>
                        <span className="color red"></span>
                    </label>
                    <label>
                        <input type="radio" name="color" value="blue" required/>
                        <span className="color blue"></span>
                    </label>
                    <label>
                        <input type="radio" name="color" value="green" required/>
                        <span className="color green"></span>
                    </label>
                    <label>
                        <input type="radio" name="color" value="pink" required/>
                        <span className="color pink"></span>
                    </label>
                    <label>
                        <input type="radio" name="color" value="orange" required/>
                        <span className="color orange"></span>
                    </label>
                    <label>
                        <input type="radio" name="color" value="yellow" required/>
                        <span className="color yellow"></span>
                    </label>
                    <label>
                        <input type="radio" name="color" value="black" required/>
                        <span className="color black"></span>
                    </label>
                </div>
                <button>Create</button>
            </form>
        </div>
    )

}

export default CreateCrew;