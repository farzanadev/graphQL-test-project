import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { useForm } from "react-hook-form";


const ADD_USER = gql` 
mutation addUser($name:String, $email:String ,$password:Int){
    addUser(input:{ name:$name , email:$email, password:$password})
}
`


const Register = () => {

    const { register, handleSubmit } = useForm();
    const [addUser] = useMutation(ADD_USER);


    const onSubmit = data => {
        addUser({ variables: { name: data.name, email: data.email, password: +data.password } })
        console.log({ variables: { name: data.name, email: data.email, password: +data.password } });
    };

    return (

        <>
            <h2>Please Register </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="pure-form">

                <input
                    type="text"
                    id='name'
                    {...register("name")}
                />

                <input
                    type="text"
                    id='email'
                    {...register("email")}
                />

                <input
                    type="number"
                    id='password'
                    {...register("password")}
                />

                <input
                    type="submit"
                    value="Register"
                />


            </form>

        </>
    );
};

export default Register;

