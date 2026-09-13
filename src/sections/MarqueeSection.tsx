import { useEffect, useRef } from 'react';

// Served from public/images/ — see docs/ASSETS.md.
// Order is significant: the first 11 form row 1, the rest form row 2.
const MARQUEE_IMAGES = [
  `${import.meta.env.BASE_URL}images/03-vex-ventures.jpg`,
  `${import.meta.env.BASE_URL}images/02-codenest.jpg`,
  `${import.meta.env.BASE_URL}images/01-space-voyage.jpg`,
  `${import.meta.env.BASE_URL}images/04-stellar-ai-v2.jpg`,
  `${import.meta.env.BASE_URL}images/05-asme.jpg`,
  `${import.meta.env.BASE_URL}images/06-transform-data.jpg`,
  `${import.meta.env.BASE_URL}images/07-vitara.jpg`,
];

const ROW_1 = MARQUEE_IMAGES.slice(0, 11);
const ROW_2 = MARQUEE_IMAGES.slice(11);

function MarqueeRow({
  images,
  rowRef,
}: {
  images: string[];
  rowRef: React.RefObject<HTMLDivElement>;
}) {
  // Tripled for seamless scrolling coverage in both directions
  const tripled = [...images, ...images, ...images];
  return (
    <div className="w-full flex justify-center">
      <div ref={rowRef} className="flex gap-3" style={{ willChange: 'transform' }}>
        {tripled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section || !row1Ref.current || !row2Ref.current) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      // Row 1 moves right on scroll, row 2 moves left
      row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <MarqueeRow images={ROW_1} rowRef={row1Ref} />
      <MarqueeRow images={ROW_2} rowRef={row2Ref} />
    </section>
  );
}
