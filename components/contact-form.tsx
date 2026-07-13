"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { site } from "@/data/site";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const project = String(form.get("project") || "").trim();
    const details = String(form.get("details") || "").trim();

    if (!name || !email || !details) {
      setMessage("Please complete your name, email and project details.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry — ${project || "New project"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${project || "Not specified"}\n\n${details}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setMessage("Your email application is opening with the project details included.");
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-row">
        <label>
          <span>01 / Name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          <span>02 / Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
      </div>
      <label>
        <span>03 / Project type</span>
        <input name="project" type="text" placeholder="Website, product, frontend role, collaboration…" />
      </label>
      <label>
        <span>04 / Details</span>
        <textarea name="details" rows={4} placeholder="Tell me what needs to be designed, built or improved." required />
      </label>
      <div className="form-action">
        <button type="submit">
          Start a conversation <ArrowUpRight size={18} />
        </button>
        <p aria-live="polite">{message}</p>
      </div>
    </form>
  );
}
