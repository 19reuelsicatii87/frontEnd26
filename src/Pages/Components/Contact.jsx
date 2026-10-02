import React from 'react'

function Contact() {
    return (
        <section id="contact">
            <div className="container my-5">
                <div className="row">
                    <h1 className='text-start text-primary'>
                        <i className="bi bi-person-circle"
                            style={{ fontSize: "35px" }}></i>
                        {" "}Contact Me
                    </h1>
                    <div className='row px-5'>
                        <div className="col-md-3 mb-5">
                            <div className="d-flex justify-content-start">
                                <h4>Reuel B Sicat II</h4>
                            </div>
                            <div className="d-flex justify-content-start">
                                <p className='text-start text-secondary pb-0 mb-0'>
                                    <i className="bi bi-envelope mx-2"
                                        style={{ fontSize: "16px" }}></i>
                                    {" "} reuelsicatii@yahoo.com
                                </p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <p className='text-start text-white pb-0 mb-0'>
                                    <i className="bi bi-messenger mx-2"
                                        style={{ fontSize: "16px" }}></i>
                                    {" "}
                                    <a href="https://www.messenger.com/t/19reuelsicatii87"
                                        className='text-white'>19reuelsicatii87
                                    </a>
                                </p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <p className='text-start text-white pb-0 mb-0'>
                                    <i className="bi bi-skype mx-2"
                                        style={{ fontSize: "16px" }}></i>
                                    {" "} <a href="https://join.skype.com/invite/emhEVfJSHdyF"
                                        className='text-white'>wengsicat
                                    </a>
                                </p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <p className='text-start text-secondary pb-0 mb-0'>
                                    <i className="bi bi-whatsapp mx-2"
                                        style={{ fontSize: "16px" }}></i>
                                    {" "} +63 917 4976 456
                                </p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <p className='text-start text-secondary pb-0 mb-0'>
                                    <i className="bi bi-phone mx-2"
                                        style={{ fontSize: "16px" }}></i>
                                    {" "} +63 917 4976 456
                                </p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <p className='text-start text-secondary pb-0 mb-0'>
                                    <i className="bi bi-pin-map mx-2"
                                        style={{ fontSize: "16px" }}></i>
                                    {" "} Tower D Jazz Residences
                                    <p className='text-start text-secondary pb-0 mb-0' style={{ marginLeft: "2.25rem" }}>Nicanor Garcia cor</p>
                                    <p className='text-start text-secondary pb-0 mb-0' style={{ marginLeft: "2.25rem" }}>Jupiter Ave Brgy Bel-Air,</p>
                                    <p className='text-start text-secondary pb-0 mb-0' style={{ marginLeft: "2.25rem" }}>Makati City, 1209 Philippines</p>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <iframe title="map" width="100%" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                                src="https://maps.google.com/maps?q=Tower%20D%20Jazz%20Residences&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact