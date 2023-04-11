import React from "react";
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './EditCrew.css';

//this component is used to edit the crewmates that have been created

const EditCrew = () => {

    //get the id from the url
    const { id } = useParams();

    //set up state variables
    const [post, setPost] = React.useState(null);

    //fetch the crewmate from the database
    React.useEffect(() => {
        const getPost = async () => {
            const {data} = await supabase
            .from('Posts')
            .select()
            .eq('id', id)

            if(data.length > 0){
                setPost(data[0]);
            }
        }
        getPost().catch(console.error);
    }, [id]);

    //update the crewmate
    const updatePost = async (e) => {
        e.preventDefault();

        //update the crewmember in the database
        await supabase.from('Posts').update({
            name: post.name,
            speed: post.speed,
            color: post.color
        }).eq('id', id);

        //redirect to the home page
        window.location = '/';
    }

    //delete the crewmate
    const deletePost = async (e) => {
        e.preventDefault();

        //delete the crewmate from the database
        await supabase.from('Posts').delete().eq('id', id);

        //redirect to the home page
        window.location = '/';
    }

    if (!post) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="edit-crew">
        <img src='src/components/crewmateSource1.png' width='500'/>
            <h1>Edit Crewmate</h1>
            <form onSubmit={updatePost}>
                <label>Name</label>
                <input type="text" value={post.name} onChange={(e) => setPost({...post, name: e.target.value})} />
                <label>Speed</label>
                <input type="text" value={post.speed} onChange={(e) => setPost({...post, speed: e.target.value})} />
                <label>Color</label>
                <input type="text" value={post.color} onChange={(e) => setPost({...post, color: e.target.value})} />
                <button type="submit">Update</button>
                <button onClick={deletePost}>Delete</button>
            </form>
        </div>
    )

}

export default EditCrew;