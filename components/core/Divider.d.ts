import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional centered Courier label between two hairlines. */
  label?: string;
  tone?: 'paper' | 'onDark';
}

/** Hairline rule — plain, or with a centered uppercase label. */
export function Divider(props: DividerProps): JSX.Element;
