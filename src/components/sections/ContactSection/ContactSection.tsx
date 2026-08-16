import React, { useState, useEffect, useRef } from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { BUSINESS_CONFIG } from '../../../config/business.config';
import { SECTION_IDS, CTA_CONFIG } from '../../../config/navigation.config';

export interface FormState {
  name: string;
  phone: string;
  email: string;
  goal: string;
  timing: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const GOAL_OPTIONS = [
  'Weight Loss',
  'Weight Gain',
  'Weight Management',
  'Nutrition',
  'Fitness',
  'Lifestyle & Wellness',
  'Skin & Wellness Guidance',
  'Child Health & Wellness Guidance',
  'Online Classes',
  'Other'
];

const TIMING_OPTIONS = [
  '6:00 AM – 7:00 AM',
  '7:00 AM – 8:00 AM',
  '6:00 PM – 7:00 PM',
  '7:00 PM – 8:00 PM',
  'Not Sure'
];

const MAX_MESSAGE_LENGTH = 500;

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    goal: 'Weight Loss',
    timing: 'Not Sure',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Listen for pre-fill custom event from WhatsApp triggers or external CTA buttons
  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<{ message?: string; goal?: string }>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          message: customEvent.detail.message || prev.message,
          goal: customEvent.detail.goal || prev.goal
        }));
      }
    };

    window.addEventListener('halima:prefill-contact', handlePrefill);
    return () => window.removeEventListener('halima:prefill-contact', handlePrefill);
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    // Phone validation (flexible international format: allows +, digits, spaces, dashes, parentheses)
    const phoneTrimmed = formData.phone.trim();
    if (!phoneTrimmed) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else {
      const digitsOnly = phoneTrimmed.replace(/\D/g, '');
      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        newErrors.phone = 'Please enter a valid phone number (7 to 15 digits).';
      }
    }

    // Email validation
    const emailTrimmed = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTrimmed) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(emailTrimmed)) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    // Message length validation
    if (formData.message.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message must be under ${MAX_MESSAGE_LENGTH} characters.`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      if (formRef.current) {
        const firstErrorField = formRef.current.querySelector<HTMLElement>('[aria-invalid="true"]');
        if (firstErrorField) firstErrorField.focus();
      }
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp message from form data
    const msg = [
      `Hi Coach Halima, I'd like to book a free consultation.`,
      ``,
      `*Name:* ${formData.name}`,
      `*Goal:* ${formData.goal}`,
      `*Phone:* ${formData.phone || 'Not provided'}`,
      `*Email:* ${formData.email || 'Not provided'}`,
      `*Preferred Start:* ${formData.timing}`,
      formData.message ? `*Message:* ${formData.message}` : null,
    ].filter(Boolean).join('\n');

    const waUrl = `https://wa.me/919570030631?text=${encodeURIComponent(msg)}`;

    // Open WhatsApp in new tab, then show success state
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      goal: 'Weight Loss',
      timing: 'Not Sure',
      message: ''
    });
    setErrors({});
  };

  return (
    <SectionWrapper
      id={SECTION_IDS.CONTACT}
      background="surface"
      padding="standard"
      containerSize="wide"
      className="contact-section"
    >
      <SectionHeading
        eyebrow="Connect &amp; Consult"
        eyebrowVariant="primary"
        title={
          <>
            Book Your <span className="text-primary-green">Free Consultation</span>
          </>
        }
        subtitle="Discuss your wellness goals, schedule, and lifestyle routine with Coach Halima Sadiya. No high-pressure sales — just honest, personalized guidance."
        align="center"
      />

      <div className="contact-grid">
        {/* =====================================================================
            LEFT COLUMN: Direct Contact Details, Coach Credentials & Integrity
            ===================================================================== */}
        <div className="contact-details-col stack stack-md">
          {/* Coach Quick Profile Card */}
          <Card variant="surface" className="coach-contact-card stack stack-sm">
            <div className="split">
              <div className="stack stack-none">
                <span className="coach-card-hindi">{BUSINESS_CONFIG.hindiName}</span>
                <h3 className="coach-card-name">{BUSINESS_CONFIG.coach.name}</h3>
                <span className="coach-card-title">{BUSINESS_CONFIG.coach.title}</span>
              </div>
              <Badge variant="accent">{BUSINESS_CONFIG.coach.experience}</Badge>
            </div>

            <p className="coach-card-bio">
              Online Health &amp; Wellness Coach helping individuals improve their nutrition, fitness, and lifestyle through personalized guidance and regular follow-up.
            </p>

            <div className="availability-row split">
              <div className="cluster cluster-xs">
                <span className="status-pulse-dot" aria-hidden="true" />
                <span className="availability-text"><strong>Availability:</strong> {BUSINESS_CONFIG.availability}</span>
              </div>
              <span className="mode-badge">100% Online Coaching</span>
            </div>
          </Card>

          {/* Verified Contact Channels List */}
          <div className="contact-channels-list stack stack-xs">
            {/* Email Card */}
            <a
              href={`mailto:${BUSINESS_CONFIG.email}`}
              className="channel-card"
              aria-label={`Send email to ${BUSINESS_CONFIG.email}`}
            >
              <div className="channel-icon-box channel-icon-email" aria-hidden="true">
                <Icon name="mail" size={20} />
              </div>
              <div className="stack stack-none channel-text-group">
                <span className="channel-label">Direct Email</span>
                <strong className="channel-value">{BUSINESS_CONFIG.email}</strong>
                <span className="channel-sub">Click to compose email directly</span>
              </div>
              <Icon name="arrow-right" size={16} className="channel-arrow" />
            </a>

            {/* Instagram Card */}
            <a
              href={BUSINESS_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
              aria-label={`Visit official Instagram profile: ${BUSINESS_CONFIG.instagram.handle}`}
            >
              <div className="channel-icon-box channel-icon-instagram" aria-hidden="true">
                <Icon name="instagram" size={20} />
              </div>
              <div className="stack stack-none channel-text-group">
                <span className="channel-label">Official Instagram</span>
                <strong className="channel-value">{BUSINESS_CONFIG.instagram.handle}</strong>
                <span className="channel-sub">Follow for daily fitness &amp; nutrition tips</span>
              </div>
              <Icon name="arrow-right" size={16} className="channel-arrow" />
            </a>
          </div>

          {/* Direct Contact Channels */}
          <div className="direct-channels-box stack stack-xs">
            <span className="direct-channels-title">
              <Icon name="message" size={14} className="direct-channels-icon" />
              <span>Direct Lines</span>
            </span>

            <div className="direct-badges-grid">
              <a
                href="https://wa.me/919570030631"
                target="_blank"
                rel="noopener noreferrer"
                className="direct-channel-item direct-channel-whatsapp"
              >
                <Icon name="message" size={14} />
                <div className="stack stack-none">
                  <span className="direct-item-label">WhatsApp</span>
                  <span className="direct-item-value">+91 95700 30631</span>
                </div>
              </a>

              <a
                href="tel:+919570030631"
                className="direct-channel-item direct-channel-phone"
              >
                <Icon name="user" size={14} />
                <div className="stack stack-none">
                  <span className="direct-item-label">Phone</span>
                  <span className="direct-item-value">+91 95700 30631</span>
                </div>
              </a>
            </div>
          </div>

          {/* Privacy & Health Data Policy */}
          <div className="privacy-reassurance-box">
            <Icon name="shield" size={16} className="privacy-icon" />
            <p className="privacy-text">
              <strong>Privacy Assurance: </strong> We never share your personal information. This form collects baseline contact information and coaching goals only — no sensitive medical records are requested.
            </p>
          </div>
        </div>

        {/* =====================================================================
            RIGHT COLUMN: Interactive Consultation Inquiry Form
            ===================================================================== */}
        <div className="contact-form-col">
          <Card variant="surface" className="consultation-form-card">
            {/* Form Title & Required Fields Notice */}
            <div className="form-card-header split">
              <div className="stack stack-none">
                <h3 className="form-title">Consultation Request</h3>
                <p className="form-subtitle">Fill in your details below for a direct response.</p>
              </div>
              <span className="required-legend"><span className="req-star">*</span> Required fields</span>
            </div>

            {/* Success Submission State */}
            {isSubmitted ? (
              <div className="submission-success-state stack stack-md" role="alert" aria-live="polite">
                <div className="success-icon-badge" aria-hidden="true">
                  <Icon name="check" size={32} />
                </div>

                <div className="stack stack-xs text-center">
                  <h4 className="success-heading">Consultation Request Received!</h4>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. Coach Halima Sadiya has received your interest in <strong>{formData.goal}</strong> and will reach out to you via <strong>{formData.email}</strong> or <strong>{formData.phone}</strong>.
                  </p>
                </div>

                {/* Direct WhatsApp Confirmation Note */}
                <div className="wa-redirect-box stack stack-xs">
                  <div className="cluster cluster-xs">
                    <Icon name="message" size={16} className="wa-icon-green" />
                    <strong className="wa-redirect-title">Opened in WhatsApp</strong>
                  </div>
                  <p className="wa-redirect-desc">
                    Your details have been pre-filled into WhatsApp so you can send them directly to Coach Halima Sadiya. If WhatsApp did not open automatically, click below to connect or send a message directly to <strong>+91 95700 30631</strong>.
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="md"
                  onClick={handleResetForm}
                  className="reset-btn"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              /* The Active Consultation Form */
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="consultation-form stack stack-md"
              >
                {/* Name & Phone Row */}
                <div className="form-row-2">
                  {/* Field 1: Name */}
                  <div className="form-field stack stack-none">
                    <label htmlFor="input-name" className="field-label">
                      Full Name <span className="req-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="input-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ananya Sharma"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                    />
                    {errors.name && (
                      <span id="err-name" className="field-error-msg" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Field 2: Phone */}
                  <div className="form-field stack stack-none">
                    <label htmlFor="input-phone" className="field-label">
                      Phone Number <span className="req-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="input-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'err-phone' : undefined}
                      className={`form-input ${errors.phone ? 'input-error' : ''}`}
                    />
                    {errors.phone && (
                      <span id="err-phone" className="field-error-msg" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Field 3: Email */}
                <div className="form-field stack stack-none">
                  <label htmlFor="input-email" className="field-label">
                    Email Address <span className="req-star" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="input-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. ananya@example.com"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'err-email' : undefined}
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                  />
                  {errors.email && (
                    <span id="err-email" className="field-error-msg" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Goal & Preferred Timing Row */}
                <div className="form-row-2">
                  {/* Field 4: Goal */}
                  <div className="form-field stack stack-none">
                    <label htmlFor="select-goal" className="field-label">
                      Primary Goal / Program Interest
                    </label>
                    <select
                      id="select-goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {GOAL_OPTIONS.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Field 5: Preferred Class Timing */}
                  <div className="form-field stack stack-none">
                    <label htmlFor="select-timing" className="field-label">
                      Preferred Batch Timing (If Joining Classes)
                    </label>
                    <select
                      id="select-timing"
                      name="timing"
                      value={formData.timing}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {TIMING_OPTIONS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Field 6: Message */}
                <div className="form-field stack stack-none">
                  <div className="split">
                    <label htmlFor="textarea-message" className="field-label">
                      Message / Current Routine Overview
                    </label>
                    <span
                      className={`char-counter ${
                        formData.message.length > MAX_MESSAGE_LENGTH ? 'char-over' : ''
                      }`}
                    >
                      {formData.message.length} / {MAX_MESSAGE_LENGTH}
                    </span>
                  </div>
                  <textarea
                    id="textarea-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell Coach Halima about your daily routine, dietary habits, or questions..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'err-message' : undefined}
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  />
                  {errors.message && (
                    <span id="err-message" className="field-error-msg" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Action Button */}
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  fullWidth
                  isLoading={isSubmitting}
                  rightIcon={<Icon name="arrow-right" size={18} />}
                  className="submit-btn"
                >
                  {CTA_CONFIG.primary.label}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>

      {/* Contact Section Scoped Styles */}
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 4vw, 3rem);
          align-items: start;
        }

        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 0.95fr 1.15fr;
          }
        }

        .coach-contact-card {
          padding: 1.5rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xs);
        }

        .coach-card-hindi {
          font-family: var(--font-devanagari);
          font-size: var(--text-xs);
          color: var(--color-accent-700);
          font-weight: 700;
        }

        .coach-card-name {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: 800;
          color: var(--color-primary-900);
          margin: 0;
        }

        .coach-card-title {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--color-primary-700);
        }

        .coach-card-bio {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
          margin: 0;
        }

        .availability-row {
          align-items: center;
          padding-top: 0.85rem;
          border-top: 1px solid var(--color-border-subtle);
        }

        .status-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #22C55E;
          box-shadow: 0 0 8px #22C55E;
          display: inline-block;
        }

        .availability-text {
          font-size: var(--text-xs);
          color: var(--color-primary-900);
        }

        .mode-badge {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-primary-700);
          background-color: var(--color-secondary-soft);
          padding: 3px 8px;
          border-radius: var(--radius-full);
        }

        /* Channels List */
        .contact-channels-list {
          gap: 0.75rem;
        }

        .channel-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.15rem 1.25rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          text-decoration: none;
          color: inherit;
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .channel-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-secondary-border);
          box-shadow: var(--shadow-sm);
        }

        .channel-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .channel-icon-email {
          background-color: var(--color-secondary-soft);
          color: var(--color-primary-700);
          border: 1px solid var(--color-secondary-border);
        }

        .channel-icon-instagram {
          background: linear-gradient(135deg, rgba(225, 48, 108, 0.1) 0%, rgba(253, 29, 29, 0.1) 100%);
          color: #E1306C;
          border: 1px solid rgba(225, 48, 108, 0.25);
        }

        .channel-text-group {
          flex: 1;
        }

        .channel-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .channel-value {
          font-size: var(--text-sm);
          font-weight: 700;
          color: var(--color-primary-900);
          word-break: break-all;
        }

        .channel-sub {
          font-size: 11px;
          color: var(--color-text-muted);
        }

        .channel-arrow {
          color: var(--color-text-muted);
          transition: transform var(--transition-fast);
        }

        .channel-card:hover .channel-arrow {
          transform: translateX(3px);
          color: var(--color-primary-700);
        }

        /* Direct Channels Box */
        .direct-channels-box {
          padding: 1.15rem;
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          border-radius: var(--radius-md);
        }

        .direct-channels-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-900);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .direct-channels-icon {
          color: var(--color-primary-600);
        }

        .direct-badges-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
          margin-top: 0.25rem;
        }

        .direct-channel-item {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.65rem 0.8rem;
          border-radius: var(--radius-md);
          border: 1px solid transparent;
          text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .direct-channel-item:hover {
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }

        .direct-channel-whatsapp {
          background: #f0faf3;
          border-color: #bbf0cc;
          color: #15803d;
        }
        .direct-channel-whatsapp svg { color: #16a34a; }

        .direct-channel-phone {
          background: #f0f4ff;
          border-color: #c7d7ff;
          color: #1d4ed8;
        }
        .direct-channel-phone svg { color: #2563eb; }

        .direct-item-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          opacity: 0.7;
          line-height: 1;
        }

        .direct-item-value {
          font-size: var(--text-xs);
          font-weight: 700;
          letter-spacing: 0.01em;
          line-height: 1.4;
        }


        .privacy-reassurance-box {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
        }

        .privacy-icon {
          color: var(--color-primary-700);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .privacy-text {
          font-size: 11px;
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0;
        }

        /* Consultation Form Card */
        .consultation-form-card {
          padding: 1.75rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
        }

        @media (min-width: 768px) {
          .consultation-form-card {
            padding: 2.25rem;
          }
        }

        .form-card-header {
          align-items: flex-start;
          margin-bottom: 1.25rem;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .form-title {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: 800;
          color: var(--color-primary-900);
          margin: 0;
        }

        .form-subtitle {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          margin: 2px 0 0 0;
        }

        .required-legend {
          font-size: 11px;
          color: var(--color-text-muted);
        }

        .req-star {
          color: #DC2626;
          font-weight: 700;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr 1fr;
          }
        }

        .form-field {
          gap: 0.35rem;
        }

        .field-label {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-900);
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          font-family: var(--font-body);
          font-size: var(--text-sm);
          color: var(--color-text-main);
          background-color: var(--color-bg-subtle);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.75rem 0.95rem;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast);
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--color-primary-600);
          background-color: #FFFFFF;
          box-shadow: 0 0 0 3px var(--color-primary-100);
        }

        .input-error {
          border-color: #DC2626 !important;
          background-color: #FEF2F2 !important;
        }

        .field-error-msg {
          font-size: 11px;
          color: #DC2626;
          font-weight: 600;
          margin-top: 2px;
        }

        .char-counter {
          font-size: 11px;
          color: var(--color-text-muted);
        }

        .char-over {
          color: #DC2626;
          font-weight: 700;
        }

        .form-textarea {
          resize: vertical;
          min-height: 90px;
        }

        .submit-btn {
          margin-top: 0.5rem;
        }

        /* Submission Success Box */
        .submission-success-state {
          align-items: center;
          padding: 1.5rem 1rem;
        }

        .success-icon-badge {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #DCFCE7;
          border: 2px solid #86EFAC;
          color: #16A34A;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-heading {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: 800;
          color: var(--color-primary-900);
          margin: 0;
        }

        .success-desc {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
          max-width: 480px;
          margin: 0.25rem 0 0 0;
        }

        .wa-redirect-box {
          width: 100%;
          padding: 0.95rem 1.15rem;
          border-radius: var(--radius-md);
          background-color: #f0faf3;
          border: 1px solid #bbf0cc;
          font-size: var(--text-xs);
        }

        .wa-icon-green {
          color: #16a34a;
        }

        .wa-redirect-title {
          font-weight: 700;
          color: #15803d;
        }

        .wa-redirect-desc {
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 4px 0 0 0;
        }

        .reset-btn {
          margin-top: 0.5rem;
        }
      `}</style>
    </SectionWrapper>
  );
};
