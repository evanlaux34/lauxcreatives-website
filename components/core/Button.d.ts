import React from 'react';

/**
 * Square, letterpress-feel button with an uppercase Courier Prime label.
 * @startingPoint section="Core" subtitle="Primary, secondary, ghost & on-dark buttons" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button label / contents. */
  children?: React.ReactNode;
  /** Visual style. `onDark` is for photo/dark surfaces. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'onDark';
  /** Size preset. */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Render as a different element, e.g. 'a' for links. */
  as?: 'button' | 'a';
}

/**
 * Square, letterpress-feel button with an uppercase Courier Prime label.
 */
export function Button(props: ButtonProps): JSX.Element;
