import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Visual style. */
  variant?: 'outline' | 'solid' | 'accent' | 'pill';
}

/** Small uppercase Courier label chip — for categories / filters. */
export function Tag(props: TagProps): JSX.Element;
