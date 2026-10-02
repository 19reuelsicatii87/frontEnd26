import React from 'react';
import { Link } from "react-router-dom"

function Header() {


    function header() {

        if (window.location.href.includes("/scrummaster")) {
            return (
                sub()
            )
        }
        else if (window.location.href.includes("/testmanager")) {
            return (
                sub()
            )
        }
        else if (window.location.href.includes("/automationarchitect")) {
            return (
                sub()
            )
        }
        else if (window.location.href.includes("/fullstackdeveloper")) {
            return (
                sub()
            )
        }
        else {
            return (
                main()
            )
        }

    }

    function main() {
        return (
            <div id="menu">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <div>
                            <a className="navbar-brand" href="/">
                                <img src="/Images/Profile.jpg" alt="logo" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                                <span>MENU</span>
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
                                        <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item nav-link text-center fw-bold" to="/scrummaster">Scrum Master</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center fw-bold" to="/testmanager">Test Manager</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center fw-bold" to="/automationarchitect">Automation Architect</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center fw-bold" to="/fullstackdeveloper">Fullstack Developer</Link></li>
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

    function sub() {
        return (
            < div id="back" >
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container my-3 py-3">
                        <div className='d-flex justify-content-end w-100'>
                            <a className="nav-link active text-white fw-bold" href="/">
                                <i className="bi bi-arrow-left"></i>
                                {" "}Back
                            </a>
                        </div>
                    </div>
                </nav>
            </div >
        )
    }

    return (
        <section id="header">
            {header()}
        </section>
    )
}

export default Header