import React from 'react';

/**
 * Laux Creatives — Input
 * Underline-style editorial field. Courier label, Garamond input text.
 */
export function Input({ label, type = 'text', multiline = false, style, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `lc-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);

  const fieldStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focus ? 'var(--lc-accent)' : 'var(--lc-line)'}`,
    borderRadius: 'var(--radius-none)',
    fontFamily: 'var(--font-editorial)',
    fontSize: '18px',
    color: 'var(--lc-ink)',
    padding: '8px 2px',
    outline: 'none',
    transition: 'border-color var(--dur) var(--ease-soft)',
    resize: multiline ? 'vertical' : undefined,
    ...style,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label ? (
        <label
          htmlFor={fieldId}
          style={{
            fontFamily: 'var(--font-label)',
            fontSize: '10.5px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--lc-ink-muted)',
          }}
        >
          {label}
        </label>
      ) : null}
      {multiline ? (
        <textarea id={fieldId} rows={3} style={fieldStyle}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest} />
      ) : (
        <input id={fieldId} type={type} style={fieldStyle}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest} />
      )}
    </div>
  );
}
