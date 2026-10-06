const impactHighlights = [
    {
        icon: 'bi-lightning-charge',
        title: 'Accelerated regression testing',
        detail: 'Reduced regression execution time by 80% through maintainable, risk-based test automation.',
    },
    {
        icon: 'bi-infinity',
        title: 'Removed a timezone bottleneck',
        detail: 'Cut the wait for automated test results by about 16 hours for US delivery teams.',
    },
    {
        icon: 'bi-people',
        title: 'Scaled automation delivery',
        detail: 'Led and mentored a distributed team of 3 engineers across concurrent web and API initiatives.',
    },
    {
        icon: 'bi-speedometer2',
        title: 'Validated production readiness',
        detail: 'Confirmed key workflows could handle 100%, 150%, and 200% peak production concurrency in UAT before release.',
    },
]

const sdetPractices = [
    'Selenium WebDriver',
    'Cucumber BDD',
    'TestNG',
    'REST Assured',
    'Page Object Model',
    'Appium',
    'JMeter',
    'Java',
    'Jenkins & Maven',
    'GitHub Actions',
    'SQL & Test Reporting',
    'CI/CD Quality Gates',
]

const frameworkContributions = [
    'Designed a reusable BDD automation framework with feature files, step definitions, object repositories, and the Page Object Model.',
    'Built web and mobile coverage with Selenium and Appium, and service-level validation with REST Assured.',
    'Set up automation servers and integrated Maven, Jenkins, GitHub, and Bitbucket so regression suites run from version control.',
    'Executed regression suites with parallel test threads and maintained the suite as the application under test changed.',
    'Published a reusable automation template and a social-media automation sample so new solutions can start from a working baseline.',
]

const reportingContributions = [
    'Generated ExtentReports from test execution and captured pass, fail, and execution results for every regression cycle.',
    'Stored automation results in a SQL database so current and previous runs can be compared reliably.',
    'Connected that database to Google Data Studio summary reports showing passed, failed, and total results.',
    'Built historical trend reports that show pass and fail movement for individual test cases over time.',
    'Reported automation progress and defects against the application under test, giving delivery teams evidence before release.',
]

const portfolio = [
    {
        image: '/Images/TestAuto_Template.png',
        title: 'Test Automation Template',
        detail: 'A reusable baseline that can be duplicated and deployed to start a new automation solution quickly.',
        href: 'https://github.com/19reuelsicatii87/App.TestAutoDemoOne',
    },
    {
        image: '/Images/SM_platform.png',
        title: 'Social Media Automation',
        detail: 'A sample solution that exercises social platforms and injects test data through an automated workflow.',
        href: 'https://github.com/19reuelsicatii87/App.SocialMediaBot',
    },
]

function AutomationArchitectExp() {
    return (
        <section id='automation-architect' className='bg-light' aria-labelledby='sdet-heading'>
            <div className='container py-5'>
                <div className='row align-items-center g-4 mb-5'>
                    <div className='col-lg-6 text-start'>
                        <p className='text-primary fw-semibold text-uppercase mb-2'>
                            Quality Engineering &amp; Test Automation
                        </p>
                        <h1 id='sdet-heading' className='display-4 fw-bold mb-3'>
                            Automation Architect
                        </h1>
                        <p className='lead text-body-secondary mb-3'>
                            Software development engineer in test who designs maintainable automation,
                            builds it into CI/CD, and turns execution results into release decisions.
                        </p>
                        <p className='mb-4'>
                            Hands-on across Java, Selenium, Cucumber, TestNG, REST Assured, Appium,
                            JMeter, Maven, Jenkins, and cloud delivery pipelines.
                        </p>
                        <div className='d-flex flex-wrap gap-2'>
                            <span className='badge text-bg-primary fs-6 px-3 py-2'>Lead SDET</span>
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
                            src='/Images/AutomationArchitect.jpg'
                            alt='Automation architecture covering BDD workflow, technology stack, and test reporting'
                            className='img-fluid w-100 rounded shadow'
                        />
                    </div>
                </div>

                <div className='mb-5'>
                    <h2 className='h3 fw-bold text-center mb-4'>Selected SDET Impact</h2>
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
                                    <i className='bi bi-code-slash text-primary me-2' aria-hidden='true'></i>
                                    Core SDET Expertise
                                </h2>
                                <div className='d-flex flex-wrap gap-2'>
                                    {sdetPractices.map((practice) => (
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
                                <p className='text-primary fw-semibold mb-1'>TEST MANAGER / SDET</p>
                                <h2 className='h3 fw-bold mb-1'>Semify</h2>
                                <p className='text-body-secondary mb-3'>June 2023 – Present</p>
                                <p className='mb-0'>
                                    Builds scalable automation and performance evidence for web and API
                                    products, then mentors engineers so quality stays inside the delivery pipeline.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row g-4 mb-5'>
                    <div className='col-lg-6'>
                        <h2 className='h3 fw-bold text-start mb-3'>
                            <i className='bi bi-diagram-3 text-primary me-2' aria-hidden='true'></i>
                            Framework Architecture
                        </h2>
                        <ul className='list-group list-group-flush shadow-sm'>
                            {frameworkContributions.map((contribution) => (
                                <li className='list-group-item p-3 text-start text-primary' key={contribution}>
                                    <i className='bi bi-check-circle-fill text-primary me-2' aria-hidden='true'></i>
                                    {contribution}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-lg-6'>
                        <h2 className='h3 fw-bold text-start mb-3'>
                            <i className='bi bi-bar-chart-line text-primary me-2' aria-hidden='true'></i>
                            Reporting &amp; Release Evidence
                        </h2>
                        <ul className='list-group list-group-flush shadow-sm'>
                            {reportingContributions.map((contribution) => (
                                <li className='list-group-item p-3 text-start text-primary' key={contribution}>
                                    <i className='bi bi-check-circle-fill text-primary me-2' aria-hidden='true'></i>
                                    {contribution}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className='h3 fw-bold text-center mb-4'>Automation in Practice</h2>
                    <div className='row g-4'>
                        {portfolio.map((project) => (
                            <div className='col-lg-6' key={project.title}>
                                <article className='card h-100 border-0 shadow-sm'>
                                    <img
                                        src={project.image}
                                        alt=''
                                        className='card-img-top p-3'
                                    />
                                    <div className='card-body text-start'>
                                        <h3 className='h5 fw-bold'>{project.title}</h3>
                                        <p className='text-body-secondary'>{project.detail}</p>
                                        <a
                                            href={project.href}
                                            className='btn btn-primary'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <i className='bi bi-github me-2' aria-hidden='true'></i>
                                            GitHub
                                        </a>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AutomationArchitectExp
