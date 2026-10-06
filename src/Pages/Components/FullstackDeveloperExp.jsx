const impactHighlights = [
    {
        icon: 'bi-arrow-repeat',
        title: 'Owned the full lifecycle',
        detail: 'Took web applications from conception through analysis, build, deployment, and post-release maintenance.',
    },
    {
        icon: 'bi-cart-check',
        title: 'Shipped ecommerce',
        detail: 'Delivered order tracking, lead capture, marketing email, and Paymongo billing in a customer-facing store.',
    },
    {
        icon: 'bi-people',
        title: 'Built the operating CRM',
        detail: 'Added a dashboard to create, review, and maintain orders, leads, products, and packages.',
    },
    {
        icon: 'bi-cloud-check',
        title: 'AWS cloud delivery',
        detail: 'Uses EC2, ECS, CodePipeline, CodeBuild, CodeDeploy, CloudFront, and Route 53 to build, release, and serve applications.',
    },
]

const engineeringSkills = [
    'React',
    'JavaScript',
    'HTML & CSS',
    'Bootstrap',
    'Laravel',
    'Spring Boot',
    'ColdFusion',
    'AWS EC2 & ECS',
    'CodePipeline',
    'CodeBuild & CodeDeploy',
    'CloudFront & Route 53',
    'GitHub Actions & Jenkins',
]

const productContributions = [
    'Built web applications with React, Bootstrap, and Laravel, including login and logout.',
    'Implemented image upload, Excel download, manual payment, and Paymongo as the billing gateway.',
    'Automated simple marketing email and captured leads from both the ecommerce store and the real-estate site.',
    'Created CRUD flows for leads, products, packages, and placed orders in the supporting CRM.',
    'Connected a real-estate listing site to Facebook Messenger so visitors can inquire without leaving the page.',
]

const awsContributions = [
    'Runs application compute on AWS EC2 and container workloads on Amazon ECS.',
    'Builds release pipelines with AWS CodePipeline, CodeBuild, and CodeDeploy.',
    'Serves applications through Amazon CloudFront and manages DNS with Amazon Route 53.',
    'Pairs AWS delivery with GitHub Actions, Jenkins, Git, and Bitbucket so builds stay repeatable.',
    'Maintains and upgrades released software after deployment, from defect fixes through feature changes.',
]

const portfolio = [
    {
        image: '/Images/Malasakit.png',
        title: 'Networking Ecommerce Website',
        detail: 'Customers place and track orders, pay through Paymongo, and receive marketing material after submitting a lead.',
        href: 'https://malasakitoneopti.netlify.app/',
        label: 'Visit store',
    },
    {
        image: '/Images/Malasakit-Dashboard.png',
        title: 'Ecommerce CRM',
        detail: 'The operations dashboard behind the store, with CRUD for placed orders and captured leads.',
        href: 'https://malasakitoneopti.netlify.app/dashboard/login',
        label: 'Visit CRM',
    },
    {
        image: '/Images/Everra.png',
        title: 'Real Estate Website',
        detail: 'Visitors browse for-sale and rental listings, submit leads, and continue the conversation in Facebook Messenger.',
        href: 'https://everra.net/',
        label: 'Visit site',
    },
]

