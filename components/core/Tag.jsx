import React from 'react';

/**
 * Laux Creatives — Tag
 * Small Courier label chip. Outline by default; filled / pill variants.
 */
export function Tag({ children, variant = 'outline', style, ...rest }) {
  const variants = {
    outline: { background: 'transparent', color: 'var(--lc-ink-soft)', border: '1px solid var(--lc-line)' },
    solid: { background: 'var(--lc-aged-olive)', color: 'var(--lc-paper-text)', border: '1px solid var(--lc-aged-olive)' },
    accent: { background: 'transparent', color: 'var(--lc-accent)', border: '1px solid var(--lc-accent)' },
    pill: { background: 'var(--lc-ivory-light)', color: 'var(--lc-ink-soft)', border: '1px solid var(--lc-line-soft)', borderRadius: 'var(--radius-pill)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-label)',
        fontSize: '10.5px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        padding: '5px 11px',
        lineHeight: 1,
        borderRadius: 'var(--radius-none)',
        ...(variants[variant] || variants.outline),
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
