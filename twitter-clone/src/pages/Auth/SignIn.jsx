import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../firebase-config.js";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); // Added state for the message
    const cookies = new Cookies();
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                cookies.set("auth-token", userCredential.user.refreshToken);
                navigate("/home"); // Redirect to the home page
            })
            .catch((error) => {
                console.log(error);
                setMessage("Wrong password or email"); // Set the error message
            });
    };

    const signUpLink = () => {
        navigate("/signup");
    }

    return (
        <>
            <div className="sign-in-container">
                <form onSubmit={signIn}>
                    <h1>Log In to your Account</h1>
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
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <button type="submit">Log In</button>
                    <div>{message && <p>{message}</p>}</div> {/* Render the message */}
                </form>

                <div className="sign-up-link">
                    <p>Don't have an account? <a onClick={signUpLink}>Sign Up</a></p>
                </div>
            </div>
        </>
    );
};

export default SignIn;