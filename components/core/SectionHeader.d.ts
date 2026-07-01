import React from 'react';

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Leading section number, e.g. "02". */
  number?: string;
  /** Left-side title (set in the eyebrow style). */
  title?: React.ReactNode;
  /** Right-aligned meta label. */
  meta?: React.ReactNode;
  tone?: 'accent' | 'muted' | 'onDark';
  /** Show the top hairline rule. */
  rule?: boolean;
}

/** Section header: numbered left eyebrow + right meta label over a hairline. */
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
