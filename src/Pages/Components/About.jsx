import React from 'react'

function About() {
    return (
        <section id='about-me'>
            <div className='container-fluid bg-light'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-6 mb-5'>
                            <h1 className='text-start'>
                                <i className="bi bi-file-text"
                                    style={{ fontSize: "35px" }}></i>
                                {" "}Profile Summary</h1>
                            <p className='text-start'>Reuel is a graduate of Silliman University completing a
                                Bachelor’s Degree in Computer Engineering last March 2008. By
                                July of 2008, he started his career in testing exposed on both
                                Manual and Automation while working on web applications. He
                                has a good understanding of the Software Development Life Cycle
                                through numerous training. Furthermore, Reuel is a certified
                                IBM-Rational Functional Tester and Scrum Master as well a Six Sigma Green Belt practitioner.
                            </p>
                            <p className='text-start'>He then joined Castletown Global Service Inc. last May 2013 and
                                rose through the ranks as Test Manager. Through his leadership,
                                Reuel was awarded more test projects and grew the team into 10 resources.
                            </p>
                            <p className='text-start'>Reuel is currently connected with Axadra Ventures Inc. since September 2017. He was
                                able to get certified while stepping up to a Scrum Master role. Due to this, Reuel was
                                awarded “Game Changer of the Year”.
                            </p>
                            <p className='text-start'>During the COVID-19 pandemic, Reuel maximizes his personal time learning and building
                                Web Applications using BootStrap, ReactJS, and Laravel.</p>
                        </div>
                        <div className='col-md-6'>
                            <h1 className='text-start'>
                                <i className="bi bi-hourglass-split"
                                    style={{ fontSize: "35px" }}></i>
                                {" "}Work History
                            </h1>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <h5 className='text-start text-primary fw-bold mb-0'>Scrum Master / Test Manager</h5>
                                        <p className='text-start mb-0'>(April 2017 – Present)</p>
                                        <p className='text-start mb-0 fst-italic'>Axadra Venture Inc</p>
                                    </div>
                                    <div className='mb-3'>
                                        <h5 className='text-start text-primary fw-bold mb-0'>Test Manager</h5>
                                        <p className='text-start mb-0'>(Sept 2016 – Mar 2017)</p>
                                        <p className='text-start mb-0 fst-italic'>Get Qualified Australia</p>
                                    </div>
                                    <div className='mb-3'>
                                        <h5 className='text-start text-primary fw-bold mb-0'>Test Manager</h5>
                                        <p className='text-start mb-0'>(May 2013 – Sept 2016)</p>
                                        <p className='text-start mb-0 fst-italic'>CSGI – Boylesports
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <h5 className='text-start text-primary fw-bold mb-0'>Sr Quality Analyst</h5>
                                        <p className='text-start mb-0'>(Sept 2011 – Nov 2012)</p>
                                        <p className='text-start mb-0 fst-italic'>UnitedHealth Group</p>
                                    </div>
                                    <div className='mb-3'>
                                        <h5 className='text-start text-primary fw-bold mb-0'>Quality Analyst</h5>
                                        <p className='text-start mb-0'>(July 2008 – Sept 2011)</p>
                                        <p className='text-start mb-0 fst-italic'>Accenture Inc</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About