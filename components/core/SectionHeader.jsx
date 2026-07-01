import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

/**
 * Laux Creatives — SectionHeader
 * Numbered eyebrow on the left, right-aligned meta label, optional hairline.
 */
export function SectionHeader({ number, title, meta, tone = 'accent', rule = true, style, ...rest }) {
  const metaColor = tone === 'onDark' ? 'rgba(242,234,212,0.6)' : 'var(--lc-ink-muted)';
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        borderTop: rule ? '1px solid var(--border-hairline)' : 'none',
        paddingTop: rule ? '34px' : 0,
        ...style,
      }}
      {...rest}
    >
      <Eyebrow number={number} tone={tone}>{title}</Eyebrow>
      {meta ? (
        <div
          style={{
            fontFamily: 'var(--font-label)',
            fontSize: 'var(--type-label)',
            letterSpacing: 'var(--type-label-tracking-sm)',
            textTransform: 'uppercase',
            color: metaColor,
          }}
        >
          {meta}
        </div>
      ) : null}
    </div>
  );
}
