import { useState } from 'react'

const certifications = [
    {
        description: 'Coaching for Success',
        date: 'December 2019',
        image: '/Images/CoachingforSuccess.jpeg',
        download: 'https://drive.google.com/uc?export=download&id=1NGiHtuhKYuZB97uX77AEEed7wWIPC2da',
    },
    {
        description: 'Scrum Master Accredited Certification',
        date: 'December 2017',
        image: '/Images/ScrumMaster.jpg',
        download: 'https://drive.google.com/uc?export=download&id=1xBmymjn7Un9miwMduYwtjYqUl1N2uS1e',
    },
    {
        description: 'Six Sigma Green Belt',
        date: 'August 2012',
        image: '/Images/Six%20Sigma.jpg',
        download: 'https://drive.google.com/uc?export=download&id=1kaGVYZztx-MMnVuljqm2SGnrQnpAxHNT',
    },
    {
        description: 'IBM Certified Solution Designer - RFT for Java',
        date: 'March 2009',
        image: '/Images/RFT.jpg',
        download: 'https://drive.google.com/uc?export=download&id=11SX7JtXCTOrIShoBlQ5_pKQP_BsVARUR',
    },
    {
        description: 'Bachelor of Science in Computer Engineering',
        date: 'March 2008',
        image: '/Images/Diploma.jpg',
        download: 'https://drive.google.com/uc?export=download&id=1NGiHtuhKYuZB97uX77AEEed7wWIPC2da',
    },
]

function Certification() {
    const [selected, setSelected] = useState(null)

    return (
        <section id="credential">
            <div className='container-fluid bg-light'>
                <div className='container py-5'>
                    <div className='row'>
                        <h1 className='text-start text-primary'>
                            <i className="bi bi-mortarboard"
                                style={{ fontSize: "35px" }}></i>
                            {" "}Credentials
                        </h1>
                    </div>
                    <div className='container px-5'>
                        <div className='row'>
                            <div className='col-md-7 mb-5'>
                                <h4 className="text-start text-primary">Certifications</h4>
                                <table className="table table-light">
                                    <thead>
                                        <tr>
                                            <th className='text-start align-middle'>Description</th>
                                            <th>Date</th>
                                            <th>View</th>
                                            <th>Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {certifications.map((certification) => (
                                            <tr key={certification.description}>
                                                <td className='text-start align-middle'>{certification.description}</td>
                                                <td className='align-middle'>{certification.date}</td>
                                                <td className='align-middle'>
                                                    <button type='button'
                                                        className='btn btn-success'
                                                        onClick={() => setSelected(certification)}>
                                                        <i className="bi bi-eye"></i>
                                                    </button>
                                                </td>
                                                <td className='align-middle'>
                                                    <a className='btn btn-success'
                                                        href={certification.download}>
                                                        <i className="bi bi-cloud-download"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='col-md-5'>
                                <h4 className="text-start text-primary">Trainings</h4>
                                <table className="table table-light">
                                    <thead>
                                        <tr>
                                            <th className='text-start align-middle'>Courses</th>
                                            <th>Date</th>                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='text-start align-middle'>Laravel for Beginners: Make Blog in Laravel 5.2</td>
                                            <td className='align-middle'>May 2021</td>                                       
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>Complete Bootstrap 4 Course</td>                                            
                                            <td className='align-middle'>January 2020</td>                                        
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>The Complete React Developer Course</td>                                            
                                            <td className='align-middle'>August 2019</td>                                     
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>Modern JavaScript for Beginners</td>                                            
                                            <td className='align-middle'>December 2018</td>                                          
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>PRINCE2</td>                                    
                                            <td className='align-middle'>April 2016</td>                                       
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>Selenium</td>                                            
                                            <td className='align-middle'>February 2016</td>                                        
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>MS – Coded UI Testing</td>                                    
                                            <td className='align-middle'>May 2015</td>                                       
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>Agile Team Practices with Scrum</td>                                            
                                            <td className='align-middle'>January 2015</td>                                         
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>Scrum Fundamentals</td>                                            
                                            <td className='align-middle'>November 2014</td>                                  
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>Software Engineering Essentials</td>                                            
                                            <td className='align-middle'>October 2014</td>                                    
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>CSTE Training</td>                                            
                                            <td className='align-middle'>May 2012</td>                               
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>Z/Os Basic</td>                                            
                                            <td className='align-middle'>November 2011</td>                                        
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>Introduction to Mainframe</td>                                            
                                            <td className='align-middle'>November 2011</td>                                
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>HP Test Tools – QTP, QC</td>                                            
                                            <td className='align-middle'>March 2009</td>                                    
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>IBM Test Tools – RFT, RMT, RCQ</td>                                            
                                            <td className='align-middle'>September 2009</td>                              
                                        </tr>
                                        <tr>
                                            <td className='text-start align-middle'>Accenture Testing Boot camp</td>                                            
                                            <td className='align-middle'>August 2008</td>                                      
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selected && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    onClick={() => setSelected(null)}>
                    <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
                        onClick={(event) => event.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selected.description} ({selected.date})</h5>
                                <button type="button" className="btn-close" aria-label="Close"
                                    onClick={() => setSelected(null)}></button>
                            </div>
                            <div className="modal-body bg-light">
                                <img src={selected.image} alt={selected.description} className="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Certification