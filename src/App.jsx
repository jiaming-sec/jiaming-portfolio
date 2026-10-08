import profileImg from './assets/profile.png';

const experience = [
  {
    role: 'Cyber Defense Engineer', organization: 'Emory University', period: 'Sep 2026 – Present', place: 'Remote',
    summary: 'Enterprise incident investigation, security telemetry, network visibility, and risk reduction across Emory University and Emory Healthcare.',
    bullets: [
      'Investigate incidents across Emory University and Emory Healthcare by correlating identity, endpoint, email, and network telemetry to determine incident scope and containment.',
      'Monitor and analyze telemetry using CrowdStrike, Microsoft Defender, Entra ID, Duo, and Corelight/Snort to identify suspicious activity.',
      'Implement Akvorado for NetFlow and sFlow collection and analysis to improve network visibility and incident investigations.',
      'Review firewall exceptions and exposed or vulnerable systems; partner with stakeholders to remediate risk and strengthen security controls.'
    ]
  },
  {
    role: 'Security Engineer', organization: 'George Washington University', period: 'Jul 2024 – Sep 2026', place: 'Washington, DC',
    summary: 'Detection engineering, SOAR automation, and endpoint investigation with measurable improvements to detection quality and response speed.',
    bullets: [
      'Tuned Splunk correlation searches mapped to MITRE ATT&CK, reducing false positives by 20% through iterative validation.',
      'Automated phishing triage and identity response with Python, Splunk ES/SOAR, and Microsoft Graph API, reducing investigation time by 60%.',
      'Deployed and monitored SentinelOne across 5,000+ endpoints, investigating threats and supporting containment and remediation.',
      'Correlated endpoint, network, and identity data from Splunk, SentinelOne, and Entra ID to identify IOCs and determine incident scope.'
    ]
  },
  {
    role: 'Tech Support (Security)', organization: 'George Washington University', period: 'May 2023 – Jul 2024', place: 'Washington, DC',
    summary: 'Identity and endpoint investigations, escalation, containment, and large-scale endpoint security deployment.',
    bullets: [
      'Triaged identity, endpoint, email, and security alerts using Entra ID, Cisco Secure Endpoint, and log analysis.',
      'Coordinated containment such as password resets, session revocation, MFA remediation, endpoint isolation, and access-control updates.',
      'Deployed and supported Cisco Secure Endpoint on 3,500+ devices, contributing to a 15% reduction in malware infections.'
    ]
  },
  {
    role: 'Jr. Network Security Engineer', organization: 'Virginia University of Science and Technology', period: 'Feb 2022 – May 2023', place: 'Vienna, VA',
    summary: 'Network security monitoring, vulnerability assessments, packet analysis, and Python-based security tooling.',
    bullets: [
      'Monitored network traffic and alerts with Splunk and Snort to investigate suspicious activity.',
      'Performed vulnerability assessments with Nessus and Nmap and worked with administrators on remediation.',
      'Developed Python scripts for log parsing and packet-capture analysis to improve network threat detection efficiency.'
    ]
  }
];

const capabilities = [
  { title: 'Detection & Response', items: ['Incident Response', 'Splunk ES', 'CrowdStrike', 'Microsoft Defender', 'SentinelOne', 'Threat Hunting', 'Corelight / Snort'] },
  { title: 'Network, Cloud & Identity', items: ['NetFlow / sFlow', 'Akvorado', 'Palo Alto', 'Wireshark', 'Microsoft Entra ID', 'Duo MFA', 'AWS / Azure'] },
  { title: 'Automation & Engineering', items: ['Python', 'PowerShell / Bash', 'Splunk SOAR Playbooks', 'Microsoft Graph API', 'REST APIs', 'Git', 'MITRE ATT&CK Mapping'] }
];

const certifications = ['GIAC Cloud Security Essentials (GCLD)', 'CompTIA Security+', 'AWS Certified Cloud Practitioner'];

function SectionHeading({ eyebrow, title, subtitle }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>;
}

function ExperienceItem({ item }) {
  return <details className="experience-item">
    <summary>
      <div className="job-title"><strong>{item.role}</strong><span>{item.organization} · {item.place}</span></div>
      <div className="job-meta"><span>{item.period}</span><span className="expand-label">Details <span className="chevron">⌄</span></span></div>
    </summary>
    <div className="experience-body"><p className="job-summary">{item.summary}</p><ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul></div>
  </details>;
}

