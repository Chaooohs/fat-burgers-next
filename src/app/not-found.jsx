import Link from "next/link";

export default function NotFoundPage() {

  return (
    <div className="not-found">
      <h1>Ooops!</h1>
      <h3>404 - Page Not Found</h3>
      <p>
        Go to
        <Link href="/"> home page</Link>
      </p>
    </div>
  );
}
