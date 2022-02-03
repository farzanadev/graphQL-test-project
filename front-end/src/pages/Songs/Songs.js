import React from 'react';
import {useQuery,gql} from "@apollo/client";
import './Songs.css'

const Songs = () => {
    const Get_Musics = gql`
    query{
      getMusic {
        _id
        title
        singer
        duration
      }
    }
  `;

    const { loading, error, data } = useQuery(Get_Musics);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className='songs-grid'>

            {
                data.getMusic.map(data =>
                    <div key={data._Id} className='single-div'>
                        <p>Song Name: {data.title}</p>
                        <p>Singer Name :{data.singer}</p>
                        <p>Song Duration :{data.duration}</p>
                    </div>
                )
            }

        </div>
    );
};

export default Songs;