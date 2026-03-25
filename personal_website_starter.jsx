export default function PersonalWebsiteStarter() {
  const projects = [
    {
      title: "Splunk SOAR Account Remediation Playbook",
      description:
        "Designed and tested an automated response workflow that connected Splunk SOAR with Microsoft Graph API to support compromised account remediation and improve operational consistency.",
      impact:
        "Reduced manual response steps and created a more repeatable remediation process.",
      tags: ["Splunk SOAR", "Microsoft Graph API", "Identity Security"],
    },
    {
      title: "Detection Engineering in Splunk",
      description:
        "Improved monitoring quality by refining correlation searches, tuning log ingestion pipelines, and strengthening alert logic to increase visibility into suspicious activity.",
      impact:
        "Helped improve signal quality and supported more efficient investigation workflows.",
      tags: ["Splunk", "Detection Engineering", "Threat Monitoring"],
    },
    {
      title: "Network Traffic Analysis with Wireshark",
      description:
        "Analyzed live traffic to identify suspicious DNS behavior, unexpected patterns, and connectivity issues, then translated findings into stronger investigation and monitoring practices.",
      impact:
        "Strengthened visibility across network investigations and incident analysis.",
      tags: ["Wireshark", "Network Analysis", "Investigation"],
    },
  ];

  const skillGroups = [
    {
      title: "Security Operations",
      items: ["Incident Response", "Threat Detection", "Alert Triage", "Phishing Investigation", "Log Analysis"],
    },
    {
      title: "Detection & Automation",
      items: ["Splunk", "Detection Engineering", "Correlation Search Tuning", "SOAR Workflow Development", "Python Scripting"],
    },
    {
      title: "Cloud & Identity Security",
      items: ["AWS Security", "IAM", "Azure / Entra ID", "MFA / SSO", "Conditional Access", "Identity Security"],
    },
    {
      title: "Network & Endpoint Security",
      items: ["Wireshark", "Network Traffic Analysis", "CrowdStrike", "Cortex XDR", "Firewall Log Analysis"],
    },
    {
      title: "Security Frameworks",
      items: ["Zero Trust", "STRIDE", "DREAD", "NIST CSF", "NIST 800-53"],
    },
  ];

  const certifications = [
    "GIAC GCLD",
    "CompTIA Security+",
    "ISC2 CC",
    "AWS Certified Cloud Practitioner",
  ];

  return (
    <div className="min-h-screen bg-[#0d1320] text-slate-100">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.10),transparent_24%),radial-gradient(circle_at_85%_15%,rgba(96,165,250,0.08),transparent_20%),linear-gradient(to_bottom,rgba(13,19,32,0.98),rgba(13,19,32,1))]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0d1320]/75 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl border border-white/10 bg-white/[0.05] flex items-center justify-center">
              <span className="text-sky-300">◈</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] uppercase">Jiaming Qu</p>
              <p className="text-xs text-slate-400 tracking-[0.18em] uppercase">Security Engineer</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#experience" className="hover:text-sky-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-sky-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-sky-300 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-sky-300 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div>
              <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-2xl shadow-[0_20px_60px_rgba(2,6,23,0.35)]">
                <div className="aspect-[4/5] rounded-[2rem] border border-white/10 overflow-hidden bg-white/[0.03]">
                  <img
                    src="/mnt/data/a11d7512-b97a-496b-bd58-fffc9c85aff1.png"
                    alt="Jiaming Qu"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.05] text-sky-300 text-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-sky-300" />
                Security Engineer · SOC · Incident Response · Cloud Security
              </div>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.05em] leading-[0.98] text-white mb-6">
                Hi, I’m Jiaming Qu.
              </h1>

              <p className="text-2xl md:text-3xl text-slate-200 leading-tight mb-6 max-w-3xl">
                I build practical security workflows that improve visibility, reduce manual work, and strengthen modern defense.
              </p>

              <div className="space-y-4 text-lg text-slate-300 leading-8 max-w-3xl mb-10">
                <p>
                  I am a Security Engineer focused on security operations, incident response, threat detection, and cloud security.
                </p>
                <p>
                  I currently work at George Washington University, where I support monitoring, investigations, and response activities across enterprise environments. My work includes improving detection quality, analyzing suspicious activity, and helping build more effective security workflows.
                </p>
                <p>
                  My background also includes cloud and identity security, automation with Python and Splunk, and hands-on investigation work with tools such as Cortex XDR and Wireshark. I enjoy turning complex security tasks into practical processes that are clearer, faster, and more consistent.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#experience" className="px-6 py-3 rounded-2xl bg-white text-slate-950 font-semibold hover:opacity-90 transition">
                  View Experience
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-300 mb-3">Overview</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-white">
                A concise view of my background and focus.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 min-h-[150px] flex flex-col">
                <p className="text-sm text-slate-400 mb-3">Current Role</p>
                <p className="text-white font-medium leading-7">
                  Security Engineer at George Washington University
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 min-h-[150px] flex flex-col">
                <p className="text-sm text-slate-400 mb-3">Core Focus</p>
                <p className="text-white font-medium leading-7">
                  Security Operations, Detection, Incident Response, and Cloud Security
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 min-h-[150px] flex flex-col">
                <p className="text-sm text-slate-400 mb-3">Career Direction</p>
                <p className="text-white font-medium leading-7">
                  Security engineering roles centered on practical defense and automation
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <div className="flex items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sky-300 mb-3">Experience</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white">Professional Experience</h2>
            </div>
          </div>

          <div className="space-y-6">
            <details className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl">
              <summary className="list-none cursor-pointer">
                <div className="grid md:grid-cols-[0.35fr_1fr_auto] gap-6 items-start">
                  <div>
                    <p className="text-white font-semibold text-lg">Security Engineer</p>
                    <p className="text-slate-400 mt-2">George Washington University</p>
                    <p className="text-slate-500 mt-1 text-sm">July 2024 – Present</p>
                  </div>
                  <div>
                    <p className="text-slate-300 leading-8">
                      Security engineering work focused on monitoring, investigations, threat detection, automation, and cloud security support.
                    </p>
                  </div>
                  <div className="text-sky-300 text-sm pt-1 group-open:opacity-0 transition-opacity">
                    View details
                  </div>
                </div>
              </summary>
              <div className="mt-6 border-t border-white/10 pt-6">
                <ul className="space-y-3 text-slate-300 leading-8 list-disc pl-5">
                  <li>Automated security workflows using Python and Splunk to support continuous monitoring, URL analysis, email header inspection, and attachment sandboxing.</li>
                  <li>Improved detection quality by refining Splunk correlation searches, log ingestion, and alert logic.</li>
                  <li>Led investigations using Cortex XDR and Wireshark across endpoint and network activity.</li>
                  <li>Supported AWS security hardening through IAM, security groups, and GuardDuty monitoring.</li>
                </ul>
              </div>
            </details>

            <details className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl">
              <summary className="list-none cursor-pointer">
                <div className="grid md:grid-cols-[0.35fr_1fr_auto] gap-6 items-start">
                  <div>
                    <p className="text-white font-semibold text-lg">Tech Support (Security)</p>
                    <p className="text-slate-400 mt-2">George Washington University</p>
                    <p className="text-slate-500 mt-1 text-sm">May 2023 – July 2024</p>
                  </div>
                  <div>
                    <p className="text-slate-300 leading-8">
                      Security support work spanning identity controls, endpoint security, troubleshooting, and operational process improvement.
                    </p>
                  </div>
                  <div className="text-sky-300 text-sm pt-1 group-open:opacity-0 transition-opacity">
                    View details
                  </div>
                </div>
              </summary>
              <div className="mt-6 border-t border-white/10 pt-6">
                <ul className="space-y-3 text-slate-300 leading-8 list-disc pl-5">
                  <li>Reviewed Azure Active Directory configurations and improved MFA and least-privilege controls.</li>
                  <li>Supported Cisco Secure Endpoint deployment across more than 1,500 devices.</li>
                  <li>Strengthened security operations through troubleshooting, endpoint support, and security-focused process improvement.</li>
                </ul>
              </div>
            </details>

            <details className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl">
              <summary className="list-none cursor-pointer">
                <div className="grid md:grid-cols-[0.35fr_1fr_auto] gap-6 items-start">
                  <div>
                    <p className="text-white font-semibold text-lg">Network Security Engineer</p>
                    <p className="text-slate-400 mt-2">Virginia University of Science and Technology</p>
                    <p className="text-slate-500 mt-1 text-sm">February 2022 – May 2023</p>
                  </div>
                  <div>
                    <p className="text-slate-300 leading-8">
                      Security engineering support across firewall logging, threat detection, IAM improvement, and threat modeling practices.
                    </p>
                  </div>
                  <div className="text-sky-300 text-sm pt-1 group-open:opacity-0 transition-opacity">
                    View details
                  </div>
                </div>
              </summary>
              <div className="mt-6 border-t border-white/10 pt-6">
                <ul className="space-y-3 text-slate-300 leading-8 list-disc pl-5">
                  <li>Developed Python-based firewall log automation to improve visibility and reduce repetitive analysis tasks.</li>
                  <li>Supported real-time threat detection in Splunk and improved monitoring workflows.</li>
                  <li>Performed threat modeling using STRIDE and DREAD.</li>
                  <li>Helped strengthen IAM through MFA and conditional access policies.</li>
                </ul>
              </div>
            </details>
          </div>
        </section>

        <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-300 mb-3">Projects</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white">Selected Work</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-2xl">
                <p className="text-sm text-sky-300 mb-4">Featured Project</p>
                <h3 className="text-2xl font-semibold text-white leading-tight mb-4">{project.title}</h3>
                <p className="text-slate-300 leading-8 mb-4">{project.description}</p>
                <p className="text-slate-400 leading-7 mb-6">{project.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/[0.05] text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
            <div>
              <div className="mb-10">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-300 mb-3">Skills</p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white">Core Capabilities</h2>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {skillGroups.map((group) => (
                  <div key={group.title} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl">
                    <h3 className="text-lg font-semibold text-white mb-4">{group.title}</h3>
                    <ul className="space-y-3 text-slate-300">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-10">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-300 mb-3">Certifications</p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white">Credentials</h2>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl space-y-4">
                {certifications.map((cert) => (
                  <div key={cert} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 flex items-center justify-between">
                    <span className="text-white font-medium">{cert}</span>
                    <span className="text-xs text-sky-300">Verified</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-10 backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-300 mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white mb-4">
              Let’s connect.
            </h2>
            <p className="text-lg text-slate-300 leading-8 max-w-3xl mb-8">
              I am open to security engineering opportunities, professional collaboration, and conversations around SOC operations, cloud security, threat detection, and automation-driven defense.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <a href="mailto:jiamingqu0728@gmail.com" className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.07] transition">
                <p className="text-sm text-slate-400 mb-2">Email</p>
                <p className="text-white font-medium break-all">jiamingqu0728@gmail.com</p>
              </a>
              <a href="https://linkedin.com/in/jiaming-qu996/" className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.07] transition">
                <p className="text-sm text-slate-400 mb-2">LinkedIn</p>
                <p className="text-white font-medium break-all">linkedin.com/in/jiaming-qu996/</p>
              </a>
              <a href="https://github.com/jiaming-sec" className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.07] transition">
                <p className="text-sm text-slate-400 mb-2">GitHub</p>
                <p className="text-white font-medium break-all">github.com/jiaming-sec</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-3 text-sm text-slate-400">
          <p>© 2026 Jiaming Qu. All rights reserved.</p>
          <p>Portfolio crafted for recruiters, hiring managers, and collaborators.</p>
        </div>
      </footer>
    </div>
  );
}
