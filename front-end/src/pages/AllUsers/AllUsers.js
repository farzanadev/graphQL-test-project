import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import './AllUsers.css'

const AllUsers = () => {



    const Get_Users = gql`
    query{
        getUser{
            _id
            name
            email
            password
        
    }
    }
  `;


    const { loading, error, data } = useQuery(Get_Users);

    console.log(data, error);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <h2>Hello Users</h2>
            <div className='full-grid'>


                {
                    data.getUser.map((data) =>

                        <div key={data._Id} className="all-users">
                            <p>User Name: {data.email}</p>
                            <p>Singer Name :{data.singer}</p>
                            <p>Song Duration :{data.duration}</p>

                        </div>
                    )}
            </div>
        </>
    );
};

export default AllUsers;