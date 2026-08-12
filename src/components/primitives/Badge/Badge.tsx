import React from 'react';
import { cn } from '../../../utils/cn';

export type BadgeVariant = 'emerald' | 'gold' | 'neutral' | 'placeholder';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'emerald',
  icon,
  className,
  children,
  ...props
}) => {
  return (
    <span className={cn('badge', `badge-${variant}`, className)} {...props}>
      {icon && <span className="badge-icon">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
