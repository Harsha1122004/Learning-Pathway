import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Projects.css';

function Projects() {
    const history = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleForm = () => {
        setIsModalOpen(!isModalOpen);
    };

    const viewProject = () => {
        alert("Viewing project details...");
    };

    return (
        <section>
            {/* Navigation Bar */}
            <nav>
                <Link to="/">Home</Link>
                <button onClick={toggleForm}>Upload Project</button>
            </nav>
            
            {/* Upload Form Modal */}
            {isModalOpen && (
                <div id="uploadModal" className="modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={toggleForm}>×</span>
                        <h2>Upload Your Project</h2>
                        <form id="uploadFormElement" method="POST" encType="multipart/form-data" action="/upload">
                            <label htmlFor="projectName">Project Name:</label>
                            <input type="text" id="projectName" name="projectName" required />

                            <label htmlFor="username">User Name:</label>
                            <input type="text" id="username" name="username" required />

                            <label htmlFor="description">Description:</label>
                            <textarea id="description" name="description" required></textarea>

                            <label htmlFor="language">Language:</label>
                            <input type="text" id="language" name="language" required />

                            <label htmlFor="cost">Cost:</label>
                            <input type="number" id="cost" name="cost" required />

                            <label htmlFor="projectImage">Project Image:</label>
                            <input type="file" id="projectImage" name="projectImage" required />

                            <button type="submit">Submit Project</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Main Container */}
            <div className="main-container">
                <div className="monetize-section">
                    <span>Skill Monetizer</span>
                    <img src="computer.gif" alt="Monetize GIF" className="monetize-gif" />
                </div>
            </div>

            {/* Project Cards */}
            <div className="project-cards">
                <div className="project-card">
                    <img src="project1.jpg" alt="Project 1" />
                    <div className="card-content">
                        <h2>Project 1</h2>
                        <p>Language: JavaScript</p>
                        <p>Creator: Alice</p>
                        <p>Cost: $50</p>
                        <button onClick={viewProject}>View Project</button>
                    </div>
                </div>
                <div className="project-card">
                    <img src="project1.jpg" alt="Project 2" />
                    <div className="card-content">
                        <h2>Project 2</h2>
                        <p>Language: JavaScript</p>
                        <p>Creator: Bob</p>
                        <p>Cost: $70</p>
                        <button onClick={viewProject}>View Project</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects
