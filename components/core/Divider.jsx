import React from 'react';

/**
 * Laux Creatives — Divider
 * Hairline rule. Plain, or with a centered Courier label / middot motif.
 */
export function Divider({ label, tone = 'paper', style, ...rest }) {
  const lineColor = tone === 'onDark' ? 'var(--lc-line-on-dark)' : 'var(--lc-line)';
  const textColor = tone === 'onDark' ? 'rgba(242,234,212,0.7)' : 'var(--lc-ink-muted)';

  if (!label) {
    return <hr style={{ border: 'none', borderTop: `1px solid ${lineColor}`, margin: 0, ...style }} {...rest} />;
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '18px', ...style }} {...rest}>
      <span style={{ flex: 1, height: '1px', background: lineColor }} />
      <span style={{
        fontFamily: 'var(--font-label)',
        fontSize: '10.5px',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: textColor,
        whiteSpace: 'nowrap',
      }}>{label}</span>
      <span style={{ flex: 1, height: '1px', background: lineColor }} />
    </div>
  );
}
