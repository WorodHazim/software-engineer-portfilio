import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectNavigation } from "@/components/project-navigation";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/site";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.image, width: 1200, height: 800, alt: project.imageAlt }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="case-page" id="main-content">
      <section className="case-hero section-shell" id="top">
        <div className="case-hero-top">
          <Link href="/#work" className="back-link"><ArrowLeft size={16} /> All systems</Link>
          <span>{project.number} / {String(projects.length).padStart(2, "0")}</span>
          <span>{project.status}</span>
        </div>

        <Reveal>
          <div className="case-title-meta">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h1>{project.title}</h1>
        </Reveal>

        <div className="case-intro-grid">
          <Reveal>
            <p className="case-role">{project.role}</p>
          </Reveal>
          <Reveal className="case-intro" delay={0.08}>
            <p>{project.intro}</p>
            <div className="case-links">
              {project.liveUrl ? (
                <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                  Visit live project <ArrowUpRight size={16} />
                </Link>
              ) : null}
              {project.repoUrl ? (
                <Link href={project.repoUrl} target="_blank" rel="noreferrer">
                  View repository <ArrowUpRight size={16} />
                </Link>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="case-image-section">
        <Reveal>
          <div className="case-image-wrap">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1600}
              height={1000}
              priority
              sizes="100vw"
            />
            <div className="case-image-label">
              <span>PROJECT SYSTEM / {project.number}</span>
              <span>{project.category}</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="case-facts section-shell">
        {project.facts.map((fact) => (
          <Reveal className="case-fact" key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </Reveal>
        ))}
      </section>

      <section className="case-narrative section-shell">
        {project.sections.map((section, sectionIndex) => (
          <Reveal className="case-section" key={section.eyebrow}>
            <div className="case-section-index">{String(sectionIndex + 1).padStart(2, "0")}</div>
            <div className="case-section-title">
              <span>{section.eyebrow}</span>
              <h2>{section.title}</h2>
            </div>
            <div className="case-section-copy">
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Reveal>
        ))}
      </section>

      <section className="case-system-index">
        <div className="section-shell case-system-layout">
          <div>
            <span>TECHNICAL INDEX</span>
            <h2>Tools selected for the system.</h2>
          </div>
          <div className="case-stack">
            {project.stack.map((item, stackIndex) => (
              <span key={item}><i>{String(stackIndex + 1).padStart(2, "0")}</i>{item}</span>
            ))}
          </div>
          <div className="case-services">
            <span>SCOPE</span>
            {project.services.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <ProjectNavigation previous={previous} next={next} />
      </section>
    </main>
  );
}
