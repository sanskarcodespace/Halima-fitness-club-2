import React from 'react';
import { Button } from '../../primitives/Button/Button';
import { Icon } from '../../primitives/Icon/Icon';
import {
  WHATSAPP_MESSAGES,
  type WhatsAppMessageKey,
  getWhatsAppUrl,
  isWhatsAppConfigured
} from '../../../utils/whatsapp.util';
import { SECTION_IDS } from '../../../config/navigation.config';

export interface WhatsAppButtonProps {
  messageKey?: WhatsAppMessageKey;
  customMessage?: string;
  variant?: 'outline' | 'accent' | 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
  showIcon?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  messageKey = 'consultation',
  customMessage,
  variant = 'outline',
  size = 'md',
  label = 'WhatsApp Us',
  className,
  showIcon = true
}) => {
  const messageText = customMessage || (messageKey ? WHATSAPP_MESSAGES[messageKey] : WHATSAPP_MESSAGES.consultation);
  const whatsappUrl = getWhatsAppUrl(messageText);

  const handleClick = (e: React.MouseEvent) => {
    if (!isWhatsAppConfigured()) {
      e.preventDefault();
      
      // Dispatch a custom event to notify parent form if needed
      window.dispatchEvent(
        new CustomEvent('halima:prefill-contact', {
          detail: { message: messageText }
        })
      );

      // Smooth scroll to contact form
      const contactElem = document.getElementById(SECTION_IDS.CONTACT);
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
        // Attempt to focus message input if available
        setTimeout(() => {
          const textarea = contactElem.querySelector('textarea');
          if (textarea) {
            textarea.value = messageText;
            textarea.focus();
          }
        }, 500);
      }
    }
  };

  return (
    <Button
      href={whatsappUrl || `#${SECTION_IDS.CONTACT}`}
      isExternal={!!whatsappUrl}
      variant={variant}
      size={size}
      onClick={handleClick}
      className={className}
      rightIcon={showIcon ? <Icon name="message" size={size === 'lg' ? 18 : 15} /> : undefined}
      aria-label={`${label}: "${messageText}"`}
    >
      {label}
    </Button>
  );
};
