import React from 'react';
import { cn } from '../../../utils/cn';
import { Container, type ContainerSize } from '../../primitives/Container/Container';

export type SectionBackground = 'main' | 'surface' | 'elevated' | 'subtle' | 'reverse';
export type SectionPadding = 'standard' | 'hero' | 'sm' | 'lg';

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  background?: SectionBackground;
  padding?: SectionPadding;
  containerSize?: ContainerSize;
  noContainer?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  background = 'main',
  padding = 'standard',
  containerSize = 'standard',
  noContainer = false,
  className,
  children,
  ...props
}) => {
  const bgClass =
    background === 'surface'
      ? 'bg-surface'
      : background === 'elevated'
      ? 'bg-elevated'
      : background === 'subtle'
      ? 'bg-gradient-subtle'
      : background === 'reverse'
      ? 'bg-gradient-reverse'
      : 'bg-main';

  const paddingClass =
    padding === 'hero'
      ? 'section-hero'
      : padding === 'sm'
      ? 'section-sm'
      : padding === 'lg'
      ? 'section-lg'
      : 'section';

  return (
    <section
      id={id}
      className={cn('section-wrapper', paddingClass, bgClass, className)}
      {...props}
    >
      {noContainer ? (
        children
      ) : (
        <Container size={containerSize}>{children}</Container>
      )}
    </section>
  );
};
