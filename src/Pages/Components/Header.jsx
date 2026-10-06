import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom"

function Header() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;
        const section = document.getElementById(location.hash.slice(1));
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, [location.pathname, location.hash, location.key]);

    function closeMenu() {
        const menu = document.getElementById('navbarColor03');
        if (!menu || !menu.classList.contains('show') || !window.bootstrap) return;
        const collapse = window.bootstrap.Collapse.getInstance(menu)
            || new window.bootstrap.Collapse(menu, { toggle: false });
        collapse.hide();
    }



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
                                        <Link className="nav-link active" to="/#banner" onClick={closeMenu}>Home
                                            <span className="visually-hidden">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/#about-me" onClick={closeMenu}>About Me</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/#skill" onClick={closeMenu}>Skills</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link active dropdown-toggle"
                                            href="/#" id="navbarDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Experience
                                        </a>
                                        <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown" style={{ border: '1.5px solid white' }}>
                                            <li><Link className="dropdown-item nav-link text-center text-white" to="/scrummaster" onClick={closeMenu}>Scrum Master</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center text-white" to="/testmanager" onClick={closeMenu}>Test Manager</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center text-white" to="/automationarchitect" onClick={closeMenu}>Automation Architect</Link></li>
                                            <li><Link className="dropdown-item nav-link text-center text-white" to="/fullstackdeveloper" onClick={closeMenu}>Fullstack Developer</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/#credential" onClick={closeMenu}>Credentials</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/#contact" onClick={closeMenu}>Contact Me</Link>
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