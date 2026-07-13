import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { HeroSystem } from "@/components/hero-system";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectIndex } from "@/components/project-index";
import { ContactForm } from "@/components/contact-form";
import { activities, capabilityGroups, education, experience, site } from "@/data/site";

const process = [
  ["01", "Understand", "Find the real problem, the users and the constraints before choosing the interface."],
  ["02", "Structure", "Turn information and workflows into a clear product model and reusable system."],
  ["03", "Design", "Build hierarchy through typography, grids, interaction and deliberate visual decisions."],
  ["04", "Develop", "Translate the direction into responsive, accessible and maintainable production code."],
  ["05", "Validate", "Test states, devices, data flows, performance and the details users notice indirectly."],
  ["06", "Deploy", "Configure hosting, domains, SSL and production delivery as part of the product."],
  ["07", "Evolve", "Maintain, improve and support the system as its content and requirements change."],
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section" id="top">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-top-meta">
          <span>PORTFOLIO / 2026</span>
          <span>{site.location}</span>
          <span className="availability"><i /> AVAILABLE FOR SELECTED WORK</span>
        </div>

        <div className="hero-layout">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow">CREATIVE FRONTEND DEVELOPER / SOFTWARE ENGINEER</p>
            </Reveal>
            <h1 className="hero-title" aria-label="I design interfaces. I engineer systems.">
              <span>I DESIGN</span>
              <span>INTERFACES.</span>
              <span className="hero-title-shift">I ENGINEER</span>
              <span><em>SYSTEMS.</em></span>
            </h1>
            <Reveal className="hero-description" delay={0.1}>
              <p>
                I build precise digital products across frontend interfaces, full-stack platforms,
                AI workflows and the infrastructure that keeps them running.
              </p>
              <div className="hero-actions">
                <Link className="primary-link" href="#work">
                  Explore selected work <ArrowDown size={17} />
                </Link>
                <Link className="text-link" href={site.resume} target="_blank">
                  Download résumé <Download size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal className="hero-visual-wrap" delay={0.15} y={20}>
            <HeroSystem />
          </Reveal>
        </div>

        <div className="hero-footer-line">
          <span>DESIGN / CODE / DATA / OPERATIONS</span>
          <span>SCROLL TO ENTER THE SYSTEM ↓</span>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <Reveal>
          <SectionHeading index="01" label="Selected work">
            Systems shaped from <em>interface</em> to infrastructure.
          </SectionHeading>
        </Reveal>
        <ProjectIndex />
      </section>

      <section className="profile-section" id="profile">
        <div className="profile-grid-lines" aria-hidden="true" />
        <div className="section-shell profile-inner">
          <Reveal>
            <div className="profile-kicker">
              <span>02 / PROFILE</span>
              <span>WOROD HAZEM</span>
            </div>
          </Reveal>
          <div className="profile-layout">
            <Reveal className="profile-statement">
              <h2>
                Code gives a system structure. Design gives it <em>direction.</em>
              </h2>
            </Reveal>
            <Reveal className="profile-copy" delay={0.08}>
              <p>
                I work between software engineering and visual design. My projects range from
                editorial websites and real-estate platforms to internal business tools and
                explainable AI systems.
              </p>
              <p>
                I am interested in the entire path: understanding the problem, structuring the
                product, designing the interface, connecting the data, shipping it and keeping it
                useful after launch.
              </p>
              <Link className="light-link" href="/resume">
                View full résumé <ArrowUpRight size={16} />
              </Link>
            </Reveal>
            <Reveal className="profile-identity" delay={0.16}>
              <div className="identity-plate">
                <div className="identity-coordinate">24.4539° N / 54.3773° E</div>
                <div className="identity-monogram">WH</div>
                <div className="identity-details">
                  <span>ABU DHABI / UAE</span>
                  <span>ARABIC / ENGLISH</span>
                  <span>ENGINEERING / DESIGN</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="experience-section section-shell" id="experience">
        <Reveal>
          <SectionHeading index="03" label="Experience archive">
            Professional work and <em>continuous learning.</em>
          </SectionHeading>
        </Reveal>

        <div className="archive-block">
          <div className="archive-title">PROFESSIONAL EXPERIENCE</div>
          {experience.map((item) => (
            <Reveal className="archive-row" key={`${item.period}-${item.title}`}>
              <div className="archive-period">{item.period}</div>
              <div className="archive-role">
                <h3>{item.title}</h3>
                <p>{item.place}</p>
              </div>
              <p className="archive-description">{item.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="archive-block archive-block-spaced">
          <div className="archive-title">ACTIVITIES / MENTORING / RECOGNITION</div>
          {activities.map((item) => (
            <Reveal className="archive-row" key={`${item.period}-${item.title}`}>
              <div className="archive-period">{item.period}</div>
              <div className="archive-role">
                <h3>{item.title}</h3>
                <p>{item.place}</p>
              </div>
              <p className="archive-description">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="section-shell">
          <Reveal>
            <SectionHeading index="04" label="Capabilities">
              A technical practice built across <em>layers.</em>
            </SectionHeading>
          </Reveal>
          <div className="capability-index">
            {capabilityGroups.map((group) => (
              <Reveal className="capability-row" key={group.index}>
                <span className="capability-index-number">{group.index}</span>
                <h3>{group.title}</h3>
                <div className="capability-tags">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section-shell">
        <Reveal>
          <SectionHeading index="05" label="Working process">
            One connected path from question to <em>production.</em>
          </SectionHeading>
        </Reveal>
        <div className="process-track">
          {process.map(([number, title, description]) => (
            <Reveal className="process-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="education-section">
        <div className="section-shell education-layout">
          <Reveal>
            <div className="education-title">
              <span>06 / EDUCATION</span>
              <h2>Learning is part of the operating system.</h2>
            </div>
          </Reveal>
          <div className="education-list">
            {education.map((item) => (
              <Reveal className="education-row" key={item.period}>
                <span>{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell">
          <div className="contact-heading">
            <Reveal>
              <span>07 / CONTACT</span>
              <h2>LET’S BUILD SOMETHING <em>CLEAR, USEFUL</em> AND ALIVE.</h2>
            </Reveal>
          </div>
          <div className="contact-layout">
            <Reveal className="contact-details">
              <p>{site.availability}.</p>
              <div className="contact-direct">
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
                <span>{site.location}</span>
              </div>
              <div className="contact-socials">
                <Link href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</Link>
                <Link href={site.github} target="_blank" rel="noreferrer">GitHub ↗</Link>
              </div>
            </Reveal>
            <Reveal className="contact-form-wrap" delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
