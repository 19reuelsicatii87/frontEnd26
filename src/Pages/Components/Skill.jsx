const skillGroups = [
    {
        icon: 'bi-diagram-3',
        title: 'Quality Leadership & Strategy',
        description: 'Building quality into delivery through clear strategy, collaborative leadership, and risk-based execution.',
        skills: [
            'Test Strategy & Planning',
            'QA & SDET Leadership',
            'Agile & Scrum',
            'Risk-Based Testing',
            'Team Mentoring',
            'Cross-Functional Delivery',
            'Jira',
            'PRINCE2',
        ],
    },
    {
        icon: 'bi-code-slash',
        title: 'Test Automation Engineering',
        description: 'Designing maintainable automation frameworks for reliable web and service-level validation.',
        skills: [
            'Java',
            'Selenium WebDriver',
            'Cucumber BDD',
            'TestNG',
            'REST Assured',
            'Framework Architecture',
            'Robot Framework',
            'Appium',
        ],
    },
    {
        icon: 'bi-speedometer2',
        title: 'API, Performance & Test Coverage',
        description: 'Validating functionality, integrations, data, and production readiness across critical workflows.',
        skills: [
            'JMeter',
            'Performance & Load Testing',
            'Postman',
            'API Testing',
            'Database Validation & SQL',
            'Web Application Testing',
            'Mobile Testing',
            'Windows Application Testing',
            'Datadog',
        ],
    },
    {
        icon: 'bi-cloud-check',
        title: 'CI/CD & AWS',
        description: 'Integrating quality checks into delivery pipelines and supporting cloud-based releases.',
        skills: [
            'Jenkins',
            'GitHub Actions',
            'Maven',
            'npm',
            'Git & Bitbucket',
            'AWS EC2 & ECS',
            'CodePipeline, CodeBuild & CodeDeploy',
            'CloudFront & Route 53',
        ],
    },
    {
        icon: 'bi-window',
        title: 'Full-Stack Development',
        description: 'Supporting quality engineering with practical knowledge across modern web application stacks.',
        skills: [
            'React',
            'JavaScript',
            'HTML & CSS',
            'Bootstrap',
            'Spring Boot',
            'Laravel',
            'ColdFusion',
        ],
    },
]

const enterpriseTools = [
    'Microsoft TFS',
    'IBM RFT, RMT & RCQ',
    'HP QTP & Quality Center',
    'Telerik Test Studio',
    'Visual Studio CUIT, Web Performance & Load Test',
    'TSO, ISPF, SPDF, QMF & File-Aid',
]

function Skill() {
    return (
        <section id='skill' aria-labelledby='skills-heading'>
            <div className='container py-5'>
                <div className='row justify-content-center mb-5'>
                    <div className='col-lg-10 text-center'>
                        <p className='text-primary fw-semibold text-uppercase mb-2'>
                            Leadership, Engineering &amp; Delivery
                        </p>
                        <h2 id='skills-heading' className='display-6 fw-bold mb-3'>
                            Technical Skills
                        </h2>
                        <p className='lead text-body-secondary mb-0'>
                            A quality engineering toolkit spanning strategy, scalable automation,
                            performance testing, cloud delivery, and hands-on software development.
                        </p>
                    </div>
                </div>

                <div className='row g-4'>
                    {skillGroups.map((group, index) => (
                        <div
                            className={index === skillGroups.length - 1 ? 'col-lg-12' : 'col-md-6'}
                            key={group.title}
                        >
                            <article className='card h-100 border-0 shadow-sm'>
                                <div className='card-body p-4'>
                                    <div className='d-flex align-items-center mb-3'>
                                        <span
                                            className='bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-3 flex-shrink-0'
                                            style={{ width: '44px', height: '44px' }}
                                        >
                                            <i className={`bi ${group.icon} fs-5`} aria-hidden='true'></i>
                                        </span>
                                        <h3 className='h4 fw-bold mb-0'>{group.title}</h3>
                                    </div>
                                    <p className='text-body-secondary'>{group.description}</p>
                                    <div className='d-flex flex-wrap gap-2'>
                                        {group.skills.map((skill) => (
                                            <span
                                                className='badge rounded-pill bg-white text-primary border border-primary px-3 py-2'
                                                key={skill}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>

                <div className='card border-0 bg-light mt-4'>
                    <div className='card-body p-4'>
                        <h3 className='h5 fw-bold mb-2'>
                            <i className='bi bi-boxes text-primary me-2' aria-hidden='true'></i>
                            Additional Enterprise Tools
                        </h3>
                        <p className='text-body-secondary mb-0'>{enterpriseTools.join(' · ')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill