import React from 'react';
import { cn } from '../../../utils/cn';
import { Icon, type IconName } from '../Icon/Icon';

export type AspectRatio = '16/9' | '4/3' | '1/1' | '3/4' | '21/9';
export type PlaceholderCategory = 'lifestyle' | 'nutrition' | 'fitness' | 'wellness' | 'coaching';

export interface ImagePlaceholderProps {
  aspectRatio?: AspectRatio;
  category?: PlaceholderCategory;
  title?: string;
  caption?: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  aspectRatio = '16/9',
  category = 'lifestyle',
  title = 'Lifestyle & Wellness',
  caption = 'Online Guidance & Lifestyle Coaching',
  className
}) => {
  const getIconName = (): IconName => {
    switch (category) {
      case 'nutrition':
        return 'nutrition';
      case 'fitness':
        return 'fitness';
      case 'wellness':
        return 'heart';
      case 'coaching':
        return 'user';
      case 'lifestyle':
      default:
        return 'lifestyle';
    }
  };

  return (
    <div
      className={cn('image-container', className)}
      style={{
        aspectRatio: aspectRatio.replace('/', ' / ')
      }}
      role="img"
      aria-label={`${title} - ${caption}`}
    >
      <div className="image-placeholder">
        <div className="image-placeholder-icon">
          <Icon name={getIconName()} size={22} />
        </div>
        <span className="image-placeholder-label">{title}</span>
        {caption && <span className="image-placeholder-caption">{caption}</span>}
      </div>
    </div>
  );
};
