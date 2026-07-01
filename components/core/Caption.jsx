import React from 'react';

/**
 * Laux Creatives — Caption
 * Contact-sheet style caption for under photos. Courier, uppercase.
 */
export function Caption({ children, fig, tone = 'muted', style, ...rest }) {
  const colors = {
    muted: 'var(--lc-ink-muted)',
    onDark: 'rgba(242,234,212,0.7)',
  };
  return (
    <div
      style={{
        fontFamily: 'var(--font-label)',
        fontSize: 'var(--type-label-sm)',
        letterSpacing: 'var(--type-label-tracking-sm)',
        textTransform: 'uppercase',
        color: colors[tone] || colors.muted,
        ...style,
      }}
      {...rest}
    >
      {fig ? `${fig} — ` : ''}{children}
    </div>
  );
}
