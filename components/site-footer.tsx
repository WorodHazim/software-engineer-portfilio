import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <Logo />
        <p>
          Digital systems, interfaces and products built from Abu Dhabi.
        </p>
        <div className="footer-links">
          <Link href={site.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} />
          </Link>
          <Link href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </Link>
          <Link href={site.resume}>Résumé</Link>
        </div>
      </div>
      <div className="site-footer-meta">
        <span>© {new Date().getFullYear()} WOROD HAZEM</span>
        <span>NEXT.JS / TYPESCRIPT / MOTION</span>
        <Link href="#top">BACK TO TOP ↑</Link>
      </div>
    </footer>
  );
}
