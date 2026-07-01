import React from 'react';

/**
 * Laux Creatives — Logo
 * The clean serif "LC" monogram and the Bringbold "LauxCreatives"
 * logotype, supplied as the studio's master art. The solid
 * single-color shapes (mark, wordmark, lockup, circle-mark) are
 * recolored on the fly via CSS mask, so they sit in any brand tone
 * on any surface. The gold coin badge ships as fixed two-tone art.
 */

// Trimmed aspect ratios (w / h) of each supplied art file.
const ASPECT = {
  mark: 939 / 953,       // mono LC
  wordmark: 7732 / 1201, // "LauxCreatives" logotype
  lockup: 10101 / 1943,  // circle-LC + logotype, horizontal
  circle: 1,             // circle outline + LC
};

const ASSET = {
  mark: 'mono-paper.png',
  wordmark: 'wordmark-paper.png',
  lockup: 'lockup-paper.png',
  circle: 'mark-circle-paper.png',
};

// Resolve the design-system asset base from the loaded bundle's <script src>,
// so the art resolves correctly from any consuming page.
const DS_BASE = (() => {
  if (typeof document === 'undefined') return '';
  const s = document.querySelector('script[src*="_ds_bundle.js"]');
  if (s) return (s.getAttribute('src') || '').replace(/_ds_bundle\.js.*$/, '');
  return '';
})();

const TONES = {
  ink: 'var(--lc-sepia-ink)',
  paper: 'var(--lc-paper-text)',
  gold: 'var(--lc-accent)',
  olive: 'var(--lc-aged-olive)',
  blue: 'var(--lc-dusty-blue)',
};

// Variant → which masked shape (and its aliases).
const SHAPE_FOR = {
  mark: 'mark',
  monogram: 'mark',
  wordmark: 'wordmark',
  lockup: 'lockup',
  circle: 'circle',
  stamp: 'circle',
};

function Masked({ shape, height, color, src, style }) {
  const w = Math.round(height * ASPECT[shape]);
  return (
    <span
      role="img"
      aria-label="Laux Creatives"
      style={{
        display: 'inline-block',
        width: `${w}px`,
        height: `${height}px`,
        backgroundColor: color,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        ...style,
      }}
    />
  );
}

export function Logo({
  variant = 'mark',
  size = 64,
  tone = 'ink',
  color,
  src,
  plain = false,
  style,
  ...rest
}) {
  const markColor = color || TONES[tone] || TONES.ink;
  const base = `${DS_BASE}assets/logos/`;

  // The gold coin badge ships as fixed two-tone art (gold on sepia).
  if (variant === 'badge') {
    const file = plain ? 'badge-gold-plain.png' : 'badge-gold.png';
    return (
      <img
        src={src || base + file}
        alt="Laux Creatives — Chicago & Beyond"
        width={size}
        height={size}
        style={{ display: 'inline-block', width: `${size}px`, height: `${size}px`, ...style }}
        {...rest}
      />
    );
  }

  // Everything else is a recolorable masked shape.
  const shape = SHAPE_FOR[variant] || 'mark';
  return (
    <span style={{ display: 'inline-flex', ...style }} {...rest}>
      <Masked shape={shape} height={size} color={markColor} src={src || base + ASSET[shape]} />
    </span>
  );
}
