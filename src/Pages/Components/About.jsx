// Ordered so wide (featured) and narrow pills alternate sides on each row.
const expertise = [
    { skill: 'QA & SDET Leadership', featured: true },
    { skill: 'API Testing & REST Assured', featured: false },
    { skill: 'JMeter Performance Testing', featured: false },
    { skill: 'Automation Framework Architecture', featured: true },
    { skill: 'Java, Selenium, Cucumber & TestNG', featured: true },
    { skill: 'AWS & Cloud Quality Engineering', featured: false },
    { skill: 'React, Bootstrap & Spring Boot', featured: false },   
    { skill: 'CI/CD, Jenkins & GitHub Actions', featured: true },
    { skill: 'Git and AWS Services', featured: true },
    { skill: 'Laravel & ColdFusion', featured: false }
]

const impactHighlights = [
    {
        icon: 'bi-lightning-charge',
        title: 'Accelerated regression testing',
        detail: 'Reduced regression execution time by 80% through maintainable, risk-based test automation.',
    },
    {
        icon: 'bi-infinity',
        title: 'Removed a timezone bottleneck',
        detail: 'Cut the wait for automated test results by about 16 hours for US delivery teams.'
    },
    {
        icon: 'bi-people',
        title: 'Scaled high-performing teams',
        detail: 'Led and mentored a distributed team of 3 engineers across concurrent web and API initiatives.',
    },
    {
        icon: 'bi-speedometer2',
        title: 'Validated production readiness',
        detail: 'Confirmed key workflows could handle 100%, 150%, and 200% peak production concurrency in UAT before release.',
    },
]

const workHistory = [
    {
        role: 'Test Manager / SDET',
        company: 'Semify',
        dates: 'Jun 2023 – Present',
    },
    {
        role: 'Scrum Master / Test Manager',
        company: 'Axadra Ventures Inc.',
        dates: 'Sep 2017 – Jun 2023',
    },
    {
        role: 'Test Manager',
        company: 'Get Qualified Australia',
        dates: 'Sep 2016 – Mar 2017',
    },
    {
        role: 'Test Manager',
        company: 'CSGI – Boylesports',
        dates: 'May 2013 – Sep 2016',
    },
    {
        role: 'Senior Quality Analyst',
        company: 'UnitedHealth Group',
        dates: 'Sep 2011 – Nov 2012',
    },
    {
        role: 'Quality Analyst',
        company: 'Accenture Inc.',
        dates: 'Jul 2008 – Sep 2011',
    },
]

function About() {
    return (
        <section id='about-me' className='bg-light' aria-labelledby='about-heading'>
            <div className='container py-5'>
                <div className='row justify-content-center mb-5'>
                    <div className='col-lg-10 text-center'>
                        <p className='text-primary fw-semibold text-uppercase mb-2'>Quality Engineering Leadership</p>
                        <h2 id='about-heading' className='display-6 fw-bold mb-3'>
                            Test Manager &amp; SDET
                        </h2>
                        <p className='lead text-body-secondary mb-3'>
                            Quality engineering leader with 18+ years of experience building test strategies,
                            scalable automation frameworks, and high-performing teams for web and API products.
                            Combines hands-on SDET expertise with test management and Agile leadership to embed
                            quality throughout the software delivery lifecycle.
                        </p>
                        <p className='mb-0'>
                            Experienced across Java, Selenium, Cucumber, TestNG, REST Assured, JMeter, CI/CD,
                            AWS, and modern web technologies. IBM Rational Functional Tester certified,
                            Scrum Master certified, and a Six Sigma Green Belt practitioner.
                        </p>
                    </div>
                </div>

                <div className='row g-4 mb-5'>
                    <div className='col-lg-5 d-flex flex-column'>
                        <h3 className='h4 fw-bold mb-3'>
                            <i className='bi bi-tools text-primary me-2' aria-hidden='true'></i>
                            Core Expertise
                        </h3>
                        <div
                            className='d-grid gap-2 flex-grow-1'
                            style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '1fr' }}
                        >
                            {expertise.map(({ skill, featured }) => (
                                <span
                                    key={skill}
                                    className={`badge rounded-pill text-wrap px-3 py-2 d-flex align-items-center justify-content-center ${
                                        featured
                                            ? 'text-bg-primary fs-6'
                                            : 'bg-white text-primary border border-2 border-primary'
                                    }`}
                                    style={{ gridColumn: featured ? 'span 2' : 'span 1' }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='col-lg-7'>
                        <h3 className='h4 fw-bold mb-3'>
                            <i className='bi bi-graph-up-arrow text-primary me-2' aria-hidden='true'></i>
                            Selected Impact
                        </h3>
                        <div className='row g-3'>
                            {impactHighlights.map((highlight) => (
                                <div className='col-md-6' key={highlight.title}>
                                    <article className='card h-100 border-0 shadow-sm'>
                                        <div className='card-body'>
                                            <i
                                                className={`bi ${highlight.icon} text-primary fs-4`}
                                                aria-hidden='true'
                                            ></i>
                                            <h4 className='h6 fw-bold mt-2'>{highlight.title}</h4>
                                            <p className='small text-body-secondary mb-0'>{highlight.detail}</p>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className='h4 fw-bold mb-4'>
                        <i className='bi bi-briefcase text-primary me-2' aria-hidden='true'></i>
                        Career Experience
                    </h3>
                    <div className='row g-3'>
                        {workHistory.map((job) => (
                            <div className='col-md-6 col-lg-4' key={`${job.company}-${job.dates}`}>
                                <article className='card h-100 border-0 shadow-sm'>
                                    <div className='card-body'>
                                        <p className='small text-primary fw-semibold mb-1'>{job.dates}</p>
                                        <h4 className='h5 fw-bold mb-1'>{job.role}</h4>
                                        <p className='text-body-secondary mb-0'>{job.company}</p>
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

export default About