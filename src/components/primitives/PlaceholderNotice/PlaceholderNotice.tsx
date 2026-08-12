import React from 'react';
import { cn } from '../../../utils/cn';
import { Icon } from '../Icon/Icon';

export interface PlaceholderNoticeProps {
  label: string;
  helper?: string;
  className?: string;
}

export const PlaceholderNotice: React.FC<PlaceholderNoticeProps> = ({
  label,
  helper,
  className
}) => {
  return (
    <div className={cn('placeholder-notice', className)} role="status">
      <Icon name="alert" size={14} />
      <span>{label}</span>
      {helper && <span style={{ opacity: 0.75 }}>({helper})</span>}
    </div>
  );
};
