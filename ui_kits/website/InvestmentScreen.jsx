/* global React */
const { Eyebrow, Divider } = window.LauxCreativesDesignSystem_2042c0;

const PACKAGES = [
  {
    name: 'The First Package',
    coverage: '4–5 hours',
    price: '$1,750',
    featured: false,
    includes: [
      'Engagement session included',
      '1 wedding photographer (myself)',
      'Next-day teasers',
      'Online gallery within 6 weeks',
    ],
  },
  {
    name: 'The Second Package',
    coverage: '6–8 hours',
    price: '$2,000',
    featured: false,
    includes: [
      'Engagement session included',
      '1 wedding photographer',
      'Next-day teasers',
      'Online gallery within 6 weeks',
    ],
  },
  {
    name: 'The Third Package',
    coverage: '8 hours',
    price: '$2,500',
    featured: true,
    includes: [
      'Engagement session included',
      '2 wedding photographers',
      'Next-day teasers',
      'Online gallery within 6 weeks',
    ],
  },
  {
    name: 'The Fourth Package',
    coverage: '8 hours',
    price: '$3,750',
    featured: false,
    includes: [
      'Engagement session included',
      '1 photographer & 1 videographer',
      'Next-day teasers',
      'Online gallery in 4–6 weeks',
      'Documentary-style video within 6 weeks',
      'Wide-angle video of the ceremony within 6 weeks',
    ],
  },
];

function PackageCard({ pkg, onNav }) {
  const f = pkg.featured;
  const pAccent = f ? '#F2EAD4' : 'var(--lc-accent)';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      background: f ? 'var(--surface-dark)' : 'var(--surface-card)',
      color: f ? 'var(--lc-paper-text)' : 'var(--lc-ink)',
      border: '1px solid ' + (f ? 'var(--surface-dark)' : 'var(--lc-line-soft)'),
      boxShadow: 'var(--shadow-card)',
      padding: '32px 28px',
    }}>
      <div style={{
        fontFamily: 'var(--font-label)', fontSize: '10.5px', letterSpacing: '0.24em',
        textTransform: 'uppercase', color: f ? pAccent : 'var(--lc-ink-muted)',
      }}>Collection</div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '24px', lineHeight: 1.05,
        whiteSpace: 'nowrap', letterSpacing: '-0.01em', marginTop: '14px',
        color: f ? 'var(--lc-paper-text)' : 'var(--lc-ink)',
      }}>{pkg.name}</div>
      <div style={{
        fontFamily: 'var(--font-label)', fontSize: '11px', letterSpacing: '0.2em',
        textTransform: 'uppercase', color: f ? 'rgba(242,234,212,0.7)' : 'var(--lc-ink-muted)', marginTop: '4px',
      }}>{pkg.coverage} coverage</div>

      <div style={{ height: '1px', background: f ? 'rgba(242,234,212,0.2)' : 'var(--lc-line)', margin: '20px 0' }}></div>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '11px', flex: 1 }}>
        {pkg.includes.map((t) => (
          <li key={t} style={{
            fontFamily: 'var(--font-editorial)', fontSize: '16.5px', lineHeight: 1.5,
            color: f ? 'rgba(242,234,212,0.9)' : 'var(--lc-ink-soft)',
            paddingLeft: '18px', position: 'relative',
          }}>
            <span style={{ position: 'absolute', left: 0, top: 0, color: pAccent }}>·</span>{t}
          </li>
        ))}
      </ul>

      <div style={{ height: '1px', background: f ? 'rgba(242,234,212,0.2)' : 'var(--lc-line)', margin: '20px 0' }}></div>

      <div style={{
        fontFamily: 'var(--font-label)', fontSize: '10px', letterSpacing: '0.24em',
        textTransform: 'uppercase', color: f ? 'rgba(242,234,212,0.6)' : 'var(--lc-ink-muted)',
      }}>Starting at</div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '42px', letterSpacing: '-0.01em',
        color: f ? pAccent : 'var(--lc-ink)', marginTop: '2px',
      }}>{pkg.price}</div>

      <div onClick={() => onNav('Contact')} style={{
        marginTop: '22px', fontFamily: 'var(--font-label)', fontSize: '11px', letterSpacing: '0.2em',
        textTransform: 'uppercase', textAlign: 'center', cursor: 'pointer', padding: '13px',
        border: '1px solid ' + (f ? 'rgba(242,234,212,0.45)' : 'var(--lc-ink-muted)'),
        background: f ? pAccent : 'transparent',
        color: f ? 'var(--surface-dark)' : 'var(--lc-ink)',
      }}>Inquire</div>
    </div>
  );
}

function InvestmentScreen({ onNav }) {
  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '72px 48px 28px', textAlign: 'center' }}>
        <Eyebrow tone="accent" style={{ marginBottom: '18px' }}>Investment</Eyebrow>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '60px', lineHeight: 0.98, color: 'var(--lc-ink)' }}>Wedding Collections</div>
        <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '19px', lineHeight: 1.62, color: 'var(--lc-ink-soft)', margin: '20px auto 0', maxWidth: '600px', textWrap: 'pretty' }}>
          Every collection includes an engagement session and next-day teasers. Not sure which fits your day? <em style={{ fontStyle: 'italic', color: 'var(--lc-ink)' }}>Reach out — we'll help you find the right one.</em>
        </p>
        <Divider label="Weddings · Chicago & Beyond" style={{ maxWidth: '360px', margin: '30px auto 0' }} />
      </section>

      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '24px 48px 84px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '18px', alignItems: 'stretch' }}>
          {PACKAGES.map((p) => <PackageCard key={p.name} pkg={p} onNav={onNav} />)}
        </div>
        <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: '17px', color: 'var(--lc-ink-muted)', textAlign: 'center', margin: '40px auto 0', maxWidth: '620px', textWrap: 'pretty' }}>
          Custom collections, elopements, and travel are always welcome — tell us about your day and we'll tailor something to fit.
        </p>
      </section>
    </div>
  );
}

window.InvestmentScreen = InvestmentScreen;
