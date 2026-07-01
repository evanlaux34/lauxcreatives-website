import React from 'react';

export interface CaptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Optional figure tag, e.g. "Fig. 01". Renders "Fig. 01 — caption". */
  fig?: string;
  tone?: 'muted' | 'onDark';
}

/** Contact-sheet caption (Courier, uppercase) for the mat below a photo. */
export function Caption(props: CaptionProps): JSX.Element;
