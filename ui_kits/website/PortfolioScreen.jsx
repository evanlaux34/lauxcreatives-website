/* global React */
const { Eyebrow, Tag, PhotoCard, SectionHeader } = window.LauxCreativesDesignSystem_2042c0;

const PORTFOLIO = [
  { src: 'IMG_9828.jpg', cat: 'Weddings', cap: 'the whole party in motion' },
  { src: 'IMG_0092.jpg', cat: 'Weddings', cap: 'walking into forever' },
  { src: 'IMG_0374.jpg', cat: 'Engagements', cap: 'held still for a second' },
  { src: 'IMG_6684.jpg', cat: 'Engagements', cap: 'golden hour, hers' },
  { src: 'IMG_0644.jpg', cat: 'Engagements', cap: 'a field, the two of them' },
  { src: 'DSCF3673.jpg', cat: 'Portraits', cap: 'soft window light' },
  { src: 'IMG_8504.jpg', cat: 'Family', cap: 'the people who showed up' },
  { src: 'IMG_9244.jpg', cat: 'Family', cap: 'laughing, unposed' },
  { src: 'IMG_7351-2.jpg', cat: 'Portraits', cap: '35mm · the in-between' },
];
const CATS = ['All', 'Weddings', 'Engagements', 'Family', 'Portraits'];

function PortfolioScreen() {
  const [filter, setFilter] = React.useState('All');
  const shown = PORTFOLIO.filter((p) => filter === 'All' || p.cat === filter);

  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '72px 48px 40px' }}>
        <Eyebrow tone="accent" style={{ marginBottom: '18px' }}>The Work</Eyebrow>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '66px', lineHeight: 0.98, color: 'var(--lc-ink)' }}>Worth Remembering</div>
        <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '19px', lineHeight: 1.62, color: 'var(--lc-ink-soft)', marginTop: '20px', maxWidth: '560px' }}>
          A few of the days, fields, and faces we've been trusted with. Warm, candid, unhurried — the in-between moments most worth keeping.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
          {CATS.map((c) => (
            <span key={c} onClick={() => setFilter(c)} style={{ cursor: 'pointer' }}>
              <Tag variant={filter === c ? 'solid' : 'outline'}>{c}</Tag>
            </span>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 48px 84px' }}>
        <div style={{ columnCount: 3, columnGap: '18px' }}>
          {shown.map((p, i) => (
            <div key={p.src} style={{ breakInside: 'avoid', marginBottom: '18px' }}>
              <PhotoCard src={`../../assets/photos/${p.src}`} caption={p.cat} fig={`Fig. 0${(i % 9) + 1}`} height={i % 3 === 0 ? 360 : 260} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

window.PortfolioScreen = PortfolioScreen;
