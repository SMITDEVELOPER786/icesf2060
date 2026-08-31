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
          <Link href="/" className="brand-home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="brand-logo"
              src="/media/dsu-logo.png"
              alt=""
            />
            <span className="brand-short">{site.conference.shortName}</span>
          </Link>
          <div className="brand-lines">
            <p className="brand-org">{site.conference.organizer}</p>
            <p className="brand-aff">{site.conference.affiliationLine}</p>
          </div>
        </div>
        <button
          ref={buttonRef}
          type="button"
          className={open ? "menu-btn is-open" : "menu-btn"}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-bar" aria-hidden="true" />
          <span className="menu-bar" aria-hidden="true" />
          <span className="menu-bar" aria-hidden="true" />
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
        <CtaLink className="cta header-cta" href={site.links.easychair} compact>
          Submit paper
        </CtaLink>
      </div>
    </header>
  );
}
