import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase-config.js";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signInLink = () => {
        navigate("/login");
    }

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // if worked then redirect to login page
                navigate("/login")
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div className="sign-in-container">
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    minLength="6"
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit">Sign Up</button>
            </form>
            <div className={"sign-up-link"}>
                <p>Already have an account? <a style={{cursor: "pointer"}} onClick={signInLink}>Sign In</a></p>
        </div>
        </div>
    );
};

export default SignUp;