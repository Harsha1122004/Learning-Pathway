import React from "react";
import { useNavigate, Link } from "react-router-dom";
import './Home.css';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <section className="Middle-Section">
                <div className="left-middle">
                    <h1>Welcome to E-Learning</h1>
                </div>
                <div className="right-middle">
                    <img className="Middle-img" src="src/assets/computer.gif" alt="E-Learning GIF" />
                </div>
            </section>

            <section className="galaxy-features">
                <div className="galaxy-card">
                    <h3>Intergalactic Challenges</h3>
                    <p>Take part in cosmic hackathons and test your coding skills across the universe!</p>
                    <Link to="/challenges" className="feature-link">Learn More</Link>
                </div>
                <div className="galaxy-card">
                    <h3>Prepare for Interviews</h3>
                    <p>Prepare for interviews with insights and tips from the farthest reaches of the tech universe.</p>
                    <Link to="/interviews" className="feature-link">Get Prepared</Link>
                </div>
                <div className="galaxy-card">
                    <h3>Universal Networking</h3>
                    <p>Connect with experts across galaxies and expand your professional reach!</p>
                    <Link to="/networking" className="feature-link">Connect Now</Link>
                </div>
            </section>

            <section className="coding-languages">
                <h2 id="coding-languages-title">Learn Coding Languages</h2>
                <div className="card-container">
                    <div className="card">
                        <img src="src/assets/ruby.png" alt="CSS Icon" className="icon" />
                        <h3 className="language-title">CSS</h3>
                        <p className="subheading">Versatile & Easy to Learn</p>
                        <Link to="/cssmenu"><button className="start-learning">Start Learning</button></Link>
                    </div>
                    <div className="card">
                        <img src="src/assets/html.png" alt="HTML Icon" className="icon" />
                        <h3 className="language-title">HTML</h3>
                        <p className="subheading">Web Development Essential</p>
                        <Link to="/htmlmenu"><button className="start-learning">Start Learning</button></Link>
                    </div>
                    <div className="card">
                        <img src="src/assets/javascript.png" alt="JavaScript Icon" className="icon" />
                        <h3 className="language-title">JavaScript</h3>
                        <p className="subheading">Powerful & Object-Oriented</p>
                        <Link to="/menu"><button className="start-learning">Start Learning</button></Link>
                    </div>
                    <div className="card">
                        <img src="src/assets/threejs.png" alt="Three.js Icon" className="icon" />
                        <h3 className="language-title">Three.js</h3>
                        <p className="subheading">Dynamic & Versatile</p>
                        <Link to="/codeeditor"><button className="start-learning">Start Learning</button></Link>
                    </div>
                    <div className="card">
                        <img src="src/assets/cplusplus.png" alt="C++ Icon" className="icon" />
                        <h3 className="language-title">C++</h3>
                        <p className="subheading">Fast & Efficient</p>
                        <Link to="/cplusplus"><button className="start-learning">Start Learning</button></Link>
                    </div>
                    <div className="card">
                        <img src="src/assets/csharp.png" alt="C# Icon" className="icon" />
                        <h3 className="language-title">C#</h3>
                        <p className="subheading">Object-Oriented & Powerful</p>
                        <Link to="/csharp"><button className="start-learning">Start Learning</button></Link>
                    </div>
                    <div className="card">
                        <img src="src/assets/go.png" alt="Go Icon" className="icon" />
                        <h3 className="language-title">Go</h3>
                        <p className="subheading">Fast & Concurrent</p>
                        <Link to="/go"><button className="start-learning">Start Learning</button></Link>
                    </div>
                    <div className="card">
                        <img src="src/assets/php.png" alt="PHP Icon" className="icon" />
                        <h3 className="language-title">PHP</h3>
                        <p className="subheading">Safe & Performant</p>
                        <Link to="/php"><button className="start-learning">Start Learning</button></Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
