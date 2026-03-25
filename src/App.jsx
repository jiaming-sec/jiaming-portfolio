import profileImg from './assets/profile.png'

const projects = [
  {
    title: 'Splunk SOAR Account Remediation Playbook',
    description:
      'Designed and tested an automated response workflow that connected Splunk SOAR with Microsoft Graph API to support compromised account remediation and improve operational consistency.',
    impact:
      'Reduced manual response steps and created a more repeatable remediation process.',
    tags: ['Splunk SOAR', 'Microsoft Graph API', 'Identity Security'],
  },
  {
    title: 'Detection Engineering in Splunk',
    description:
      'Improved monitoring quality by refining correlation searches, tuning log ingestion pipelines, and strengthening alert logic to increase visibility into suspicious activity.',
    impact:
      'Helped improve signal quality and supported more efficient investigation workflows.',
    tags: ['Splunk', 'Detection Engineering', 'Threat Monitoring'],
  },
  {
    title: 'Network Traffic Analysis with Wireshark',
    description:
      'Analyzed live traffic to identify suspicious DNS behavior, unexpected patterns, and connectivity issues, then translated findings into stronger investigation and monitoring practices.',
    impact:
      'Strengthened visibility across network investigations and incident analysis.',
    tags: ['Wireshark', 'Network Analysis', 'Investigation'],
  },
]

const skillGroups = [
  {
    title: 'Security Operations',
    items: [
      'Incident Response',
      'Threat Detection',
      'Alert Triage',
      'Phishing Investigation',
      'Log Analysis',
    ],
  },
  {
    title: 'Detection & Automation',
    items: [
      'Splunk',
      'Detection Engineering',
      'Correlation Search Tuning',
      'SOAR Workflow Development',
      'Python Scripting',
    ],
  },
  {
    title: 'Cloud & Identity Security',
    items: [
      'AWS Security',
      'IAM',
      'Azure / Entra ID',
      'MFA / SSO',
      'Conditional Access',
      'Identity Security',
    ],
  },
  {
    title: 'Network & Endpoint Security',
    items: [
      'Wireshark',
      'Network Traffic Analysis',
      'CrowdStrike',
      'Cortex XDR',
      'Firewall Log Analysis',
    ],
  },
  {
    title: 'Security Frameworks',
    items: ['Zero Trust', 'STRIDE', 'DREAD', 'NIST CSF', 'NIST 800-53'],
  },
]

const certifications = [
  'GIAC GCLD',
  'CompTIA Security+',
  'ISC2 CC',
  'AWS Certified Cloud Practitioner',
]

function ExperienceItem({ title, company, period, summary, bullets }) {
  return (
    <details className="experience-item">
      <summary className="experience-summary">
        <div className="experience-grid">
          <div className="experience-left">
            <h3>{title}</h3>
            <p className="company">{company}</p>
            <p className="period">{period}</p>
          </div>
          <div className="experience-middle">
            <p>{summary}</p>
          </div>
          <div className="experience-right">View details</div>
        </div>
      </summary>
      <div className="experience-content">
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </details>
  )
}

