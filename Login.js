
import React, { useState, useRef } from 'react';  
import Header from "./Header";  
import { checkValidate } from "../utils/validate.js";  
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";  
import { auth } from "../utils/firebase.js";  


import { useNavigate } from 'react-router-dom';  

const Login = () => {  
    const [isHovered, setIsHovered] = useState(false);
    const [isSignInForm, setIsSignInForm] = useState(true);  
    const [errorMessage, setErrorMessage] = useState(null); 
    const navigate=useNavigate() ;

    const email = useRef(null);  
    const password = useRef(null);  
    const name = useRef(null);  

    const handleButtonClick = async () => {  
        // Clear previous error message  
        setErrorMessage(null);  

        const emailValue = email.current.value;  
        const passwordValue = password.current.value;  
        //const nameValue = name.current ? name.current.value : '';  

        // Validate input  
        const message = checkValidate(emailValue, passwordValue);  
        setErrorMessage(message);  
        if (message) return;  

        try {  
            if (!isSignInForm) {  
                // Register new user  
                const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);  
                const user = userCredential.user;  
                console.log('User registered:', user);  
                navigate("/browse");
                // Optionally clear input fields or show a success message here.  
            } else {  
                // Sign in existing user  
                const userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue);  
                const user = userCredential.user;  
                console.log('User signed in:', user);  
                // Redirect or perform additional actions upon successful sign-in.  
                navigate("/browse");
            }  
        } catch (error) {  
            const errorCode = error.code;  
            const errorMessage = error.message;  
            setErrorMessage(`${errorCode} - ${errorMessage}`);  
        }  
    };  

    const toggleSignInForm = () => {  
        setIsSignInForm(!isSignInForm);  
        setErrorMessage(null); // Clear error message when toggling forms  
    };  

    return (  
        <div style={{ position: 'relative', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  
            <img  
                src="https://systemdesignprimer.com/assets/images/netflix-system-design-cover.jpg"  
                alt="Background"  
                style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}  
            />  
            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>  
                <Header />  
            </div>  
            <div style={{ zIndex: 10, width: '300px', height: '350px', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>  
                <h2 style={{ color: 'white', marginBottom: '20px' }}>{isSignInForm ? "Sign In" : "Sign Up"}</h2>  
                {!isSignInForm &&  
                    <input  
                        ref={name}  
                        type="text"  
                        placeholder="Full Name"  
                        className="p-2 m-2 w-full"  
                        style={{ padding: '15px', borderRadius: '5px', border: '1px solid #aaa', width: '250px', marginBottom: '20px' }}  
                    />}  
                <input  
                    ref={email}  
                    type="text"  
                    placeholder="Email or mobile number"  
                    className="p-2 m-2 w-full"  
                    style={{ padding: '15px', borderRadius: '5px', border: '1px solid #aaa', width: '250px', marginBottom: '10px' }}  
                />  
                <input  
                    ref={password}  
                    type="password"  
                    placeholder="Password"  
                    className="p-2 m-2 w-full"  
                    style={{ padding: '15px', borderRadius: '5px', border: '1px solid #aaa', width: '250px', marginBottom: '20px' }}  
                />  
                <p style={{ color: 'red' }}>{errorMessage}</p> {/* Ensure the error message is styled properly */}  

                <button  
                 
                onClick={handleButtonClick}  
                onMouseEnter={() => setIsHovered(true)} // Mouse enter event  
                onMouseLeave={() => setIsHovered(false)} // Mouse leave event  
                style={{  
                    backgroundColor: isHovered ? 'darkred' : 'red', // Change color on hover  
                    color: 'white',  
                    borderRadius: '5px',  
                    border: 'none',  
                    width: '250px',  
                    padding: '15px',  
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Increase size on hover  
                    transition: 'all 0.3s ease', // Smooth transition  
                }}  
            
                  //  style={{ backgroundColor: 'red', color: 'white', borderRadius: '5px', border: 'none', width: '250px', padding: '15px' }} onClick={handleButtonClick}  
                >  
                    {isSignInForm ? "Sign In" : "Sign Up"}  
                </button>  
                <p className="py-4" style={{ color: 'white', cursor: 'pointer' }} onClick={toggleSignInForm}>  
                    {isSignInForm ? "New to NetflixGPT Sign Up Now" : "Already registered? Sign In Now"}  
                </p>  
            </div>  
        </div>  
    );  
};  

export default Login;  

