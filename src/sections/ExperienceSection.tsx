import FadeIn from '../components/FadeIn';

//const DECOR_BASE = '/images';
const DECOR_BASE = `${import.meta.env.BASE_URL}images`;


export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>



      <FadeIn
              delay={0.15}
              x={80}
              y={0}
              duration={0.9}
              className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none select-none"
            >
              <img src={`${DECOR_BASE}/group.png`} alt="" className="w-[120px] sm:w-[160px] md:w-[210px]" />
            </FadeIn>


            <FadeIn
                    delay={0.25}
                    x={-80}
                    y={0}
                    duration={0.9}
                    className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[5%] pointer-events-none select-none"
                  >
                    <img src={`${DECOR_BASE}/object.png`} alt="" className="w-[100px] sm:w-[140px] md:w-[180px]" />
                  </FadeIn>

      

      <div className="max-w-5xl mx-auto">
        {/* Experience entry */}

        {/* Experience 1 */}

        <FadeIn delay={0.1}>
          <div
            className="py-8 sm:py-10 md:py-12"
            style={{
              borderTop: '1px solid rgba(215, 226, 234, 0.15)',
              borderBottom: '1px solid rgba(215, 226, 234, 0.15)',
            }}
          >
            <p
              className="font-light uppercase tracking-widest text-xs sm:text-sm"
              style={{ color: '#D7E2EA', opacity: 0.6 }}
            >
              UNITY DEVELOPER / GAME DESIGNER
            </p>
            <h3
              className="font-medium uppercase mt-2 sm:mt-3"
              style={{ color: '#D7E2EA', fontSize: 'clamp(1.4rem, 3.2vw, 2.6rem)' }}
            >
              CDC IT SOLUTIONS Pvt Ltd
            </h3>
            <p
              className="font-light leading-relaxed max-w-2xl mt-3 sm:mt-4"
              style={{ color: '#D7E2EA', opacity: 0.6, fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
            >
              Designing and developing interactive game experiences from concept to completion. 
              My work spans gameplay development, game design, systems development, 
              and creating engaging player experiences across story-driven and puzzle games.
            </p>
            <p
              className="uppercase tracking-widest mt-5 sm:mt-6 text-[0.65rem] sm:text-xs leading-relaxed"
              style={{ color: '#D7E2EA', opacity: 0.45 }}
            >
              UNITY &middot; C# · GAME DEVELOPMENT · GAME DESIGN · GAME SYSTEMS · UI/UX · MOBILE GAMES · INTERACTIVE EXPERIENCES
            </p>
          </div>
        </FadeIn>

        {/* Experience 2 */}

        <FadeIn delay={0.1}>
          <div
            className="py-8 sm:py-10 md:py-12"
            style={{
              borderTop: '1px solid rgba(215, 226, 234, 0.15)',
              borderBottom: '1px solid rgba(215, 226, 234, 0.15)',
            }}
          >
            <p
              className="font-light uppercase tracking-widest text-xs sm:text-sm"
              style={{ color: '#D7E2EA', opacity: 0.6 }}
            >
              UNITY GAME DEVELOPER
            </p>
            <h3
              className="font-medium uppercase mt-2 sm:mt-3"
              style={{ color: '#D7E2EA', fontSize: 'clamp(1.4rem, 3.2vw, 2.6rem)' }}
            >
              sarvotam solutions
            </h3>
            <p
              className="font-light leading-relaxed max-w-2xl mt-3 sm:mt-4"
              style={{ color: '#D7E2EA', opacity: 0.6, fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
            >
              Worked at Sarvotam Solutions as a Unity Game Developer, contributing to the development of mobile games across different genres. 
              My role involved Unity development, gameplay implementation, game design, level design, audio integration, and visual presentation.
              
            </p>
            <p
              className="uppercase tracking-widest mt-5 sm:mt-6 text-[0.65rem] sm:text-xs leading-relaxed"
              style={{ color: '#D7E2EA', opacity: 0.45 }}
            >
              UNITY · C# · GAME DEVELOPMENT · GAME DESIGN · LEVEL DESIGN · AUDIO · LIGHTING · MOBILE GAMING

            </p>
          </div>
        </FadeIn>

        {/* Experience 3 */}

        <FadeIn delay={0.1}>
          <div
            className="py-8 sm:py-10 md:py-12"
            style={{
              borderTop: '1px solid rgba(215, 226, 234, 0.15)',
              borderBottom: '1px solid rgba(215, 226, 234, 0.15)',
            }}
          >
            <p
              className="font-light uppercase tracking-widest text-xs sm:text-sm"
              style={{ color: '#D7E2EA', opacity: 0.6 }}
            >
              ASSOCIATE GAME DEVELOPER
            </p>
            <h3
              className="font-medium uppercase mt-2 sm:mt-3"
              style={{ color: '#D7E2EA', fontSize: 'clamp(1.4rem, 3.2vw, 2.6rem)' }}
            >
              Emergio Games Pvt Ltd
            </h3>
            <p
              className="font-light leading-relaxed max-w-2xl mt-3 sm:mt-4"
              style={{ color: '#D7E2EA', opacity: 0.6, fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
            >
              Worked at Emergio Game Pvt Ltd as an Associate Game Developer, gaining hands-on experience in Unity game development 
              through building and experimenting with multiple gameplay prototypes. I worked across different game concepts and mechanics, 
              focusing on understanding gameplay systems, prototyping, and implementing core features.
              <p>
                During this experience, I created projects including Site Sprint, XO Clash, Rapid Fire, Forest Drive, and a multiplayer game using Unity Netcode, 
                strengthening my foundation in gameplay programming, game mechanics, and multiplayer development.
              </p>
              
            </p>
            <p
              className="uppercase tracking-widest mt-5 sm:mt-6 text-[0.65rem] sm:text-xs leading-relaxed"
              style={{ color: '#D7E2EA', opacity: 0.45 }}
            >
              UNITY · C# · GAME DEVELOPMENT · PROTOTYPING · GAMEPLAY SYSTEMS · UNITY NETCODE · MULTIPLAYER DEVELOPMENT

            </p>
          </div>
        </FadeIn>




        {/* Education — intentionally secondary */}
        <FadeIn delay={0.2}>
          <div
            className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-6"
            style={{ borderBottom: '1px solid rgba(215, 226, 234, 0.15)' }}
          >
            <div>
              <p
                className="uppercase tracking-widest text-[0.65rem] sm:text-xs"
                style={{ color: '#D7E2EA', opacity: 0.4 }}
              >
                Education
              </p>
              <p
                className="font-medium uppercase mt-1 text-sm sm:text-base"
                style={{ color: '#D7E2EA', opacity: 0.85 }}
              >
                St. Joseph's Institute of Technology
              </p>
            </div>
            <p className="font-light text-xs sm:text-sm" style={{ color: '#D7E2EA', opacity: 0.5 }}>
              Bachelor of Technology &mdash; Artificial Intelligence & Data Science
              &middot; Chennai
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
