import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-body">
      <h1>Page not found</h1>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </div>
  );
}
