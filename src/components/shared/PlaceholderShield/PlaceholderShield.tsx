import React from 'react';
import { isPlaceholder } from '../../../content/placeholders';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';

export interface PlaceholderShieldProps {
  value?: string | null;
  fallbackText?: string;
  render?: (val: string) => React.ReactNode;
  className?: string;
}

export const PlaceholderShield: React.FC<PlaceholderShieldProps> = ({
  value,
  fallbackText = '[CONTENT REQUIRED]',
  render,
  className
}) => {
  const displayVal = value || fallbackText;
  const isMissing = isPlaceholder(displayVal);

  if (isMissing) {
    return (
      <Badge variant="placeholder" icon={<Icon name="alert" size={12} />} className={className}>
        {displayVal}
      </Badge>
    );
  }

  if (render) {
    return <>{render(displayVal)}</>;
  }

  return <span className={className}>{displayVal}</span>;
};
