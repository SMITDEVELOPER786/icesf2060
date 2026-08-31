export function HeroCollage() {
  return (
    <>
      <div className="hero-collage" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-collage-main"
          src="/media/dsu-campus.png"
          alt=""
        />
      </div>
      <div className="hero-frames" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-frame"
          src="/media/dsu-dck.png"
          alt=""
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-frame"
          src="/media/dsu-career.png"
          alt=""
        />
      </div>
    </>
  );
}
