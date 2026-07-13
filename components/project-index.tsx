"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/site";

export function ProjectIndex() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="project-index">
      {projects.map((project, index) => (
        <motion.article
          className="project-row"
          key={project.slug}
          initial={reduceMotion ? false : { opacity: 0, y: 60 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 0.8, delay: Math.min(index * 0.03, 0.15), ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href={`/work/${project.slug}`} className="project-row-link" aria-label={`View ${project.title} case study`}>
            <div className="project-row-meta">
              <span className="project-number">{project.number}</span>
              <span>{project.year}</span>
              <span>{project.category}</span>
            </div>
            <div className="project-row-title-wrap">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
            <div className="project-row-visual">
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1200}
                height={800}
                sizes="(max-width: 900px) 100vw, 52vw"
              />
              <span className="project-view-label">
                View system <ArrowUpRight size={15} />
              </span>
            </div>
            <div className="project-row-bottom">
              <span>{project.role}</span>
              <span>{project.stack.slice(0, 4).join(" / ")}</span>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
