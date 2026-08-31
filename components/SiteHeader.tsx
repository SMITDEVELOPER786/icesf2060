"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CtaLink } from "@/components/CtaLink";
import { site } from "@/content/site";
import { NAV_ITEMS } from "@/lib/nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="brand">
          <p className="brand-org">{site.conference.organizer}</p>
          <p className="brand-aff">{site.conference.affiliationLine}</p>
          <Link href="/" className="brand-short">
            {site.conference.shortName}
          </Link>
        </div>
        <button
          ref={buttonRef}
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
        <nav
          id="site-menu"
          className={open ? "site-menu is-open" : "site-menu"}
          aria-label="Primary"
        >
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  className="nav-link"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <CtaLink className="cta" href={site.links.easychair}>
          Submit paper
        </CtaLink>
      </div>
    </header>
  );
}
