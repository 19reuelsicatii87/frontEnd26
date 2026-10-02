import React from 'react'

function AutomationArchitectExp() {
    return (
        <section id="automation-architect">
            <div className='container-fluid bg-light py-5'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='text-start text-primary'>
                            <img src="/Images/AA_logo.jpg" style={{ height: '100px', width: '100px', borderRadius: '50%' }} alt="SM-logo"></img>
                            {" "}Automation Architect
                        </h1>
                        <div className='row px-5 my-3'>
                            <div className='col-lg-5'>
                                <h2 className='text-start text-primary'>
                                    <i className="bi bi-robot"
                                        style={{ fontSize: "30px" }}></i>
                                    {" "}Activities
                                </h2>
                                <ul>
                                    <li className='text-start'>Setup Test Automation Servers and install necessary applications</li>
                                    <li className='text-start'>Design and create a Test Automation using BDD Framework using Selenium, Appium, ExtentReport, Cucumber, Maven and Jhenkin</li>
                                    <li className='text-start'>Establish  code hosting platform for version control using GitHub or BitBucket</li>
                                    <li className='text-start'>Execute Test Automation scripts during regression test cycles</li>
                                    <li className='text-start'>Accurately report Test Automation progress as well as Bugs against Application Under Test</li>
                                    <li className='text-start'>Maintain and expand Test Automation Suite based on the recent changes of Application Under Test</li>
                                </ul>
                            </div>
                            <div className='col-lg-6 offset-lg-1'>
                                <h2 className='text-start text-primary'>
                                    <i className="bi bi-person"
                                        style={{ fontSize: "30px" }}></i>
                                    {" "}Highlights
                                </h2>
                                <ul>
                                    <li className='text-start'>Captures Test Automation Report and store results in DataBase</li>
                                    <li className='text-start'>Integrate Database with Data Studio Report that displays the summary of the current and previous test</li>
                                    <li className='text-start'>Integrate Database with a Data Studio Report that displays the historical trend (pass or fail) per test cases</li>
                                </ul>
                            </div>
                        </div>
                        <div className='row px-5'>
                            <div className='col-lg-12'>
                                <h2 className='text-start text-primary'>
                                    <i className="bi bi-github"
                                        style={{ fontSize: "30px" }}></i>
                                    {" "}Repository
                                </h2>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-lg-6 p-3'>
                                        <div className="card">
                                            <div className='d-flex justify-content-center p-3'>
                                                <img src="/Images/TestAuto_Template.png" className="card-img-top"
                                                    alt="test-automation-template"></img>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold">Test Automation Template</h5>
                                                <p className="card-text">A template that can easily be duplicated and deployed to quickly start an Test Automation Solution.</p>
                                                <a href="https://github.com/19reuelsicatii87/App.TestAutoDemoOne"
                                                    className="btn btn-primary"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    <i className="bi bi-github"></i>
                                                    {" "}GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 p-3'>
                                        <div className="card">
                                            <div className='d-flex justify-content-center p-3'>
                                                <img src="/Images/SM_platform.png" className="card-img-top"
                                                    alt="test-automation-template"></img>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold">Social Media Automation</h5>
                                                <p className="card-text">A sample Test Automation Solution that test and inject data to social media platforms.</p>
                                                <a href="https://github.com/19reuelsicatii87/App.SocialMediaBot"
                                                    className="btn btn-primary"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    <i class="bi bi-github"></i>
                                                    {" "}GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AutomationArchitectExp