import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { useForm } from "react-hook-form";
import './AddSong.css'

const ADD_MUSIC = gql` 
mutation addMusic($title:String, $singer:String ,$duration:Int){
    addMusic(input:{ title:$title , singer:$singer, duration:$duration})
}
`


const AddSong = () => {
    
    const { register, handleSubmit } = useForm();
    const [addMusic] = useMutation(ADD_MUSIC);
    

    const onSubmit = data => {
        addMusic({ variables: { title: data.title, singer: data.singer, duration: +data.duration } })  
        console.log({ variables: { title: data.title, singer: data.singer, duration: +data.duration } });
    };

    return (

        <>
        
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
        
                <input type="text" id='title' {...register("title")} />
                <input type="text" id='singer' {...register("singer")} />
                <input type="number" id='duration' {...register("duration")} />
                <input type="submit" value="Add new song" />
              
            </form>

        </>
    );
};

export default AddSong;

