"use client";

import { useEffect } from "react";

export default function SectionRedirect({ hash }: { hash: string }) {
  useEffect(() => {
    window.location.replace(`/${hash}`);
  }, [hash]);

  return (
    <p className="page-body">
      Redirecting to <a href={`/${hash}`}>home</a>…
    </p>
  );
}
