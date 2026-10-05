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
                        <div className='col-lg-3 p-3 d-flex align-items-stretch'>
                            <div className="card h-100 w-100">
                                <div className='d-flex justify-content-center p-3'>
                                    <img src="/Images/Diane.jfif" className="card-img-top"
                                        alt="test-automation-template"
                                        style={{ height: '100px', width: '100px', borderRadius: '50%' }}></img>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-primary fw-bold">Diane Feeley</h5>
                                    <a href="https://www.linkedin.com/in/diane-feeley-nee-carter-85822032/"
                                        className="btn btn-secondary align-self-center mb-3">
                                        Visit Profile {" "}
                                        <i className="bi bi-box-arrow-in-up-right"></i>
                                    </a>
                                    <p className="fst-italic text-start mb-0">Reuel is a very detail orientated Test Manager.
                                        I worked with his for just over a year and he reported directly into me.
                                        He worked remotely to me, but that didn't hamper us having good communication.
                                        Reuel had a team of 8+ test analyst reporting into him, and he managed them very well.
                                        He managed their daily tasks, their yearly objections and all other aspects of managing a team.
                                        Reuel also created the processes and procedures for the team and ensured that they were followed correctly. </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 p-3 d-flex align-items-stretch'>
                            <div className="card h-100 w-100">
                                <div className='d-flex justify-content-center p-3'>
                                    <img src="/Images/Duncan.jfif" className="card-img-top"
                                        alt="test-automation-template"
                                        style={{ height: '100px', width: '100px', borderRadius: '50%' }}></img>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-primary fw-bold">Duncan Walton</h5>
                                    <a href="https://www.linkedin.com/in/duncanwalton/"
                                        className="btn btn-secondary align-self-center mb-3">
                                        Visit Profile {" "}
                                        <i className="bi bi-box-arrow-in-up-right"></i>
                                    </a>
                                    <p className="fst-italic text-start mb-0">I had the pleasure of working closely with Weng who reported to me as a QA manager.
                                        Weng established the offshore manual and automated testing capability where he was responsible for recruiting
                                        and managing testing teams in Manilla and Hyderabad. His extensive testing experience, methodical approach
                                        and attention to detail allowed him to deliver across multiple projects and technology platforms in a fast paced
                                        agile environment. Weng was always prepared to step up and tackle new challenges and effectively project managed
                                        Salesforce developer resources as well as capturing business requirements. He is a great communicator and a
                                        committed team player who positively engages all those around him. I would strongly recommend Weng to any future employer.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 p-3 d-flex align-items-stretch'>
                            <div className="card h-100 w-100">
                                <div className='d-flex justify-content-center p-3'>
                                    <img src="/Images/Rachel.jfif"
                                        className="card-img-top"
                                        alt="test-automation-template"
                                        style={{ height: '100px', width: '100px', borderRadius: '50%' }}></img>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-primary fw-bold">Rachelle Tan</h5>
                                    <a href="https://www.linkedin.com/in/rachelle-tan-8b35522/"
                                        className="btn btn-secondary align-self-center mb-3">
                                        Visit Profile {" "}
                                        <i className="bi bi-box-arrow-in-up-right"></i>
                                    </a>
                                    <p className="fst-italic text-start mb-0">Reuel was a great help when he joined the R&D team as the QA Lead.
                                        He has set up and implemented the QA Process & Policies. Setup JIRA for the Development / QA
                                        teams to use it following the Agile methodology. He eventually became the SCRUM Master
                                        who drives the team’s delivery.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 p-3 d-flex align-items-stretch'>
                            <div className="card h-100 w-100">
                                <div className='d-flex justify-content-center p-3'>
                                    <img src="/Images/Emir.jfif"
                                        className="card-img-top"
                                        alt="Emir Endozo"
                                        style={{ height: '100px', width: '100px', borderRadius: '50%' }}></img>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-primary fw-bold">Emir Endozo</h5>
                                    <a href="https://www.linkedin.com/in/emir-endozo"
                                        className="btn btn-secondary align-self-center mb-3">
                                        Visit Profile {" "}
                                        <i className="bi bi-box-arrow-in-up-right"></i>
                                    </a>
                                    <p className="fst-italic text-start mb-0">Reuel and I worked collaboratively for five years and I found him a conscientious
                                        and very hardworking professional. One of the main reasons that he and I have been successful co-workers
                                        on almost every project that the company has entrusted with us - is his ability to delve into details.
                                        In his role as a Scrum Master &amp; QA Manager, he came across many challenges; he is never shy of asking help when needed
                                        and takes constructive criticism quite well. He is dedicated, enthusiastic and is an accomplished multitasker who has ensured
                                        the efficacy of many of our projects.</p>
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
