import React from 'react';
import { cn } from '../../../utils/cn';

export type CardVariant = 'surface' | 'elevated' | 'glass';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'surface',
  interactive = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'card',
        `card-${variant}`,
        interactive && 'card-interactive',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
