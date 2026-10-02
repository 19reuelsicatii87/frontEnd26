import React from 'react'

function FullstackDeveloperExp() {
    return (
        <section id="fullstack-developer">
            <div className='container-fluid bg-light py-5'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='text-start text-primary'>
                            <img src="/Images/Developer.jpg" style={{ height: '100px', width: '100px', borderRadius: '50%' }} alt="SM-logo"></img>
                            {" "}Fullstack Developer
                        </h1>
                        <div className='row px-5 my-3'>
                            <div className='col-lg-5'>
                                <h2 className='text-start text-primary'>
                                    <i className="bi bi-robot"
                                        style={{ fontSize: "30px" }}></i>
                                    {" "}Activities
                                </h2>
                                <ul>
                                    <li className='text-start'>Manage the complete software development process from conception to deployment</li>
                                    <li className='text-start'>Maintain and upgrade the software following deployment</li>
                                    <li className='text-start'>Manage the end-to-end life cycle for the production of software and applications</li>
                                    <li className='text-start'>Oversee and guide the analyzing, writing, building, and deployment of software </li>
                                </ul>
                            </div>
                            <div className='col-lg-6 offset-lg-1'>
                                <h2 className='text-start text-primary'>
                                    <i className="bi bi-person"
                                        style={{ fontSize: "30px" }}></i>
                                    {" "}Highlights
                                </h2>
                                <ul>
                                    <li className='text-start'>Utilize Bootstrap, ReactJS and Laravel in creating a WebApp with the following features:
                                        <ul>
                                            <li>Login / Logout</li>
                                            <li>Simple Email Automation</li>
                                            <li>Image Uploading</li>
                                            <li>Excel Downloading</li>
                                            <li>Manual Payment</li>
                                            <li>Billing Gateway (paymongo)</li>
                                            <li>CRUD on Objects (eg leads, products and packages)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='row px-5'>
                            <div className='col-lg-12'>
                                <h2 className='text-start text-primary'>
                                    <i className="bi bi-globe"
                                        style={{ fontSize: "30px" }}></i>
                                    {" "}Web Application
                                </h2>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-lg-4 p-3'>
                                        <div className="card">
                                            <div className='d-flex justify-content-center p-3'>
                                                <img src="/Images/Malasakit.png" className="card-img-top"
                                                    alt="test-automation-template"></img>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold">Networking Ecommerce Website</h5>
                                                <p className="card-text">A WebApp where customers can place and track orders.
                                                    It is integrated to Paymongo as its Billing Gateway. In addition, its capable of
                                                    capturing leads as well as sending marketing materials.</p>
                                                <a href="https://malasakitoneopti.netlify.app/"
                                                    className="btn btn-primary"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    Visit WebApp {" "}
                                                    <i className="bi bi-box-arrow-in-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 p-3'>
                                        <div className="card">
                                            <div className='d-flex justify-content-center p-3'>
                                                <img src="/Images/Malasakit-Dashboard.png" className="card-img-top"
                                                    alt="test-automation-template"></img>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold">Ecommerce CRM Website</h5>
                                                <p className="card-text">A WebApp to support the Ecommerce WebApp that serves as "Customer Relation Management".
                                                    Basic function includes CRUD of all placed orders as well as captured leads.</p>
                                                <a href="https://malasakitoneopti.netlify.app/dashboard/login"
                                                    className="btn btn-primary"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    Visit WebApp {" "}
                                                    <i className="bi bi-box-arrow-in-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 p-3'>
                                        <div className="card">
                                            <div className='d-flex justify-content-center p-3'>
                                                <img src="/Images/Everra.png" className="card-img-top"
                                                    alt="test-automation-template"></img>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold">Real Estate Website</h5>
                                                <p className="card-text">A Website where customers can view for-sale and rental listings.
                                                    It is capable of capturing leads as well as integrated to Facebook Messenger. 
                                                    Website's clean layout is attractive to visitors.</p>
                                                <a href="https://everra.net/"
                                                    className="btn btn-primary"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    Visit WebApp {" "}
                                                    <i className="bi bi-box-arrow-in-up-right"></i>
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

export default FullstackDeveloperExp