/* global React */
const { Button } = window.LauxCreativesDesignSystem_2042c0;

function Nav({ current, onNav }) {
  const items = ['Home', 'Portfolio', 'About', 'Investment'];
  const { isMobile } = window.useViewport();
  const [open, setOpen] = React.useState(false);

  // Close the mobile menu whenever we grow back to desktop.
  React.useEffect(() => { if (!isMobile) setOpen(false); }, [isMobile]);

  const go = (s) => { setOpen(false); onNav(s); };

  const linkStyle = (active, extra) => ({
    fontFamily: 'var(--font-label)', fontSize: '11px', letterSpacing: '0.24em',
    textTransform: 'uppercase', cursor: 'pointer',
    color: active ? 'var(--lc-accent)' : 'var(--lc-ink-soft)',
    borderBottom: active ? '1px solid var(--lc-accent)' : '1px solid transparent',
    paddingBottom: '3px', transition: 'color var(--dur-fast) var(--ease-soft)',
    ...extra,
  });

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 30,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: isMobile ? '13px 20px' : '18px 46px',
      background: 'rgba(235,226,201,0.92)',
      backdropFilter: 'saturate(1.1)',
      borderBottom: '1px solid var(--lc-line)',
    }}>
      <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => go('Home')}>
        <img src="../../assets/logos/lockup-ink.png" alt="Laux Creatives" style={{ height: isMobile ? '28px' : '34px', width: 'auto', display: 'block' }} />
      </div>

      {isMobile ? (
        <React.Fragment>
          <button
            aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
              display: 'flex', flexDirection: 'column', gap: '5px', margin: '-8px -8px -8px 0',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', width: '24px', height: '1.5px', background: 'var(--lc-ink)',
                transition: 'transform var(--dur-fast) var(--ease-soft), opacity var(--dur-fast) var(--ease-soft)',
                transform: open ? (i === 0 ? 'translateY(6.5px) rotate(45deg)' : i === 2 ? 'translateY(-6.5px) rotate(-45deg)' : 'none') : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>

          {open && (
            <div style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'var(--surface-page)', borderBottom: '1px solid var(--lc-line)',
              boxShadow: 'var(--shadow-card)',
              display: 'flex', flexDirection: 'column', gap: '4px', padding: '18px 20px 24px',
            }}>
              {items.map((it) => (
                <a key={it} onClick={() => go(it)} style={linkStyle(current === it, {
                  padding: '12px 0', borderBottom: '1px solid var(--lc-line)', fontSize: '13px',
                })}>{it}</a>
              ))}
              <div style={{ marginTop: '16px' }}>
                <Button variant="primary" onClick={() => go('Contact')}>Inquire</Button>
              </div>
            </div>
          )}
        </React.Fragment>
      ) : (
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {items.map((it) => (
            <a key={it} onClick={() => onNav(it)} style={linkStyle(current === it)}>{it}</a>
          ))}
          <Button variant="primary" size="sm" onClick={() => onNav('Contact')}>Inquire</Button>
        </nav>
      )}
    </header>
  );
}

window.Nav = Nav;
