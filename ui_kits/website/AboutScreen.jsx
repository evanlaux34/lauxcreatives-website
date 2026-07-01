/* global React */
const { Eyebrow, Divider, PhotoCard } = window.LauxCreativesDesignSystem_2042c0;

function AboutScreen() {
  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '84px 48px', display: 'grid', gridTemplateColumns: '1fr 0.85fr', gap: '56px', alignItems: 'center' }}>
        <div>
          <Eyebrow tone="accent" style={{ marginBottom: '20px' }}>Our Story</Eyebrow>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '58px', lineHeight: 1.0, color: 'var(--lc-ink)' }}>Storytellers at heart.</div>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '19px', lineHeight: 1.62, color: 'var(--lc-ink-soft)', marginTop: '26px', maxWidth: '520px', textWrap: 'pretty' }}>
            Laux Creatives was founded by Evan &amp; Alexis Laux with one simple hope — to serve people well through photography and design. We're drawn to the moments, details, and ideas that make your story worth telling.
          </p>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '19px', lineHeight: 1.62, color: 'var(--lc-ink-soft)', marginTop: '18px', maxWidth: '520px', textWrap: 'pretty' }}>
            We're not here to check boxes. We're here to show up, earn your trust, and create something that <em style={{ fontStyle: 'italic', color: 'var(--lc-ink)' }}>actually feels like you.</em>
          </p>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '40px', color: 'var(--lc-accent)', marginTop: '24px' }}>Evan &amp; Alexis</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start' }}>
          <PhotoCard src="../../assets/photos/evan.jpg" tone="bw" caption="Evan" fig="Fig. 01" height={360} />
          <PhotoCard src="../../assets/photos/alexis.jpg" tone="bw" caption="Alexis" fig="Fig. 02" height={360} />
        </div>
      </section>

      <section style={{ background: 'var(--surface-dark)', color: 'var(--lc-paper-text)', position: 'relative', padding: '88px 48px' }}>
        <div className="lc-grain"></div>
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <img src="../../assets/logos/mono-paper.png" alt="Laux Creatives" style={{ height: '78px', width: 'auto', opacity: 0.95 }} />
          <div style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: '30px', lineHeight: 1.3, marginTop: '26px' }}>
            "Drawn to the moments, details, and ideas that make your story worth telling."
          </div>
          <Divider label="Chicago & Beyond · Est. 2024" tone="onDark" style={{ marginTop: '38px', maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto' }} />
        </div>
      </section>

      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '84px 48px' }}>
        <Eyebrow tone="accent" style={{ marginBottom: '34px' }}>What We Offer</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '18px' }}>
          {[
            ['Weddings', 'Full-day coverage, from getting ready to the last dance.'],
            ['Engagements', 'A relaxed session to remember how this began.'],
            ['Family', 'Unposed, in-between, real — the people who showed up.'],
            ['Portraits', 'Honest light, honest you. 35mm and digital.'],
          ].map(([t, d]) => (
            <div key={t} style={{ borderTop: '1px solid var(--lc-line)', paddingTop: '18px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '27px', color: 'var(--lc-ink)' }}>{t}</div>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '16px', lineHeight: 1.55, color: 'var(--lc-ink-soft)', marginTop: '8px' }}>{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

window.AboutScreen = AboutScreen;
