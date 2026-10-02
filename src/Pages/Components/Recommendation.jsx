import React from 'react'

function Recommendation() {
    return (
        <section id='recommendation'>
            <div className='container-fluid bg-light'>
                <div className='container py-5'>
                    <div className='row'>
                        <h1 className='text-start text-primary'>
                            <i className="bi bi-star"
                                style={{ fontSize: "35px" }}></i>
                            {" "}Recommendations
                        </h1>
                    </div>
                    <div className='row d-flex justify-content-center'>

                        <div className='col-lg-4 p-3 d-flex align-items-stretch'>
                            <div className="card">
                                <div className='d-flex justify-content-center p-3'>
                                    <img src="/Images/Diane.jfif" className="card-img-top"
                                        alt="test-automation-template"
                                        style={{ height: '100px', width: '100px', borderRadius: '50%' }}></img>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Diane Feeley</h5>
                                    <p className="fst-italic">Reuel is a very detail orientated Test Manager.
                                        I worked with his for just over a year and he reported directly into me.
                                        He worked remotely to me, but that didn't hamper us having good communication.
                                        Reuel had a team of 8+ test analyst reporting into him, and he managed them very well.
                                        He managed their daily tasks, their yearly objections and all other aspects of managing a team.
                                        Reuel also created the processes and procedures for the team and ensured that they were followed correctly. </p>
                                    <a href="https://www.linkedin.com/in/diane-feeley-nee-carter-85822032/"
                                        className="btn btn-primary">
                                        Visit Profile {" "}
                                        <i className="bi bi-box-arrow-in-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 p-3 d-flex align-items-stretch'>
                            <div className="card">
                                <div className='d-flex justify-content-center p-3'>
                                    <img src="/Images/Duncan.jfif" className="card-img-top"
                                        alt="test-automation-template"
                                        style={{ height: '100px', width: '100px', borderRadius: '50%' }}></img>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Duncan Walton</h5>
                                    <p className="fst-italic">I had the pleasure of working closely with Weng who reported to me as a QA manager.
                                        Weng established the offshore manual and automated testing capability where he was responsible for recruiting
                                        and managing testing teams in Manilla and Hyderabad. His extensive testing experience, methodical approach
                                        and attention to detail allowed him to deliver across multiple projects and technology platforms in a fast paced
                                        agile environment. Weng was always prepared to step up and tackle new challenges and effectively project managed
                                        Salesforce developer resources as well as capturing business requirements. He is a great communicator and a
                                        committed team player who positively engages all those around him. I would strongly recommend Weng to any future employer.</p>
                                    <a href="https://www.linkedin.com/in/duncanwalton/"
                                        className="btn btn-primary">
                                        Visit Profile {" "}
                                        <i className="bi bi-box-arrow-in-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 p-3 d-flex align-items-stretch'>
                            <div className="card">
                                <div className='d-flex justify-content-center p-3'>
                                    <img src="/Images/Rachel.jfif"
                                        className="card-img-top"
                                        alt="test-automation-template"
                                        style={{ height: '100px', width: '100px', borderRadius: '50%' }}></img>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Rachelle Tan</h5>
                                    <p className="fst-italic">Reuel was a great help when he joined the R&D team as the QA Lead.
                                        He has set up and implemented the QA Process & Policies. Setup JIRA for the Development / QA
                                        teams to use it following the Agile methodology. He eventually became the SCRUM Master
                                        who drives the team’s delivery.</p>
                                    <a href="https://www.linkedin.com/in/rachelle-tan-8b35522/"
                                        className="btn btn-primary">
                                        Visit Profile {" "}
                                        <i className="bi bi-box-arrow-in-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recommendation