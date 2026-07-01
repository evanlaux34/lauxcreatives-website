import React from 'react';

/**
 * Laux Creatives — Button
 * Square, letterpress-feel button with an uppercase Courier label.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  as = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    sm: { padding: '8px 18px', fontSize: '10.5px', tracking: '0.22em' },
    md: { padding: '13px 28px', fontSize: '12px', tracking: '0.26em' },
    lg: { padding: '17px 38px', fontSize: '13px', tracking: '0.28em' },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    fontFamily: "var(--font-label)",
    fontSize: s.fontSize,
    letterSpacing: s.tracking,
    textTransform: 'uppercase',
    padding: s.padding,
    border: '1px solid transparent',
    borderRadius: 'var(--radius-none)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft), box-shadow var(--dur) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    textDecoration: 'none',
    lineHeight: 1,
    boxShadow: hover && !disabled ? 'var(--shadow-raise)' : 'none',
    transform: active && !disabled ? 'translateY(1px)' : 'none',
  };

  const variants = {
    primary: {
      background: active ? 'var(--lc-sepia-ink-deep)' : 'var(--lc-sepia-ink)',
      color: 'var(--lc-paper-text)',
      borderColor: 'var(--lc-sepia-ink)',
    },
    secondary: {
      background: hover ? 'var(--lc-ivory-light)' : 'transparent',
      color: 'var(--lc-ink)',
      borderColor: 'var(--lc-ink)',
    },
    ghost: {
      background: 'transparent',
      color: hover ? 'var(--lc-accent)' : 'var(--lc-ink-soft)',
      borderColor: 'transparent',
      padding: '6px 4px',
    },
    onDark: {
      background: hover ? 'var(--lc-paper-text)' : 'transparent',
      color: hover ? 'var(--lc-sepia-ink)' : 'var(--lc-paper-text)',
      borderColor: 'var(--lc-line-on-photo)',
    },
  };

  const Tag = as;
  return (
    <Tag
      style={{ ...base, ...(variants[variant] || variants.primary) }}
      disabled={as === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
