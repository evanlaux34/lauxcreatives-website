/* global React */
const { Eyebrow, Input, Button } = window.LauxCreativesDesignSystem_2042c0;

function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const { isMobile, isTablet } = window.useViewport();
  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: isMobile ? '56px 22px' : '84px 48px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '64px', alignItems: 'start' }}>
        <div>
          <Eyebrow tone="accent" style={{ marginBottom: '20px' }}>Say Hello</Eyebrow>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '36px' : isTablet ? '46px' : '54px', lineHeight: 1.0, color: 'var(--lc-ink)' }}>Let's tell your story.</div>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: isMobile ? '17px' : '19px', lineHeight: 1.62, color: 'var(--lc-ink-soft)', marginTop: '22px', maxWidth: '440px', textWrap: 'pretty' }}>
            Tell us a little about your day. We read every note ourselves and reply within 24 hours.
          </p>
          <div style={{ marginTop: '34px', fontFamily: 'var(--font-label)', fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--lc-ink-muted)', lineHeight: 2.2 }}>
            Chicago &amp; Beyond
          </div>
          <img src="../../assets/logos/badge-gold.png" alt="Laux Creatives — Chicago & Beyond" style={{ height: '96px', width: 'auto', marginTop: '30px', opacity: 0.95 }} />
        </div>

        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--lc-line-soft)', boxShadow: 'var(--shadow-card)', padding: isMobile ? '26px 22px' : '40px' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 12px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '40px', color: 'var(--lc-ink)' }}>Thank you.</div>
              <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: '19px', color: 'var(--lc-ink-soft)', marginTop: '12px' }}>
                We'll be in touch soon — we can't wait to hear more.
              </p>
              <div style={{ marginTop: '24px' }}><Button variant="ghost" onClick={() => setSent(false)}>Send another →</Button></div>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Input label="Your names" placeholder="John Doe" />
              <Input label="Email" type="email" placeholder="hello@example.com" />
              <Input label="The date" placeholder="10/1/2026" />
              <Input label="Tell us more!" multiline placeholder="What else should we know?" />
              <Button variant="primary" size="lg" as="button" type="submit">Send the note</Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

window.ContactScreen = ContactScreen;
