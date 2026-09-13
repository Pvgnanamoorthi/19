import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

export default function ContactSection() {
  return (
    <section
      id="contact"
      //className="relative flex flex-col items-center text-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-"80
      className="relative flex flex-col items-center text-center px-5 sm:px-8 md:px-10 pt-96 pb-24 sm:pt-96 sm:pb-32 md:pt-[20px] md:pb-20"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 8.5vw, 130px)' }}
        >
          Build . Create . Inspire
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 8.5vw, 110px)' }}
        >
          Turning Ideas Playable
        </h2>
      </FadeIn>

      <FadeIn delay={0.25} y={20}>
        <p
          className="font-light uppercase tracking-wide leading-snug max-w-md sm:max-w-lg mt-8 sm:mt-20"
          style={{ color: '#D7E2EA', opacity: 0.8, fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
        >
          Have a world in mind that players could explore?
        </p>
      </FadeIn>

      <FadeIn delay={0.4} y={20} className="mt-10 sm:mt-12">
        <ContactButton label="Get In Touch" href="mailto:gnanampv4@gmail.com" />
      </FadeIn>


      <FadeIn delay={0.5} y={20} className="mt-10 mb-20">
  <div className="flex items-center justify-center gap-8">

    {/* GitHub */}
    <a
      href="https://github.com/Pvgnanamoorthi"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="social-circle"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
        />
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/gnanamoorthipv/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="social-circle"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z"
        />
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/__gm.x66_/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="social-circle"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
        />
      </svg>
    </a>

  </div>
</FadeIn>

    </section>
  );
}
