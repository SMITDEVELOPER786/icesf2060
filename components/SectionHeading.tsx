export function SectionHeading({ children }: { children: string }) {
  return (
    <header className="section-head">
      <h2>{children}</h2>
    </header>
  );
}
