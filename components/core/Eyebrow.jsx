import React from 'react';

/**
 * Laux Creatives — Eyebrow
 * Uppercase Courier label used above headlines and as section markers.
 */
export function Eyebrow({ children, number, tone = 'accent', style, ...rest }) {
  const colors = {
    accent: 'var(--lc-accent)',
    muted: 'var(--lc-ink-muted)',
    onDark: 'rgba(242,234,212,0.85)',
  };
  return (
    <div
      style={{
        fontFamily: 'var(--font-label)',
        fontSize: 'var(--type-label)',
        letterSpacing: 'var(--type-label-tracking)',
        textTransform: 'uppercase',
        color: colors[tone] || colors.accent,
        ...style,
      }}
      {...rest}
    >
      {number ? `${number} — ` : ''}{children}
    </div>
  );
}
