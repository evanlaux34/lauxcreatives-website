import React from 'react';

/**
 * Brand lockups built on the supplied Laux Creatives master art: the clean
 * serif "LC" monogram, the Bringbold "LauxCreatives" logotype, the horizontal
 * lockup, the circle-mark, and the gold coin badge ("ESTD · 2024 · Chicago &
 * Beyond"). The solid shapes recolor via CSS mask; the coin badge is fixed art.
 * @startingPoint section="Brand" subtitle="LC mark, logotype, lockup, circle-mark & gold coin badge" viewport="760x260"
 */
export interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  /** Which lockup to render. `monogram` aliases `mark`; `stamp` aliases `circle`. */
  variant?: 'mark' | 'wordmark' | 'lockup' | 'circle' | 'badge' | 'monogram' | 'stamp';
  /** Pixel size — height for masked shapes, diameter for the badge. */
  size?: number;
  /** Brand tone for masked shapes (ignored by the fixed-art badge). */
  tone?: 'ink' | 'paper' | 'gold' | 'olive' | 'blue';
  /** Explicit fill color (overrides `tone`). Any CSS color / token. */
  color?: string;
  /** Use the plain (text-free) coin for `variant="badge"`. */
  plain?: boolean;
  /** Override the art URL (defaults to the bundled master art). */
  src?: string;
}

/**
 * Brand lockups built on the supplied Laux Creatives master art — recolorable
 * LC mark, logotype, lockup & circle-mark, plus the fixed gold coin badge.
 */
export function Logo(props: LogoProps): JSX.Element;
