import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/site";

export function ProjectNavigation({ previous, next }: { previous: Project; next: Project }) {
  return (
    <nav className="project-navigation" aria-label="Project navigation">
      <Link href={`/work/${previous.slug}`}>
        <span><ArrowLeft size={17} /> Previous system</span>
        <strong>{previous.shortTitle}</strong>
      </Link>
      <Link href={`/work/${next.slug}`}>
        <span>Next system <ArrowRight size={17} /></span>
        <strong>{next.shortTitle}</strong>
      </Link>
    </nav>
  );
}
