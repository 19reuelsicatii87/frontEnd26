const impactHighlights = [
    {
        icon: 'bi-arrow-repeat',
        title: 'Led Agile adoption',
        detail: 'Transitioned the R&D department from traditional project management to a practical Scrum delivery model.',
    },
    {
        icon: 'bi-calendar-check',
        title: 'Improved delivery predictability',
        detail: 'Used two-week sprints, team capacity, story points, and velocity trends to guide realistic commitments.',
    },
    {
        icon: 'bi-bar-chart-line',
        title: 'Increased delivery visibility',
        detail: 'Created Jira dashboards, sprint velocity reports, KPI reporting, and workflow views for day-to-day decisions.',
    },
    {
        icon: 'bi-shield-check',
        title: 'Embedded continuous improvement',
        detail: 'Turned retrospective findings into tracked process and quality improvements while helping remove delivery blockers.',
    },
]

const scrumPractices = [
    'Servant Leadership',
    'Sprint Planning',
    'Backlog Refinement',
    'Daily Scrum Facilitation',
    'Sprint Reviews',
    'Sprint Retrospectives',
    'Impediment Removal',
    'Capacity & Velocity Planning',
    'Team Coaching & Mentoring',
    'Jira Administration',
    'SDLC & Workflow Design',
    'Continuous Improvement',
]

const leadershipContributions = [
    'Facilitated the full Scrum event cycle for a cross-functional team of up to nine people delivering web applications, internal systems, and client projects.',
    'Partnered with the Product Owner, developers, and QA specialists to refine priorities, clarify scope, estimate work, and maintain a delivery-ready backlog.',
    'Guided sprint commitments using available team capacity, story points, current workload, and prior velocity rather than unsupported delivery targets.',
    'Surfaced and helped resolve day-to-day blockers so assigned work continued progressing through each two-week sprint.',
    'Coached team members through objective setting, performance feedback, development needs, and role-relevant learning opportunities.',
]

const deliveryContributions = [
    'Defined and implemented the software delivery lifecycle and Jira workflows supporting development and QA.',
    'Configured Jira users, fields, screens, workflows, notifications, permissions, dashboards, and delivery reporting.',
    'Introduced timesheet, Gantt chart, and automation capabilities in Jira to improve work visibility and reduce repetitive administration.',
    'Produced sprint velocity and team KPI reports to support planning, progress reviews, and continuous improvement.',
    'Connected Agile delivery with quality engineering by establishing a hybrid automation framework using Selenium, REST Assured, Cucumber, Maven, Bitbucket, and Jenkins.',
]

function ScrumMasterExp() {
    return (
        <section id='scrum-master' className='bg-light' aria-labelledby='scrum-master-heading'>
            <div className='container py-5'>
                <div className='row align-items-center g-4 mb-5'>
                    <div className='col-lg-6 text-start'>
                        <p className='text-primary fw-semibold text-uppercase mb-2'>
                            Scrum Master &amp; Team Leadership
                        </p>
                        <h1 id='scrum-master-heading' className='display-4 fw-bold mb-3'>
                            Senior Scrum Master
                        </h1>
                        <p className='lead text-body-secondary mb-3'>
                            Scrum Master and quality engineering leader who helps cross-functional teams turn
                            priorities into predictable delivery. Experienced in leading two-week sprints,
                            coaching teams, removing impediments, and building transparent Jira workflows.
                        </p>
                        <p className='mb-4'>
                            Led Agile adoption for an R&amp;D organization and supported a Scrum team of up to
                            nine people delivering web applications, internal systems, and client projects.
                        </p>
                        <div className='d-flex flex-wrap gap-2'>
                            <span className='badge text-bg-primary fs-6 px-3 py-2'>Scrum Master Certified</span>
                            <span className='badge bg-white text-primary border border-primary fs-6 px-3 py-2'>
                                Axadra Ventures Inc.
                            </span>
                            <span className='badge bg-white text-primary border border-primary fs-6 px-3 py-2'>
                                Sep 2017 – Jun 2023
                            </span>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img
                            src='/Images/ScrumMasterBanner.jpg'
                            alt='Scrum team collaborating during an Agile planning session'
                            className='img-fluid w-100 rounded shadow'
                            style={{ maxHeight: '350px', objectFit: 'cover' }}
                        />
                    </div>
                </div>

                <div className='mb-5'>
                    <h2 className='h3 fw-bold text-center mb-4'>Selected Agile Impact</h2>
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
                                    Core Scrum Expertise
                                </h2>
                                <div className='d-flex flex-wrap gap-2'>
                                    {scrumPractices.map((practice) => (
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
                                    Served as a facilitator, coach, and delivery partner to the Product Owner,
                                    developers, and QA specialists throughout the product delivery lifecycle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row g-4'>
                    <div className='col-lg-6'>
                        <h2 className='h3 fw-bold text-start mb-3'>
                            <i className='bi bi-people-fill text-primary me-2' aria-hidden='true'></i>
                            Agile Leadership
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
                            <i className='bi bi-kanban text-primary me-2' aria-hidden='true'></i>
                            Delivery Enablement
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

export default ScrumMasterExp