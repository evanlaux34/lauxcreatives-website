/* global React */
const { Eyebrow, Button, PhotoCard, SectionHeader, Caption, Logo } = window.LauxCreativesDesignSystem_2042c0;

function HomeScreen({ onNav }) {
  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative', height: '648px', overflow: 'hidden',
        backgroundImage: 'linear-gradient(180deg,rgba(40,35,24,0.5) 0%,rgba(40,35,24,0.18) 42%,rgba(40,35,24,0.68) 100%),url(../../assets/photos/IMG_9828-hero.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center 42%', color: 'var(--lc-paper-text)',
      }}>
        <div className="lc-grain"></div>
        <div style={{ position: 'absolute', inset: '22px', border: '1px solid var(--lc-line-on-photo)', pointerEvents: 'none' }}></div>
        <div style={{
          position: 'absolute', left: '46px', right: '46px', top: '34px',
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'var(--font-label)', fontSize: '11px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(242,234,212,0.92)',
        }}>
          <span>Chicago &amp; Beyond</span><span>Est. 2024</span>
        </div>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 40px' }}>
          <img src="../../assets/logos/mark-circle-paper.png" alt="Laux Creatives" style={{ height: '84px', width: 'auto', marginBottom: '20px', filter: 'drop-shadow(0 2px 14px rgba(30,26,16,0.45))', transform: 'translate(0px, -130px)', boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.15)' }} />
          <img src="../../assets/logos/wordmark-paper.png" alt="Laux Creatives" style={{ width: '450px', height: 'auto', display: 'block', filter: 'drop-shadow(0 2px 20px rgba(30,26,16,0.42))', transform: 'translate(0px, 29px)' }} />
          <div style={{ marginTop: '20px', fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: '23px', color: 'rgba(242,234,212,0.95)', textShadow: '0 1px 10px rgba(30,26,16,0.5)', transform: 'translate(0px, 20px)' }}>
            Serving people well through photography &amp; design
          </div>
          <div style={{ marginTop: '34px', display: 'flex', gap: '14px' }}>
            <Button variant="onDark" onClick={() => onNav('Portfolio')}>View the Work</Button>
            <Button variant="onDark" onClick={() => onNav('Contact')}>Inquire</Button>
          </div>
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: '40px', textAlign: 'center', fontFamily: 'var(--font-label)', fontSize: '11px', letterSpacing: '0.34em', textTransform: 'uppercase', color: 'rgba(242,234,212,0.85)' }}>
          Photography · Design · Storytelling
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: 'var(--surface-page)', padding: '84px 48px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow tone="accent" style={{ marginBottom: '20px' }}>Our Hope</Eyebrow>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '46px', lineHeight: 1.06, color: 'var(--lc-ink)' }}>
            We're drawn to the moments that make your story worth telling.
          </div>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '19px', lineHeight: 1.62, color: 'var(--lc-ink-soft)', marginTop: '24px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', textWrap: 'balance' }}>
            We're not here to check boxes. We're here to show up, earn your trust, and create something that <em style={{ fontStyle: 'italic', color: 'var(--lc-ink)' }}>actually feels like you.</em>
          </p>
        </div>
      </section>

      {/* Featured work */}
      <section style={{ background: 'var(--surface-page-alt)', padding: '84px 48px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <SectionHeader number="01" title="Featured Work" meta="Weddings · Engagements · Family" style={{ marginBottom: '36px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: '18px' }}>
            <div style={{ gridRow: 'span 2', display: 'flex' }}>
              <PhotoCard src="../../assets/photos/IMG_9828.jpg" caption="Weddings" fig="Fig. 01" height={520} fill style={{ flex: '1 1 auto' }} />
            </div>
            <PhotoCard src="../../assets/photos/IMG_0374.jpg" caption="Engagements" height={251} />
            <PhotoCard src="../../assets/photos/DSCF3673.jpg" caption="Portraits" height={251} />
            <PhotoCard src="../../assets/photos/IMG_6684.jpg" caption="Engagements" height={251} />
            <PhotoCard src="../../assets/photos/IMG_9244.jpg" caption="Family" height={251} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Button variant="secondary" onClick={() => onNav('Portfolio')}>See the full gallery</Button>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section style={{ background: 'var(--surface-page)', padding: '84px 48px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '0.85fr 1fr', gap: '56px', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', alignItems: 'start' }}>
            <PhotoCard src="../../assets/photos/evan.jpg" tone="bw" caption="Evan" fig="Fig. 01" height={300} />
            <PhotoCard src="../../assets/photos/alexis.jpg" tone="bw" caption="Alexis" fig="Fig. 02" height={300} />
          </div>
          <div>
            <Eyebrow tone="accent" style={{ marginBottom: '20px' }}>Our Story</Eyebrow>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '52px', lineHeight: 1.0, color: 'var(--lc-ink)' }}>Storytellers<br />at heart.</div>
            <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '19px', lineHeight: 1.62, color: 'var(--lc-ink-soft)', marginTop: '24px', maxWidth: '480px', textWrap: 'pretty' }}>
              Laux Creatives was founded by Evan &amp; Alexis Laux with one simple hope — to serve people well through photography and design.
            </p>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '38px', color: 'var(--lc-accent)', marginTop: '20px' }}>Evan &amp; Alexis</div>
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