export default function App() {
  return <div className="site">
    <header className="site-header"><div className="container header-content">
      <a className="brand" href="#top"><span className="brand-symbol">◈</span><span><b>JIAMING QU</b><small>CYBER DEFENSE ENGINEER</small></span></a>
      <nav aria-label="Main navigation"><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#education">Education</a><a href="#contact">Contact</a></nav>
    </div></header>
    <main>
      <section id="top" className="container hero">
        <div className="portrait"><img src={profileImg} alt="Professional portrait of Jiaming Qu" /></div>
        <div className="hero-copy">
          <p className="eyebrow hero-overline">CYBER DEFENSE · INCIDENT RESPONSE · SECURITY AUTOMATION</p>
          <h1>Hi, I’m <span>Jiaming Qu.</span></h1>
          <p className="hero-statement">Turning security signals into clear investigations and practical defenses.</p>
          <p>I’m a Cyber Defense Engineer at Emory University, working across identity, endpoint, email, and network security. I investigate threats, correlate security telemetry, and help teams respond quickly and confidently.</p>
          <p>My background spans detection engineering, phishing and compromised-account response, and security automation. Previously at George Washington University, I tuned Splunk detections and built Python and SOAR workflows that made investigations more efficient.</p>
          <div className="hero-actions"><a className="primary-link" href="#experience">Explore my work <span aria-hidden="true">↗</span></a><a className="secondary-link" href="https://www.linkedin.com/in/jiaming-qu996/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
        </div>
      </section>

      <section className="container overview" aria-label="Professional overview"><div className="overview-header"><span className="eyebrow">AT A GLANCE</span><h2>Experience. Expertise. Credentials.</h2></div>
        <div className="overview-grid">
          <div className="overview-item"><span className="overview-label">Experience</span><div className="overview-stats"><span><strong>5+</strong><small>Years in IT</small></span><span><strong>4+</strong><small>Years in Security</small></span></div></div>
          <div className="overview-item"><span className="overview-label">Core Focus</span><div className="focus-tags"><span>Incident Response</span><span>Detection Engineering</span><span>Security Automation</span><span>Network & Identity Security</span></div></div>
          <div className="overview-item"><span className="overview-label">Certifications</span><ul className="compact-list"><li>GIAC GCLD</li><li>CompTIA Security+</li><li>AWS Cloud Practitioner</li></ul></div>
        </div>
      </section>

      <section id="experience" className="container content-section"><SectionHeading eyebrow="CAREER" title="Professional Experience" subtitle="Select a role to explore responsibilities and outcomes." /><div className="experience-stack">{experience.map(item => <ExperienceItem key={item.role + item.period} item={item} />)}</div></section>

      <section id="projects" className="container content-section"><SectionHeading eyebrow="SELECTED PROJECT" title="Cyber Attack Visualizer Agent" subtitle="An active project translating complex incident data into a clearer investigative story." />
        <div className="feature-project"><div className="project-topline"><span className="status-dot" />In development · Jul 2026 – Present</div><h3>Making attack sequences easier to understand and investigate.</h3><p>Designing an AI-powered agent that transforms cybersecurity incidents into interactive attack workflows—from initial access and execution through persistence, lateral movement, containment, and remediation.</p>
          <div className="project-points"><div><b>Attack mapping</b><p>Connect attacker behavior to MITRE ATT&CK techniques.</p></div><div><b>Telemetry context</b><p>Associate evidence from SIEM, EDR, identity, endpoint, and network sources.</p></div><div><b>Analyst guidance</b><p>Surface detection opportunities, affected assets, defensive controls, and containment actions.</p></div></div>
          <div className="tag-row"><span>AI Agent</span><span>MITRE ATT&CK</span><span>Incident Analysis</span><span>Detection & Response</span></div>
        </div>
      </section>

      <section id="skills" className="container content-section"><SectionHeading eyebrow="EXPERTISE" title="Technical Capabilities" subtitle="Tools and engineering disciplines I use in real security operations." /><div className="skills-grid">{capabilities.map(group => <div className="skill-panel" key={group.title}><h3>{group.title}</h3><div className="skill-tags">{group.items.map(i => <span key={i}>{i}</span>)}</div></div>)}</div></section>

      <section id="education" className="container content-section"><SectionHeading eyebrow="BACKGROUND" title="Education & Certifications" /><div className="education-grid"><div className="edu-panel"><h3>Education</h3><div className="edu-record"><strong>M.S. Cybersecurity & Information Assurance</strong><span>Virginia University of Science and Technology</span><small>Feb 2022 – Mar 2023 · GPA 4.0</small></div><div className="edu-record"><strong>B.S. Computer Science</strong><span>Salisbury University · Minor in Mathematics</span><small>Jun 2016 – Dec 2019</small></div></div><div className="edu-panel"><h3>Certifications</h3><ul className="cert-list">{certifications.map(c => <li key={c}>{c}</li>)}</ul></div></div></section>

      <section id="contact" className="container contact-section"><span className="eyebrow">GET IN TOUCH</span><h2>Let’s connect.</h2><p>I’m interested in meaningful conversations about cyber defense, incident response, detection engineering, and security automation.</p><div className="contact-links"><a href="mailto:jiamingqu0728@gmail.com">Email ↗</a><a href="https://www.linkedin.com/in/jiaming-qu996/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/jiaming-sec" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></section>
    </main>
    <footer className="footer"><div className="container"><span>© {new Date().getFullYear()} Jiaming Qu</span><span>Cyber Defense · Detection · Response</span></div></footer>
  </div>;
}
