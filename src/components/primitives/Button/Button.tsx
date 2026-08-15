import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../../utils/cn';

export type ButtonVariant = 'primary' | 'accent' | 'orange' | 'secondary' | 'outline' | 'ghost' | 'gold';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  isExternal?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  href,
  isExternal,
  isLoading,
  className,
  disabled,
  ...props
}) => {
  const classes = cn(
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && 'btn-full',
    isLoading && 'is-loading',
    className
  );

  if (href) {
    const isInternal = href.startsWith('/') && !href.startsWith('//');

    if (isInternal) {
      return (
        <Link
          to={href}
          className={classes}
          aria-disabled={disabled || isLoading}
        >
          {leftIcon && <span className="btn-icon-left">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="btn-icon-right">{rightIcon}</span>}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        aria-disabled={disabled || isLoading}
      >
        {leftIcon && <span className="btn-icon-left">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="btn-icon-right">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {leftIcon && <span className="btn-icon-left">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="btn-icon-right">{rightIcon}</span>}
    </button>
  );
};
