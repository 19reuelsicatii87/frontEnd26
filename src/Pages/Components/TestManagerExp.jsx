const impactHighlights = [
    {
        icon: 'bi-signpost-split',
        title: 'Standardized the test lifecycle',
        detail: 'Designed an adaptive STLC aligned to the Agile Manifesto and secured the team’s test assets for reuse.',
    },
    {
        icon: 'bi-bar-chart-line',
        title: 'Made quality measurable',
        detail: 'Reported planned versus actual progress weekly, and velocity, chargeability, and QA overruns monthly.',
    },
    {
        icon: 'bi-lightning-charge',
        title: 'Accelerated regression testing',
        detail: 'Reduced regression execution time by 80% through maintainable, risk-based test automation.',
    },
    {
        icon: 'bi-shield-check',
        title: 'Assessed release readiness',
        detail: 'Confirmed key workflows could handle 100%, 150%, and 200% peak production concurrency in UAT before release.',
    },
]

const testPractices = [
    'Test Strategy & Planning',
    'STLC Standardization',
    'Release Readiness',
    'Risk-Based Testing',
    'Defect Lifecycle Management',
    'QA Metrics & KPIs',
    'Jira Workflow & Service Desk',
    'Stakeholder Reporting',
    'QA Hiring & Coaching',
    'Onshore / Offshore Delivery',
    'Hybrid Test Automation',
    'Performance & Load Testing',
]

const leadershipContributions = [
    'Partnered with HR to screen and hire QA applicants, then set team and individual objectives from company goals.',
    'Ran objective setting in the first quarter and performance evaluations in the second and fourth quarters.',
    'Coached team members through development areas and directed them to Axadra Academy training.',
    'Managed team workload and prepared bi-monthly resource adjustments for Finance.',
    'Led a weekly QA training forum covering the business, the products, and core testing concepts.',
]

const deliveryContributions = [
    'Built test strategy and test plans from business requirements, then assigned work across onshore and offshore testers.',
    'Facilitated daily stand-ups, reviewed test deliverables, and served as the QA point of contact for project stakeholders.',
    'Defined the software delivery workflow in Jira, including users, fields, screens, notifications, permissions, and Jira Service Desk.',
    'Standardized scenarios in Gherkin and oversaw a hybrid automation framework using Selenium, Appium, Cucumber, Maven, and Jenkins.',
    'Established automated smoke, regression, performance, and load suites, then sent weekly and monthly quality reports to the programme manager.',
]

function TestManagerExp() {
    return (
        <section id='test-manager' className='bg-light' aria-labelledby='test-manager-heading'>
            <div className='container py-5'>
                <div className='row align-items-center g-4 mb-5'>
                    <div className='col-lg-6 text-start'>
                        <p className='text-primary fw-semibold text-uppercase mb-2'>
                            Strategic QA Leadership
                        </p>
                        <h1 id='test-manager-heading' className='display-4 fw-bold mb-3'>
                            Test Manager
                        </h1>
                        <p className='lead text-body-secondary mb-3'>
                            Quality leader who builds the test strategy, coaches the team, and gives
                            stakeholders clear evidence for release decisions.
                        </p>
                        <p className='mb-4'>
                            Test Manager who established the QA
                            operating model across hiring, an adaptive STLC, Jira workflow, distributed
                            execution, and executive metrics.
                        </p>
                        <div className='d-flex flex-wrap gap-2'>
                            <span className='badge text-bg-primary fs-6 px-3 py-2'>Test Manager</span>
                            <span className='badge bg-white text-primary border border-primary fs-6 px-3 py-2'>
                                Semify
                            </span>
                            <span className='badge bg-white text-primary border border-primary fs-6 px-3 py-2'>
                                April 2017 – Present
                            </span>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img
                            src='/Images/TestManagerBanner2.jpg'
                            alt='Test Manager overview of QA leadership, test strategy, and metrics reporting'
                            className='img-fluid w-100 rounded shadow'
                        />
                    </div>
                </div>

                <div className='mb-5'>
                    <h2 className='h3 fw-bold text-center mb-4'>Selected QA Impact</h2>
                    <div className='row g-3'>
                        {impactHighlights.map((highlight) => (
                            <div className='col-md-6 col-xl-3' key={highlight.title}>
                                <article className='card h-100 border-0 shadow-sm'>
                                    <div className='card-body text-start'>
                                        <i
                                            className={`bi ${highlight.icon} text-primary fs-3`}
                                            aria-hidden='true'
                                        ></i>
                                        <h3 className='h5 fw-bold mt-3'>{highlight.title}</h3>
                                        <p className='text-body-secondary mb-0'>{highlight.detail}</p>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='row g-4 mb-5'>
                    <div className='col-lg-5'>
                        <div className='card h-100 border-0 shadow-sm'>
                            <div className='card-body p-4'>
                                <h2 className='h3 fw-bold mb-3'>
                                    <i className='bi bi-compass text-primary me-2' aria-hidden='true'></i>
                                    Core QA Leadership
                                </h2>
                                <div className='d-flex flex-wrap gap-2'>
                                    {testPractices.map((practice) => (
                                        <span
                                            className='badge rounded-pill bg-white text-primary border border-primary text-wrap px-3 py-2'
                                            key={practice}
                                        >
                                            {practice}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <div className='card h-100 border-0 shadow-sm'>
                            <div className='card-body p-4 text-start'>
                                <p className='text-primary fw-semibold mb-1'>SCRUM MASTER / TEST MANAGER</p>
                                <h2 className='h3 fw-bold mb-1'>Axadra Ventures Inc.</h2>
                                <p className='text-body-secondary mb-3'>September 2017 – June 2023</p>
                                <p className='mb-0'>
                                    Led QA talent, test planning, onshore and offshore execution, and the
                                    quality metrics reported to project stakeholders and the programme manager.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row g-4'>
                    <div className='col-lg-6'>
                        <h2 className='h3 fw-bold text-start mb-3'>
                            <i className='bi bi-people-fill text-primary me-2' aria-hidden='true'></i>
                            Team Leadership
                        </h2>
                        <ul className='list-group list-group-flush shadow-sm'>
                            {leadershipContributions.map((contribution) => (
                                <li className='list-group-item p-3 text-start text-primary' key={contribution}>
                                    <i className='bi bi-check-circle-fill text-primary me-2' aria-hidden='true'></i>
                                    {contribution}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-lg-6'>
                        <h2 className='h3 fw-bold text-start mb-3'>
                            <i className='bi bi-clipboard-check text-primary me-2' aria-hidden='true'></i>
                            Strategy &amp; Execution
                        </h2>
                        <ul className='list-group list-group-flush shadow-sm'>
                            {deliveryContributions.map((contribution) => (
                                <li className='list-group-item p-3 text-start text-primary' key={contribution}>
                                    <i className='bi bi-check-circle-fill text-primary me-2' aria-hidden='true'></i>
                                    {contribution}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestManagerExp
