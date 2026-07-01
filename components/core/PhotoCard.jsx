import React from 'react';
import { Caption } from './Caption.jsx';

/**
 * Laux Creatives — PhotoCard
 * The signature taped print: photo on an ivory mat, soft shadow,
 * Courier caption in the bottom mat.
 */
export function PhotoCard({
  src,
  alt = '',
  caption,
  fig,
  tone = 'warm',
  height = 300,
  fill = false,
  onDark = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const filters = {
    warm: 'var(--photo-filter-warm)',
    sepia: 'var(--photo-filter-sepia)',
    bw: 'var(--photo-filter-bw)',
  };
  return (
    <figure
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        margin: 0,
        boxSizing: 'border-box',
        background: 'var(--surface-card)',
        padding: '12px 12px 0',
        boxShadow: onDark ? 'var(--shadow-card-dark)' : 'var(--shadow-card)',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'transform var(--dur) var(--ease-soft), box-shadow var(--dur) var(--ease-soft)',
        ...(fill ? { height: '100%', display: 'flex', flexDirection: 'column' } : null),
        ...style,
      }}
      {...rest}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: typeof height === 'number' ? `${height}px` : height,
          objectFit: 'cover',
          display: 'block',
          filter: filters[tone] || filters.warm,
        }}
      />
      {fill ? <div style={{ flex: '1 1 auto' }} /> : null}
      {caption ? (
        <Caption fig={fig} style={{ padding: '11px 4px 14px' }}>{caption}</Caption>
      ) : (
        <div style={{ height: '12px' }} />
      )}
    </figure>
  );
}
