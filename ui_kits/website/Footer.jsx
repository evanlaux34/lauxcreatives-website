/* global React */

const KNOT_URL = 'https://www.theknot.com/marketplace/laux-creatives-warrenville-il-2103719';
const INSTAGRAM_URL = 'https://www.instagram.com/evan_laux';

function FooterLink({ href, children }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-block', fontFamily: 'var(--font-editorial)', fontSize: '17px',
        color: hover ? 'var(--lc-accent)' : 'rgba(242,234,212,0.85)',
        transition: 'color var(--dur-fast) var(--ease-soft)',
      }}
    >{children}</a>
  );
}

function Footer({ onNav }) {
  const { isMobile } = window.useViewport();
  return (
    <footer style={{ background: 'var(--surface-footer)', color: 'rgba(242,234,212,0.85)' }}>
      <div style={{
        maxWidth: '1180px', margin: '0 auto', padding: isMobile ? '44px 22px' : '54px 48px',
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr 1fr', gap: isMobile ? '30px' : '40px', alignItems: 'start',
      }}>
        <div>
        <div onClick={() => onNav('Home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
          <img src="../../assets/logos/lockup-paper.png" alt="Laux Creatives" style={{ height: '36px', width: 'auto', display: 'block' }} />
        </div>
          <p style={{
            fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: '17px',
            color: 'rgba(242,234,212,0.8)', marginTop: '14px', maxWidth: '320px', lineHeight: 1.5,
          }}>Serving people well through photography &amp; design.</p>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-label)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--lc-accent)', marginBottom: '16px' }}>Explore</div>
          {['Home', 'Portfolio', 'About', 'Investment', 'Contact'].map((it) => (
            <div key={it} onClick={() => onNav(it)} style={{ fontFamily: 'var(--font-editorial)', fontSize: '17px', color: 'rgba(242,234,212,0.85)', cursor: 'pointer', marginBottom: '8px' }}>{it}</div>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-label)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--lc-accent)', marginBottom: '16px' }}>Studio</div>
          <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '17px', color: 'rgba(242,234,212,0.85)', lineHeight: 1.7 }}>
            Chicago &amp; Beyond
          </div>
          <div style={{ fontFamily: 'var(--font-label)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--lc-accent)', margin: '22px 0 16px' }}>Find Us On</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <FooterLink href={KNOT_URL}>The Knot<span style={{ marginLeft: '7px', fontSize: '15px' }}>→</span></FooterLink>
            <FooterLink href={INSTAGRAM_URL}>Instagram<span style={{ marginLeft: '7px', fontSize: '15px' }}>→</span></FooterLink>
          </div>
        </div>
      </div>
      <div style={{
        borderTop: '1px solid rgba(242,234,212,0.16)', padding: isMobile ? '18px 22px' : '20px 48px',
        display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '8px' : 0,
        justifyContent: 'space-between', textAlign: isMobile ? 'center' : 'left',
        fontFamily: 'var(--font-label)', fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(242,234,212,0.6)',
      }}>
        <span>Est. 2024</span>
        <span>Photography · Design · Storytelling</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
