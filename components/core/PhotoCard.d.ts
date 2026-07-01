import React from 'react';

/**
 * The signature taped print — photo on an ivory mat with a soft drop-shadow
 * and a Courier caption. Lifts gently on hover.
 * @startingPoint section="Core" subtitle="Taped film-print photo card with caption" viewport="700x420"
 */
export interface PhotoCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Image URL. */
  src: string;
  alt?: string;
  /** Caption text shown in the bottom mat. */
  caption?: React.ReactNode;
  /** Optional figure tag prefix, e.g. "Fig. 01". */
  fig?: string;
  /** Filmic photo tone. */
  tone?: 'warm' | 'sepia' | 'bw';
  /** Image height (px number or CSS string). */
  height?: number | string;
  /** Use the darker shadow for dark backgrounds. */
  onDark?: boolean;
}

/**
 * The signature taped print — photo on an ivory mat with a soft drop-shadow
 * and a Courier caption. Lifts gently on hover.
 */
export function PhotoCard(props: PhotoCardProps): JSX.Element;
