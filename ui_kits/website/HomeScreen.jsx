/* global React */
const { Eyebrow, Button, PhotoCard, SectionHeader, Caption, Logo } = window.LauxCreativesDesignSystem_2042c0;

// Hero slideshow images (cross-fade + loop). First one is the initial/prerendered frame.
const HERO_SLIDES = [
  '/assets/photos/hero-web/IMG_9828-hero.jpg',
  '/assets/photos/hero-web/IMG_0861.jpg',
  '/assets/photos/hero-web/IMG_0092.jpg',
  '/assets/photos/hero-web/IMG_3051.jpg',
  '/assets/photos/hero-web/IMG_6926-3.jpg',
];

function HomeScreen({ onNav }) {
  const { isMobile, isTablet } = window.useViewport();
  const pad = isMobile ? '56px 22px' : isTablet ? '72px 40px' : '84px 48px';

  // Cross-fading hero slideshow — advance every 5.5s, looping.
  const [heroIdx, setHeroIdx] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setHeroIdx(i => (i + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(id);
  }, []);

  // Featured grid: 3-up on desktop (first card tall), 2-up on tablet, stacked on mobile.
  const featCols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1.3fr 1fr 1fr';
  const heroCard = !isMobile && !isTablet; // only desktop uses the tall span-2 hero card
  const smallH = heroCard ? 251 : isMobile ? 300 : 260;

  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative', height: isMobile ? 'clamp(380px, 52vh, 440px)' : 'clamp(620px, 86vh, 900px)', overflow: 'hidden',
        background: 'var(--lc-ink)', color: 'var(--lc-paper-text)',
      }}>
        {/* Cross-fading slideshow layers */}
        {HERO_SLIDES.map((src, i) => (
          <div key={src} aria-hidden="true" style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover', backgroundPosition: 'center 42%',
            opacity: i === heroIdx ? 1 : 0,
            transition: 'opacity 1.6s ease-in-out', willChange: 'opacity',
          }}></div>
        ))}
        {/* Gradient wash over the photos */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(180deg,rgba(40,35,24,0.5) 0%,rgba(40,35,24,0.18) 42%,rgba(40,35,24,0.68) 100%)' }}></div>
        <div className="lc-grain"></div>
        <div style={{ position: 'absolute', inset: isMobile ? '12px' : '22px', border: '1px solid var(--lc-line-on-photo)', pointerEvents: 'none' }}></div>
        <div style={{
          position: 'absolute', left: isMobile ? '20px' : '46px', right: isMobile ? '20px' : '46px', top: isMobile ? '22px' : '34px',
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'var(--font-label)', fontSize: isMobile ? '9.5px' : '11px', letterSpacing: isMobile ? '0.2em' : '0.32em', textTransform: 'uppercase', color: 'rgba(242,234,212,0.92)',
        }}>
          <span>Chicago &amp; Beyond</span><span>Est. 2024</span>
        </div>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: isMobile ? 'flex-end' : 'center', textAlign: 'center', padding: isMobile ? '0 24px 74px' : '0 40px' }}>
          <img src="/assets/logos/mark-circle-paper.png" alt="Laux Creatives" style={{ height: isMobile ? '46px' : '84px', width: 'auto', marginBottom: isMobile ? '10px' : '20px', filter: 'drop-shadow(0 2px 14px rgba(30,26,16,0.45))', transform: isMobile ? 'translateY(-83px)' : 'translate(0px, -130px)' }} />
          <img src="/assets/logos/wordmark-paper.png" alt="Laux Creatives" style={{ width: isMobile ? 'min(58vw, 230px)' : '450px', height: 'auto', display: 'block', filter: 'drop-shadow(0 2px 20px rgba(30,26,16,0.42))', transform: isMobile ? 'none' : 'translate(0px, 51px)' }} />
          <div style={{ marginTop: isMobile ? '14px' : '20px', fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: isMobile ? '14px' : '23px', color: 'rgba(242,234,212,0.95)', textShadow: '0 1px 10px rgba(30,26,16,0.5)', transform: isMobile ? 'none' : 'translate(0px, 42px)' }}>
            Serving people well through photography &amp; design
          </div>
          <div style={{ marginTop: isMobile ? '26px' : '34px', display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', transform: isMobile ? 'none' : 'translateY(22px)' }}>
            <Button variant="onDark" onClick={() => onNav('Portfolio')}>View the Work</Button>
            <Button variant="onDark" onClick={() => onNav('Contact')}>Inquire</Button>
          </div>
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: isMobile ? '20px' : '40px', textAlign: 'center', padding: '0 20px', fontFamily: 'var(--font-label)', fontSize: isMobile ? '9.5px' : '11px', letterSpacing: isMobile ? '0.2em' : '0.34em', textTransform: 'uppercase', color: 'rgba(242,234,212,0.85)' }}>
          Photography · Design · Storytelling
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: 'var(--surface-page)', padding: pad }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow tone="accent" style={{ marginBottom: '20px' }}>Our Hope</Eyebrow>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '30px' : isTablet ? '40px' : '46px', lineHeight: 1.06, color: 'var(--lc-ink)' }}>
            We're drawn to the moments that make your story worth telling.
          </div>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: isMobile ? '17px' : '19px', lineHeight: 1.62, color: 'var(--lc-ink-soft)', marginTop: '24px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', textWrap: 'balance' }}>
            We're not here to check boxes. We're here to show up, earn your trust, and create something that <em style={{ fontStyle: 'italic', color: 'var(--lc-ink)' }}>actually feels like you.</em>
          </p>
        </div>
      </section>

      {/* Featured work */}
      <section style={{ background: 'var(--surface-page-alt)', padding: pad }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <SectionHeader number="01" title="Featured Work" meta="Weddings · Engagements · Family" style={{ marginBottom: '36px', ...(isMobile ? { flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px' } : {}) }} />
          <div style={{ display: 'grid', gridTemplateColumns: featCols, gap: '18px' }}>
            {heroCard ? (
              <div style={{ gridRow: 'span 2', display: 'flex' }}>
                <PhotoCard src="/assets/photos/weddings/IMG_9828.jpg" caption="Weddings" fig="Fig. 01" height={520} fill style={{ flex: '1 1 auto' }} />
              </div>
            ) : (
              <PhotoCard src="/assets/photos/weddings/IMG_9828.jpg" caption="Weddings" fig="Fig. 01" height={isMobile ? 320 : 300} />
            )}
            <PhotoCard src="/assets/photos/engagements/IMG_0374.jpg" caption="Engagements" height={smallH} />
            <PhotoCard src="/assets/photos/portraits/DSCF3673.jpg" caption="Portraits" height={smallH} />
            <PhotoCard src="/assets/photos/engagements/IMG_6684.jpg" caption="Engagements" height={smallH} />
            <PhotoCard src="/assets/photos/family/IMG_9244.jpg" caption="Family" height={smallH} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Button variant="secondary" onClick={() => onNav('Portfolio')}>See the full gallery</Button>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section style={{ background: 'var(--surface-page)', padding: pad }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.85fr 1fr', gap: isMobile ? '32px' : '56px', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', alignItems: 'start' }}>
            <PhotoCard src="/assets/photos/evan.jpg" tone="bw" caption="Evan" fig="Fig. 01" height={isMobile ? 240 : 300} />
            <PhotoCard src="/assets/photos/alexis.jpg" tone="bw" caption="Alexis" fig="Fig. 02" height={isMobile ? 240 : 300} />
          </div>
          <div>
            <Eyebrow tone="accent" style={{ marginBottom: '20px' }}>Our Story</Eyebrow>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '34px' : isTablet ? '44px' : '52px', lineHeight: 1.0, color: 'var(--lc-ink)' }}>Storytellers<br />at heart.</div>
            <p style={{ fontFamily: 'var(--font-editorial)', fontSize: isMobile ? '17px' : '19px', lineHeight: 1.62, color: 'var(--lc-ink-soft)', marginTop: '24px', maxWidth: '480px', textWrap: 'pretty' }}>
              Laux Creatives was founded by Evan &amp; Alexis Laux with one simple hope — to serve people well through photography and design.
            </p>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '30px' : '38px', color: 'var(--lc-accent)', marginTop: '20px' }}>Evan &amp; Alexis</div>
            <div style={{ marginTop: '20px' }}>
              <Button variant="ghost" onClick={() => onNav('About')}>More about us →</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.HomeScreen = HomeScreen;
