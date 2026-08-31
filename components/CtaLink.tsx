type CtaLinkProps = {
  href: string | null;
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
};

export function CtaLink({ href, children, className, compact }: CtaLinkProps) {
  if (!href) {
    const announced = `${String(children)} — link to be announced`;
    return (
      <button
        type="button"
        className={className}
        disabled
        aria-label={announced}
      >
        {children}
        {compact ? null : " — link to be announced"}
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
