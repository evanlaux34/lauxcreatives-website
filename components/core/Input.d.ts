import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase Courier label above the field. */
  label?: string;
  type?: string;
  /** Render a multi-line textarea instead of an input. */
  multiline?: boolean;
}

/** Underline-style editorial form field — Courier label, Garamond text. */
export function Input(props: InputProps): JSX.Element;
