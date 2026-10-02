import React from 'react'

function ScrumMasterExp() {
    return (
        <section id="scrum-master">
            <div className='container-fluid bg-light py-5'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='text-start text-primary'>
                            <img src="/Images/SM_logo.jpg" style={{ height: '100px', width: '100px', borderRadius: '50%' }} alt="SM-logo"></img>
                            {" "}Scrum Master
                        </h1>
                        <div className='row px-5 my-3'>
                            <div className='col-lg-4'>
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
                                    <li className='text-start'>Manages leaves based on current workload and approves overtime every cut-off</li>
                                </ul>
                            </div>
                            <div className='col-lg-7 offset-lg-1'>
                                <h2 className='text-start text-primary'>
                                    <i className="bi bi-graph-up"
                                        style={{ fontSize: "30px" }}></i>
                                    {" "}Agile Management
                                </h2>
                                <ul>
                                    <li className='text-start'>Moderates Backlog Refinement Meeting ensuring tickets are deleted, added and updated based on their priority, story points and scope</li>
                                    <li className='text-start'>Moderates Sprint Planning ensuring attainable workload is committed based on current scrum team capacity</li>
                                    <li className='text-start'>Moderates Daily Sprint discussing the progress of the Sprint by tackling completed, progressed and issues of each ticket</li>
                                    <li className='text-start'>Moderates Sprint Review ensuring completed tickets are handed and accepted by Product Team</li>
                                    <li className='text-start'>Moderates Sprint Retrospective meeting ensuring BP/CI are identified, discussed, implemented, monitored and continuously practiced</li>
                                    <li className='text-start'>Creates Team Velocity Report at the end of every Sprint</li>
                                    <li className='text-start'>Assists Team Members on their day-to-day challenges ensuring assigned tickets are progressing at expected rate</li>
                                    <li className='text-start'>Create Team Members KPI Report at the end of every Sprint</li>
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
                                    <li className='text-start'>Transitioned the AXADRA - RnD Department from traditional to Agile Project Management</li>
                                    <li className='text-start'>Defined and implemented the Software Development teams’ SDLC/Workflow in JIRA</li>
                                    <li className='text-start'>Designed and managed JIRA users, fields, screens, workflow, notifications and permissions</li>
                                    <li className='text-start'>Added JIRA Timesheet(plugin) to monitor time spent on each ticket's task within the Sprint</li>
                                    <li className='text-start'>Added JIRA Ghantt Chart(plugin) to monitor the progress of each ticket's task within the</li>
                                    <li className='text-start'>Added Automation for JIRA(plugin) to automate repetitive task freeing and maximizing Scrum Master and Member's time</li>
                                    <li className='text-start'>Designed and implemented JIRA Dashboards (e.g RnD, QA, Individual, Release) to guide Scrum Members of their day-to-day tasks</li>
                                    <li className='text-start'>Designed and created a Test Automation using HYBRID Framework using Selenium, Rest ASSURED, Cucumber, Maven, Bitbucket and Jenkins</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScrumMasterExp