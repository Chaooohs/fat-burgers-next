"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

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
