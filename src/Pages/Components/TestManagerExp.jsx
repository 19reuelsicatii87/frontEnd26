import React from 'react'

function TestManagerExp() {
    return (
        <section id="scrum-master">
            <div className='container-fluid bg-light py-5'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='text-start text-primary'>
                            <img src="/Images/TM_logo.jpg" style={{ height: '100px', width: '100px', borderRadius: '50%' }} alt="SM-logo"></img>
                            {" "}Test Manager
                        </h1>
                        <div className='row px-5 my-3'>
                            <div className='col-lg-5'>
                                <h2 className='text-start text-primary'>
                                    <i className="bi bi-people-fill"
                                        style={{ fontSize: "30px" }}></i>
                                    {" "}Team Management
                                </h2>
                                <ul>
                                    <li className='text-start'>Works closely with HR Manager to filter and hire qualified QA applicants</li>
                                    <li className='text-start'>Creates the team and individual objectives derived from the Company’s goal</li>
                                    <li className='text-start'>Conducts objective setting every 1st quarter and evaluation every 2nd and 4th quarter of their annual year.</li>
                                    <li className='text-start'>Strengthens subordinates “Areas for Improvement” through coaching, mentoring and suggests online training from “Axadra Academy”</li>
                                    <li className='text-start'>Submits bi-monthly Adjustment report to Finance containing payroll related items</li>
                                    <li className='text-start'>Conducts Weekly Team Collaboration moderating projects retrospective discussion to identify, implement and review BP/CI</li>
                                    <li className='text-start'>Designs and creates the QA team’s STLC ensuring its modular and adaptive in accordance to Agile Manifesto</li>
                                    <li className='text-start'>Stores and secures all test assets in Shared Drive </li>
                                </ul>
                            </div>
                            <div className='col-lg-6 offset-lg-1'>
                                <h2 className='text-start text-primary'>
                                    <i className="bi bi-graph-up"
                                        style={{ fontSize: "30px" }}></i>
                                    {" "}Test Management
                                </h2>
                                <ul>
                                    <li className='text-start'>Lead Test Plan Creation based on Business Requirement provided by Project Manager</li>
                                    <li className='text-start'>Manages the Team’s workload and assigns Test Projects to team members</li>
                                    <li className='text-start'>Conducts Daily Standup Meeting on both on/offshore to monitor Test Projects while discussing the team’s tasks, targets and challenges</li>
                                    <li className='text-start'>Reviews Test Deliverables ensuring Business Requirements are consistently delivered with high quality</li>
                                    <li className='text-start'>Assists team members on their daily challenges ensuring the project is progressing at expected rate</li>
                                    <li className='text-start'>Function as a single point of contact between Project Stakeholders and QA team members</li>
                                    <li className='text-start'>Create abd sends a Weekly Report to Project stakeholders comparing planned and actual progress</li>
                                    <li className='text-start'>Creates Monthly Metrics outlining Project Velocity, # of Review Points per Deliverables/Project, QA overruns, Continues Improvements and Best Practices and other related KPIs</li>
                                    <li className='text-start'>Sends Monthly Report to Programme Manager containing the Team’s Chargeability, Project Velocity and QA overruns</li>
                                </ul>
                            </div>
                        </div>
                        <div className='row px-5'>
                            <div className='col-lg-12'>
                                <h2 className='text-start text-primary'>
                                    <i className="bi bi-person"
                                        style={{ fontSize: "30px" }}></i>
                                    {" "}Role Highlights
                                </h2>
                                <ul>
                                    <li className='text-start'>Designed and created the team’s STLC ensuring its modular and adaptive is in accordance to Agile Manifesto; stored and secured all test assets in Shared Drive</li>
                                    <li className='text-start'>Defined and implemented the Software Development teams’ SDLC/Workflow in JIRA</li>
                                    <li className='text-start'>Designed and managed JIRA users, fields, screens, workflow, notifications and permissions</li>
                                    <li className='text-start'>Implemented “Gherkins” language in writing Test Scenarios/Cases</li>
                                    <li className='text-start'>Designed and implemented a Test Automation using HYBRID Framework using Selenium, Appium, Cucumber, Maven and Jenkins</li>
                                    <li className='text-start'>Created automated-functional Smoke and Regression Test Suite</li>
                                    <li className='text-start'>Created Web Performance and Load Test Suite</li>
                                    <li className='text-start'>Implemented QA Weekly Training to enhance QA understanding on Company's Business, Software Products and Testing Concepts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestManagerExp