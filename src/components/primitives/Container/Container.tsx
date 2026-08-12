import React from 'react';
import { cn } from '../../../utils/cn';

export type ContainerSize = 'standard' | 'narrow' | 'wide' | 'fluid';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  size = 'standard',
  as: Component = 'div',
  className,
  children,
  ...props
}) => {
  const sizeClass =
    size === 'narrow'
      ? 'container-narrow'
      : size === 'wide'
      ? 'container-wide'
      : size === 'fluid'
      ? 'container-fluid'
      : 'container';

  return (
    <Component className={cn(sizeClass, className)} {...props}>
      {children}
    </Component>
  );
};
