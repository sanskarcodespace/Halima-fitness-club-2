import React from 'react';
import { cn } from '../../../utils/cn';
import { Badge, type BadgeVariant } from '../Badge/Badge';

export interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: BadgeVariant;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowVariant = 'primary',
  title,
  subtitle,
  align = 'center',
  className
}) => {
  return (
    <div
      className={cn(
        'section-heading',
        `section-heading-${align}`,
        className
      )}
    >
      {eyebrow && (
        <div className="section-eyebrow">
          <Badge variant={eyebrowVariant}>{eyebrow}</Badge>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
