import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, authProvider } from './firebase';
import "./Login.css";


function Login() {

    const dispatch = useDispatch();

    const signIn = () =>{
            auth.signInWithPopup(authProvider)
            .then(({user})=>{
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoUrl,

                })
                );
            })
            .catch((error) => alert (error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src ="https://images.news18.com/ibnlive/uploads/2020/11/1604413203_gmail_logo.jpg" alt=""/>

            </div>
            <Button variant="contained" 
            color="primary" 
            onClick={signIn}
            >
                Login
            </Button>
        </div>
    )
}

export default Login
