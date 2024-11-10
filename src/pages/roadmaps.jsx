import React from "react";
import { useNavigate } from "react-router-dom";
import './roadmaps.css';

function Roadmap() {
    const navigate = useNavigate();

    const redirectTo = (file) => {
        // This will navigate to the PDF file (assuming you have a proper route set for it)
        window.open(file, "_blank");
    };

    return (
        <section>
            <div className="total-section">
            
            <div className="roadmap-section">
                <h1>Developer Roadmaps</h1>
                <p>Browse the ever-growing list of up-to-date, community-driven roadmaps</p>
                <div className="button-group">
                    <button className="primary-btn">Draw your own roadmap</button>
                    <button className="secondary-btn">Generate Roadmaps with AI</button>
                </div>
            </div>

            <div className="container">
                <div className="sidebar">
                    <h3>All Roadmaps</h3>
                    <ul>
                        <li><a href="absolute-beginners.pdf" target="_blank" rel="noopener noreferrer">Absolute Beginners</a></li>
                        <li><a href="web-development.pdf" target="_blank" rel="noopener noreferrer">Web Development</a></li>
                        <li><a href="frameworks.pdf" target="_blank" rel="noopener noreferrer">Frameworks</a></li>
                        <li><a href="languages-platforms.pdf" target="_blank" rel="noopener noreferrer">Languages / Platforms</a></li>
                        <li><a href="devops.pdf" target="_blank" rel="noopener noreferrer">DevOps</a></li>
                        <li><a href="mobile-development.pdf" target="_blank" rel="noopener noreferrer">Mobile Development</a></li>
                        <li><a href="databases.pdf" target="_blank" rel="noopener noreferrer">Databases</a></li>
                        <li><a href="computer-science.pdf" target="_blank" rel="noopener noreferrer">Computer Science</a></li>
                        <li><a href="machine-learning.pdf" target="_blank" rel="noopener noreferrer">Machine Learning</a></li>
                        <li><a href="game-development.pdf" target="_blank" rel="noopener noreferrer">Game Development</a></li>
                        <li><a href="design.pdf" target="_blank" rel="noopener noreferrer">Design</a></li>
                        <li><a href="blockchain.pdf" target="_blank" rel="noopener noreferrer">Blockchain</a></li>
                        <li><a href="cyber-security.pdf" target="_blank" rel="noopener noreferrer">Cyber Security</a></li>
                    </ul>
                </div>
                <div className="content">
                    <h2>ROLE BASED ROADMAPS</h2>
                    <div className="roadmap-grid">
                        <button onClick={() => redirectTo('javascript.pdf')}>JavaScript</button>
                        <button onClick={() => redirectTo('python.pdf')}>Python</button>
                        <button onClick={() => redirectTo('java.pdf')}>Java</button>
                        <button onClick={() => redirectTo('frontend.pdf')}>Frontend</button>
                        <button onClick={() => redirectTo('backend.pdf')}>Backend</button>
                        <button onClick={() => redirectTo('full-stack.pdf')}>Full Stack</button>
                        <button onClick={() => redirectTo('qa.pdf')}>QA</button>
                        <button onClick={() => redirectTo('product-manager.pdf')}>Product Manager</button>
                        <button onClick={() => redirectTo('ai-engineer.pdf')}>AI Engineer</button>
                        <button onClick={() => redirectTo('cyber-security.pdf')}>Cyber Security</button>
                        <button onClick={() => redirectTo('software-architect.pdf')}>Software Architect</button>
                        <button onClick={() => redirectTo('data-analyst.pdf')}>Data Analyst</button>
                        <button onClick={() => redirectTo('ux-design.pdf')}>UX Design</button>
                        <button onClick={() => redirectTo('server-side-game-dev.pdf')}>Server Side Game Dev</button>
                        <button onClick={() => redirectTo('client-side-game-dev.pdf')}>Client Side Game Dev</button>
                    </div>
                    <h2>SKILL BASED ROADMAPS</h2>
                    <div className="roadmap-grid">
                        <button onClick={() => redirectTo('graphql.pdf')}>GraphQL</button>
                        <button onClick={() => redirectTo('git-and-github.pdf')}>Git and GitHub</button>
                        <button onClick={() => redirectTo('react.pdf')}>React</button>
                        <button onClick={() => redirectTo('angular.pdf')}>Angular</button>
                        <button onClick={() => redirectTo('javascript.pdf')}>JavaScript</button>
                        <button onClick={() => redirectTo('vue.pdf')}>Vue</button>
                        <button onClick={() => redirectTo('asp-net-core.pdf')}>ASP.NET Core</button>
                        <button onClick={() => redirectTo('node-js.pdf')}>Node.js</button>
                        <button onClick={() => redirectTo('spring-boot.pdf')}>Spring Boot</button>
                        <button onClick={() => redirectTo('typescript.pdf')}>TypeScript</button>
                        <button onClick={() => redirectTo('c-plus-plus.pdf')}>C++</button>
                        <button onClick={() => redirectTo('go.pdf')}>Go</button>
                    </div>
                </div>
            </div>

            <div className="roadmap-section">
                <h1>Advanced Roadmaps</h1>
                <p>Explore specialized and advanced roadmaps tailored for experienced developers</p>
                <div className="button-group">
                    <button className="primary-btn">Build your advanced roadmap</button>
                    <button className="secondary-btn">AI-Powered Roadmaps</button>
                </div>
            </div>

            <div className="container">
                <div className="sidebar">
                    <h3>Advanced Topics</h3>
                    <ul>
                        <li><a href="cloud-computing.pdf" target="_blank" rel="noopener noreferrer">Cloud Computing</a></li>
                        <li><a href="big-data.pdf" target="_blank" rel="noopener noreferrer">Big Data</a></li>
                        <li><a href="data-science.pdf" target="_blank" rel="noopener noreferrer">Data Science</a></li>
                        <li><a href="artificial-intelligence.pdf" target="_blank" rel="noopener noreferrer">Artificial Intelligence</a></li>
                        <li><a href="distributed-systems.pdf" target="_blank" rel="noopener noreferrer">Distributed Systems</a></li>
                        <li><a href="blockchain.pdf" target="_blank" rel="noopener noreferrer">Blockchain</a></li>
                        <li><a href="quantum-computing.pdf" target="_blank" rel="noopener noreferrer">Quantum Computing</a></li>
                        <li><a href="edge-computing.pdf" target="_blank" rel="noopener noreferrer">Edge Computing</a></li>
                        <li><a href="network-security.pdf" target="_blank" rel="noopener noreferrer">Network Security</a></li>
                        <li><a href="iot.pdf" target="_blank" rel="noopener noreferrer">Internet of Things (IoT)</a></li>
                    </ul>
                </div>
                <div className="content">
                    <h2>EXPERT LEVEL ROADMAPS</h2>
                    <div className="roadmap-grid">
                        <button onClick={() => redirectTo('cloud-architecture.pdf')}>Cloud Architecture</button>
                        <button onClick={() => redirectTo('data-engineering.pdf')}>Data Engineering</button>
                        <button onClick={() => redirectTo('deep-learning.pdf')}>Deep Learning</button>
                        <button onClick={() => redirectTo('blockchain-developer.pdf')}>Blockchain Developer</button>
                        <button onClick={() => redirectTo('quantum-ml.pdf')}>Quantum Machine Learning</button>
                        <button onClick={() => redirectTo('robotics.pdf')}>Robotics</button>
                        <button onClick={() => redirectTo('vr-ar.pdf')}>VR/AR Development</button>
                        <button onClick={() => redirectTo('cyber-forensics.pdf')}>Cyber Forensics</button>
                        <button onClick={() => redirectTo('ethical-hacking.pdf')}>Ethical Hacking</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Roadmap;
