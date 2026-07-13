import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page" id="main-content">
      <span>404 / SYSTEM NOT FOUND</span>
      <h1>THE REQUESTED<br /><em>PAGE MOVED.</em></h1>
      <Link href="/">Return to portfolio →</Link>
    </main>
  );
}
