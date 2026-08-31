type CtaLinkProps = {
  href: string | null;
  children: React.ReactNode;
  className?: string;
};

export function CtaLink({ href, children, className }: CtaLinkProps) {
  if (!href) {
    return (
      <button type="button" className={className} disabled>
        {children} — link to be announced
      </button>
    );
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