function FullstackDeveloperExp() {
    return (
        <section id='fullstack-developer' className='bg-light' aria-labelledby='fullstack-heading'>
            <div className='container py-5'>
                <div className='row align-items-center g-4 mb-5'>
                    <div className='col-lg-6 text-start'>
                        <p className='text-primary fw-semibold text-uppercase mb-2'>
                            Product Engineering &amp; Cloud Delivery
                        </p>
                        <h1 id='fullstack-heading' className='display-4 fw-bold mb-3'>
                            Full-Stack Developer
                        </h1>
                        <p className='lead text-body-secondary mb-3'>
                            Full-stack developer who ships customer-facing web applications and the
                            AWS pipelines that build, deploy, and serve them.
                        </p>
                        <p className='mb-4'>
                            Hands-on with React, JavaScript, Bootstrap, Laravel, Spring Boot, and
                            ColdFusion, plus AWS EC2, ECS, CodePipeline, CodeBuild, CodeDeploy,
                            CloudFront, and Route 53.
                        </p>
                        <div className='d-flex flex-wrap gap-2'>
                            <span className='badge text-bg-primary fs-6 px-3 py-2'>React &amp; Laravel</span>
                            <span className='badge bg-white text-primary border border-primary fs-6 px-3 py-2'>
                                AWS
                            </span>
                            <span className='badge bg-white text-primary border border-primary fs-6 px-3 py-2'>
                                Spring Boot
                            </span>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img
                            src='/Images/FullStackDevBanner.jpg'
                            alt='Full-stack development banner'
                            className='img-fluid w-100 rounded shadow'
                        />
                    </div>
                </div>

                <div className='mb-5'>
                    <h2 className='h3 fw-bold text-center mb-4'>Selected Product Impact</h2>
                    <div className='row g-3'>
                        {impactHighlights.map((highlight) => (
                            <div className='col-md-6 col-xl-3' key={highlight.title}>
                                <article className='card h-100 border-0 shadow-sm'>
                                    <div className='card-body text-start text-primary'>
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
                            <div className='card-body p-4 text-primary'>
                                <h2 className='h3 fw-bold mb-3'>
                                    <i className='bi bi-code-slash text-primary me-2' aria-hidden='true'></i>
                                    Core Engineering Skills
                                </h2>
                                <div className='d-flex flex-wrap gap-2'>
                                    {engineeringSkills.map((skill) => (
                                        <span
                                            className='badge rounded-pill bg-white text-primary border border-primary text-wrap px-3 py-2'
                                            key={skill}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <div className='card h-100 border-0 shadow-sm'>
                            <div className='card-body p-4 text-start'>
                                <p className='text-primary fw-semibold mb-1'>AWS CLOUD DELIVERY</p>
                                <h2 className='h3 fw-bold mb-3'>Build, release, and serve</h2>
                                <p className='mb-0'>
                                    Application compute on EC2 and ECS. Release automation through
                                    CodePipeline, CodeBuild, and CodeDeploy. Public delivery through
                                    CloudFront, with DNS on Route 53.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row g-4 mb-5'>
                    <div className='col-lg-6'>
                        <h2 className='h3 fw-bold text-start mb-3'>
                            <i className='bi bi-window text-primary me-2' aria-hidden='true'></i>
                            Application Delivery
                        </h2>
                        <ul className='list-group list-group-flush shadow-sm'>
                            {productContributions.map((contribution) => (
                                <li className='list-group-item p-3 text-start text-primary' key={contribution}>
                                    <i className='bi bi-check-circle-fill text-primary me-2' aria-hidden='true'></i>
                                    {contribution}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-lg-6'>
                        <h2 className='h3 fw-bold text-start mb-3'>
                            <i className='bi bi-cloud text-primary me-2' aria-hidden='true'></i>
                            AWS &amp; Release Engineering
                        </h2>
                        <ul className='list-group list-group-flush shadow-sm'>
                            {awsContributions.map((contribution) => (
                                <li className='list-group-item p-3 text-start text-primary' key={contribution}>
                                    <i className='bi bi-check-circle-fill text-primary me-2' aria-hidden='true'></i>
                                    {contribution}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className='h3 fw-bold text-center mb-4'>Shipped Applications</h2>
                    <div className='row g-4'>
                        {portfolio.map((project) => (
                            <div className='col-lg-4' key={project.title}>
                                <article className='card h-100 border-0 shadow-sm'>
                                    <img src={project.image} alt='' className='card-img-top p-3' />
                                    <div className='card-body text-start d-flex flex-column'>
                                        <h3 className='h5 fw-bold'>{project.title}</h3>
                                        <p className='text-body-secondary'>{project.detail}</p>
                                        <a
                                            href={project.href}
                                            className='btn btn-primary mt-auto align-self-start'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            {project.label}
                                            <i className='bi bi-box-arrow-in-up-right ms-2' aria-hidden='true'></i>
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

export default FullstackDeveloperExp
