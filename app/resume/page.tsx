import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { activities, capabilityGroups, education, experience, projects, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Professional experience, projects, skills and education of Worod Hazem.",
};

export default function ResumePage() {
  return (
    <main className="resume-page" id="main-content">
      <section className="resume-hero section-shell" id="top">
        <div className="resume-hero-top">
          <Link href="/" className="back-link"><ArrowLeft size={16} /> Back to portfolio</Link>
          <span>CURRICULUM VITAE / 2026</span>
        </div>
        <Reveal>
          <h1>WOROD<br /><em>HAZEM</em></h1>
        </Reveal>
        <div className="resume-intro-grid">
          <Reveal>
            <p className="resume-role">{site.title}</p>
          </Reveal>
          <Reveal className="resume-summary" delay={0.08}>
            <p>
              Full-stack developer and software engineer with experience designing, developing,
              deploying and hosting responsive websites, e-commerce platforms, admin dashboards,
              internal systems and AI-enabled applications.
            </p>
            <a className="primary-link" href={site.resume} download>
              Download PDF <Download size={17} />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="resume-contact-band">
        <div className="section-shell resume-contact-grid">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          <span>{site.location}</span>
          <Link href={site.github} target="_blank">GITHUB ↗</Link>
          <Link href={site.linkedin} target="_blank">LINKEDIN ↗</Link>
        </div>
      </section>

      <section className="resume-content section-shell">
        <div className="resume-section">
          <div className="resume-section-label">01 / EXPERIENCE</div>
          <div className="resume-section-body">
            {experience.map((item) => (
              <Reveal className="resume-entry" key={`${item.period}-${item.title}`}>
                <span>{item.period}</span>
                <div>
                  <h2>{item.title}</h2>
                  <h3>{item.place}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <div className="resume-section-label">02 / SELECTED PROJECTS</div>
          <div className="resume-section-body">
            {projects.slice(0, 5).map((project) => (
              <Reveal className="resume-project-entry" key={project.slug}>
                <span>{project.number}</span>
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                  <small>{project.stack.join(" / ")}</small>
                </div>
                <Link href={`/work/${project.slug}`} aria-label={`View ${project.title}`}>
                  <ArrowUpRight size={19} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <div className="resume-section-label">03 / CAPABILITIES</div>
          <div className="resume-section-body resume-capabilities">
            {capabilityGroups.map((group) => (
              <Reveal className="resume-capability" key={group.index}>
                <span>{group.index}</span>
                <div>
                  <h2>{group.title}</h2>
                  <p>{group.items.join(" · ")}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <div className="resume-section-label">04 / ACTIVITIES</div>
          <div className="resume-section-body">
            {activities.map((item) => (
              <Reveal className="resume-entry compact" key={`${item.period}-${item.title}`}>
                <span>{item.period}</span>
                <div>
                  <h2>{item.title}</h2>
                  <h3>{item.place}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <div className="resume-section-label">05 / EDUCATION</div>
          <div className="resume-section-body">
            {education.map((item) => (
              <Reveal className="resume-entry compact" key={item.period}>
                <span>{item.period}</span>
                <div>
                  <h2>{item.title}</h2>
                  <h3>{item.place}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="resume-language-line">
          <span>LANGUAGES</span>
          <p>Arabic — Native <i /> English — Professional working proficiency</p>
          <a href="#top">TOP <ArrowDown size={15} className="rotate-180" /></a>
        </div>
      </section>
    </main>
  );
}
