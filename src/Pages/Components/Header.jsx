import React from 'react';
import { Link } from "react-router-dom"

function Header() {




    function main() {
        return (
            <div id="menu">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                            <a className="navbar-brand" href="/">
                                <img src="/Images/resume-profile-03.jpg" alt="logo" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                            </a>
                            <button className="navbar-toggler collapsed ms-auto text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation" style={{ border: '1.5px solid white' }}>
                                <span >MENU</span>
                            </button>
                        </div>

                        <div>
                            <div className="collapse navbar-collapse" id="navbarColor03">

                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#banner">Home
                                            <span className="visually-hidden">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#about-me">About Me</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#skill">Skills</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link active dropdown-toggle"
                                            href="/#" id="navbarDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Experience
                                        </a>
                                        <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown" style={{ border: '1.5px solid white' }}>
                                            <li><Link className="dropdown-item nav-link text-center text-white" to="/scrummaster">Scrum Master</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center text-white" to="/testmanager">Test Manager</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center text-white" to="/automationarchitect">Automation Architect</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center text-white" to="/fullstackdeveloper">Fullstack Developer</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#credential">Credentials</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#contact">Contact Me</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }


    return (
        <section id="header">
            {main()}
        </section>
    )
}

export default Header