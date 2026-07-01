/* global React */
const { Button } = window.LauxCreativesDesignSystem_2042c0;

function Nav({ current, onNav }) {
  const items = ['Home', 'Portfolio', 'About', 'Investment'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 30,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 46px',
      background: 'rgba(235,226,201,0.92)',
      backdropFilter: 'saturate(1.1)',
      borderBottom: '1px solid var(--lc-line)',
    }}>
      <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => onNav('Home')}>
        <img src="../../assets/logos/lockup-ink.png" alt="Laux Creatives" style={{ height: '34px', width: 'auto', display: 'block' }} />
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {items.map((it) => (
          <a key={it} onClick={() => onNav(it)} style={{
            fontFamily: 'var(--font-label)', fontSize: '11px', letterSpacing: '0.24em',
            textTransform: 'uppercase', cursor: 'pointer',
            color: current === it ? 'var(--lc-accent)' : 'var(--lc-ink-soft)',
            borderBottom: current === it ? '1px solid var(--lc-accent)' : '1px solid transparent',
            paddingBottom: '3px', transition: 'color var(--dur-fast) var(--ease-soft)',
          }}>{it}</a>
        ))}
        <Button variant="primary" size="sm" onClick={() => onNav('Contact')}>Inquire</Button>
      </nav>
    </header>
  );
}

window.Nav = Nav;
