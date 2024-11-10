import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            // Send login request
            const res = await axios.post("http://localhost:5174/", {
                email,
                password,
            });

            // If user exists and credentials are correct
            if (res.data === "exist") {
                // Redirect to the home page with the email in the state
                history("/home", { state: { id: email } });
            } else if (res.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (e) {
            alert("Wrong details");
            console.log(e);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit" className="login-btn">Login</button>
            </form>

            <br />
            <p>OR</p>
            <br />
            <Link to="/register">Register Now</Link>
        </div>
    );
}

export default Login;
