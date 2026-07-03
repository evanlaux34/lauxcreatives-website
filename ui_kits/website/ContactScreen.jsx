/* global React */
const { Eyebrow, Input, Button } = window.LauxCreativesDesignSystem_2042c0;

const FIELDS = [
  { name: 'names', label: 'Your names', placeholder: 'John Doe' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'hello@example.com' },
  { name: 'date', label: 'The date', placeholder: '10/1/2026' },
  { name: 'headed', label: 'Where are we headed?', placeholder: 'Venue? City? State?' },
  { name: 'found', label: 'How did you find Laux Creatives?', placeholder: 'Facebook, Instagram, The Knot, referral?' },
  { name: 'more', label: 'Tell us more!', placeholder: 'What else should we know?', multiline: true },
];

const EMPTY = FIELDS.reduce((acc, f) => ({ ...acc, [f.name]: '' }), {});
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [values, setValues] = React.useState(EMPTY);
  const [errors, setErrors] = React.useState({});
  const [shaking, setShaking] = React.useState({});
  const { isMobile, isTablet } = window.useViewport();

  const onField = (name) => (e) => {
    const v = e.target.value;
    setValues((p) => ({ ...p, [name]: v }));
    // Clear the error as soon as they start fixing the field.
    setErrors((p) => (p[name] ? { ...p, [name]: undefined } : p));
  };

  const validate = () => {
    const errs = {};
    FIELDS.forEach((f) => {
      const val = (values[f.name] || '').trim();
      if (!val) errs[f.name] = 'Please fill this out';
      else if (f.type === 'email' && !EMAIL_RE.test(val)) errs[f.name] = 'Enter a valid email';
    });
    return errs;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      const s = {};
      Object.keys(errs).forEach((n) => { s[n] = true; });
      // Clear first, then re-apply on the next frame so the shake restarts every
      // submit even if a previous one is still animating (re-applying the same
      // CSS animation is otherwise a no-op). No remount, so typing keeps focus.
      setShaking({});
      requestAnimationFrame(() => requestAnimationFrame(() => setShaking(s)));
      return;
    }
    setErrors({});
    setSent(true);
  };

  const reset = () => { setValues(EMPTY); setErrors({}); setShaking({}); setSent(false); };

  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <style>{`@keyframes lc-shake {
        10%, 90% { transform: translateX(-1px); }
        20%, 80% { transform: translateX(2px); }
        30%, 50%, 70% { transform: translateX(-5px); }
        40%, 60% { transform: translateX(5px); }
      }`}</style>
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
              <div style={{ marginTop: '24px' }}><Button variant="ghost" onClick={reset}>Send another →</Button></div>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {FIELDS.map((f) => {
                const err = errors[f.name];
                return (
                  <div
                    key={f.name}
                    onAnimationEnd={() => setShaking((p) => (p[f.name] ? { ...p, [f.name]: false } : p))}
                    style={{ animation: shaking[f.name] ? 'lc-shake 0.42s cubic-bezier(.36,.07,.19,.97) both' : undefined }}
                  >
                    <Input
                      label={f.label}
                      type={f.type}
                      multiline={f.multiline}
                      placeholder={f.placeholder}
                      value={values[f.name]}
                      onChange={onField(f.name)}
                      aria-invalid={err ? 'true' : undefined}
                      style={err ? { borderBottom: '1px solid var(--status-danger)' } : undefined}
                    />
                    {err ? (
                      <div style={{ marginTop: '7px', fontFamily: 'var(--font-label)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--status-danger)' }}>{err}</div>
                    ) : null}
                  </div>
                );
              })}
              <Button variant="primary" size="lg" as="button" type="submit">Send the note</Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

window.ContactScreen = ContactScreen;