function App() {
  return (
    <div className="site-shell">
      <div className="bg-glow" />

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <div className="brand-mark">◈</div>
            <div>
              <p className="brand-name">Jiaming Qu</p>
              <p className="brand-role">Security Engineer</p>
            </div>
          </div>

          <nav className="nav">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-photo-card">
              <img src={profileImg} alt="Jiaming Qu" className="hero-photo" />
            </div>

            <div className="hero-copy">
              <div className="eyebrow-badge">
                <span className="dot" />
                Security Engineer · SOC · Incident Response · Cloud Security
              </div>

              <h1>
                Hi, I’m <span>Jiaming Qu.</span>
              </h1>

              <p className="hero-lead">
                I build practical security workflows that improve visibility,
                reduce manual work, and strengthen modern defense.
              </p>

              <div className="hero-body">
                <p>
                  I am a Security Engineer focused on security operations,
                  incident response, threat detection, and cloud security.
                </p>
                <p>
                  I currently work at George Washington University, where I
                  support monitoring, investigations, and response activities
                  across enterprise environments. My work includes improving
                  detection quality, analyzing suspicious activity, and helping
                  build more effective security workflows.
                </p>
                <p>
                  My background also includes cloud and identity security,
                  automation with Python and Splunk, and hands-on investigation
                  work with tools such as Cortex XDR and Wireshark. I enjoy
                  turning complex security tasks into practical processes that
                  are clearer, faster, and more consistent.
                </p>
              </div>

              <div className="hero-actions">
                <a href="#experience" className="btn btn-primary">
                  View Experience
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section overview-section">
          <div className="container">
            <div className="card overview-card">
              <div className="section-heading compact">
                <p className="eyebrow">Overview</p>
                {/*<h2>A concise view of my background and focus.</h2>*/}
              </div>

              <div className="overview-grid">
                <div className="mini-card">
                  <p className="mini-label">Current Role</p>
                  <p className="mini-value">
                    Security Engineer at George Washington University
                  </p>
                </div>
                <div className="mini-card">
                  <p className="mini-label">Core Focus</p>
                  <p className="mini-value">
                    Security Operations, Detection, Incident Response, and Cloud
                    Security
                  </p>
                </div>
                <div className="mini-card">
                  <p className="mini-label">Career Direction</p>
                  <p className="mini-value">
                    Security engineering roles centered on practical defense and
                    automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-divider">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Experience</p>
              {/*<h2>Professional Experience</h2>*/}
            </div>

            <div className="stack">
              <ExperienceItem
                title="Security Engineer"
                company="George Washington University"
                period="July 2024 – Present"
                summary="Security engineering work focused on monitoring, investigations, threat detection, automation, and cloud security support."
                bullets={[
                  'Automated security workflows using Python and Splunk to support continuous monitoring, URL analysis, email header inspection, and attachment sandboxing.',
                  'Improved detection quality by refining Splunk correlation searches, log ingestion, and alert logic.',
                  'Led investigations using Cortex XDR and Wireshark across endpoint and network activity.',
                  'Supported AWS security hardening through IAM, security groups, and GuardDuty monitoring.',
                ]}
              />

              <ExperienceItem
                title="Tech Support (Security)"
                company="George Washington University"
                period="May 2023 – July 2024"
                summary="Security support work spanning identity controls, endpoint security, troubleshooting, and operational process improvement."
                bullets={[
                  'Reviewed Azure Active Directory configurations and improved MFA and least-privilege controls.',
                  'Supported Cisco Secure Endpoint deployment across more than 1,500 devices.',
                  'Strengthened security operations through troubleshooting, endpoint support, and security-focused process improvement.',
                ]}
              />

              <ExperienceItem
                title="Network Security Engineer"
                company="Virginia University of Science and Technology"
                period="February 2022 – May 2023"
                summary="Security engineering support across firewall logging, threat detection, IAM improvement, and threat modeling practices."
                bullets={[
                  'Developed Python-based firewall log automation to improve visibility and reduce repetitive analysis tasks.',
                  'Supported real-time threat detection in Splunk and improved monitoring workflows.',
                  'Performed threat modeling using STRIDE and DREAD.',
                  'Helped strengthen IAM through MFA and conditional access policies.',
                ]}
              />
            </div>
          </div>
        </section>

        <section id="projects" className="section section-divider">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Projects</p>
              {/*<h2>Selected Work</h2>*/}
            </div>

            <div className="grid-3">
              {projects.map((project) => (
                <article className="card project-card" key={project.title}>
                  <p className="card-kicker">Featured Project</p>
                  <h3>{project.title}</h3>
                  <p className="project-text">{project.description}</p>
                  <p className="project-impact">{project.impact}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section section-divider">
          <div className="container skills-layout">
            <div>
              <div className="section-heading">
                <p className="eyebrow">Skills</p>
                {/*<h2>Core Capabilities</h2>*/}
              </div>

              <div className="skills-grid">
                {skillGroups.map((group) => (
                  <div className="card skill-card" key={group.title}>
                    <h3>{group.title}</h3>
                    <ul className="skill-list">
                      {group.items.map((item) => (
                        <li key={item}>
                          <span className="skill-dot" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="section-heading">
                <p className="eyebrow">Certifications</p>
                {/*<h2>Credentials</h2>*/}
              </div>

              <div className="card credential-card">
                {certifications.map((cert) => (
                  <div className="credential-row" key={cert}>
                    <span>{cert}</span>
                    <span className="verified">Verified</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-divider">
          <div className="container">
            <div className="card contact-card">
              <div className="section-heading compact">
                <p className="eyebrow">Contact</p>
                <h2>Let’s connect.</h2>
              </div>

              <p className="contact-text">
                I am open to security engineering opportunities, professional
                collaboration, and conversations around SOC operations, cloud
                security, threat detection, and automation-driven defense.
              </p>

              <div className="contact-grid">
                <a href="mailto:jiamingqu0728@gmail.com" className="contact-box">
                  <p className="contact-label">Email</p>
                  <p className="contact-value">jiamingqu0728@gmail.com</p>
                </a>
                <a
                  href="https://linkedin.com/in/jiaming-qu996/"
                  className="contact-box"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="contact-label">LinkedIn</p>
                  <p className="contact-value">linkedin.com/in/jiaming-qu996/</p>
                </a>
                <a
                  href="https://github.com/jiaming-sec"
                  className="contact-box"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="contact-label">GitHub</p>
                  <p className="contact-value">github.com/jiaming-sec</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Jiaming Qu. All rights reserved.</p>
          <p>Portfolio crafted for recruiters, hiring managers, and collaborators.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
