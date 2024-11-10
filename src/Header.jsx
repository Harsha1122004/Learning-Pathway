import { Link } from "react-router-dom";
import "./pages/Header.css";
import React from "react";


function Header() {
    return (
        <header>
            <div className="navbar">
                <div className="logo"> <li><Link to="/">Learning Pathway</Link></li></div>
                <nav>
                    <ul>
                        <li><Link to="/projects">My Projects</Link></li>
                        <li><Link to="/roadmap">Roadmaps</Link></li>
                        <li><Link to="/leaderboard">Leaderboard</Link></li>
                        <li><Link to="/my-path">My Path</Link></li>
                        <li><Link to="/game">Play Now</Link></li>
                    </ul>
                </nav>
                <div className="auth">
                    <button className="quests-btn">Code Pro+</button>
                    <Link to="/Signup" className="sign-up" id="signIn">Login</Link>
                   
                    <Link to="/profile" className="profile" id="profile" style={{ display: 'none' }}>Profile</Link>
                </div>
            </div>
        </header>
    );
}

export default Header
