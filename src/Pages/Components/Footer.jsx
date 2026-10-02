import React from 'react'

function Footer() {
    return (
        <section id="footer" >
            <div className='container-fluid bg-primary py-3'>
                <div className='row text-white'>
                    <div className='d-flex justify-content-center'>
                        <div className='' style={{ fontSize: "35px" }}>
                            <a href="https://www.linkedin.com/in/reuel-sicat-ibm-rft%C2%AE-smac%C2%AE-clssgb%C2%AE-a580397a/" className='text-white'><i className="bi bi-linkedin mx-2"></i></a>
                            <a href="https://www.facebook.com/19reuelsicatii87" className='text-white'><i className="bi bi-facebook mx-2"></i></a>
                            <a href="https://www.messenger.com/t/19reuelsicatii87" className='text-white'><i className="bi bi-messenger mx-2"></i></a>
                            <a href="https://join.skype.com/invite/emhEVfJSHdyF" className='text-white'><i className="bi bi-skype mx-2"></i></a>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center'>COPYRIGHTS NIMPHUS INC. ALL RIGHTS RESERVED</div>
                    <div className='row justify-content-center'>Design by Reuel B Sicat II</div>
                </div>
            </div>
        </section>
    )
}

export default Footer