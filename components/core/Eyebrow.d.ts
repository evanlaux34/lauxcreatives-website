import React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Optional leading section number, e.g. "02". Renders "02 — Label". */
  number?: string;
  /** Color tone. */
  tone?: 'accent' | 'muted' | 'onDark';
}

/** Uppercase Courier Prime label above headlines / as a numbered section marker. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
