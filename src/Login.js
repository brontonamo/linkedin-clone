import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    // Login
    const loginToApp = (e) => {
        e.preventDetault();

        auth.signInWithEmailAndPassword(email, password).then(
        (userAuth) => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                })
            );
        }).catch(error => alert(error));
    };

    // 1st time Register + Login
    const register = () => { 
        if (!name) {
            return alert("Please enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user
            .updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic
                    })
                );
            });
        }).catch((error) => alert(error));
    };

    return (
        <div className="login">
            <img
                src="data:image/png;base64,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"
                alt=""
            />
            <form>
                <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Full name (required if registering)" 
                    type="text"
                />
                <input 
                    value={profilePic} 
                    onChange={(e) => setProfilePic(e.target.value)} 
                    placeholder="Profile pic URL (optional)" 
                    type="text" 
                />
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    type="email" 
                />
                <input 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    type="password" 
                />

                <button type="submit" onClick={loginToApp}>
                    Sign In
				</button>
            </form>

            <p>
                Not a member?{" "}
                <span className="login__register" onClick={register}>
                    Register Now
				</span>
            </p>
        </div>
    );
}

export default Login;
