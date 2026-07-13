import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo-mark" href="/" aria-label="Worod Hazem home">
      <span>W</span>
      <span className="logo-slash">/</span>
      <span>H</span>
    </Link>
  );
}
