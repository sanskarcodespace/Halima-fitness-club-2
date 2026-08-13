import React, { useState } from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { SECTION_IDS, CTA_CONFIG } from '../../../config/navigation.config';

export type UnitSystem = 'metric' | 'imperial';

export interface BmiResult {
  bmi: number;
  category: string;
  categoryVariant: 'primary' | 'accent' | 'secondary';
  description: string;
}

export const WellnessToolsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bmi' | 'habits'>('bmi');
  const [unitSystem, setUnitSystem] = useState<UnitSystem>('metric');

  // Metric Inputs
  const [heightCm, setHeightCm] = useState<string>('');
  const [weightKg, setWeightKg] = useState<string>('');

  // Imperial Inputs
  const [heightFeet, setHeightFeet] = useState<string>('');
  const [heightInches, setHeightInches] = useState<string>('');
  const [weightLbs, setWeightLbs] = useState<string>('');

  // BMI Result & Validation State
  const [bmiResult, setBmiResult] = useState<BmiResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Habit Check State
  const [hydration, setHydration] = useState<string>('2-3L');
  const [activity, setActivity] = useState<string>('30min');
  const [mealRoutine, setMealRoutine] = useState<string>('regular');
  const [habitTip, setHabitTip] = useState<string | null>(null);

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setBmiResult(null);

    let bmiValue = 0;

    if (unitSystem === 'metric') {
      const h = parseFloat(heightCm);
      const w = parseFloat(weightKg);

      if (isNaN(h) || h < 80 || h > 250) {
        setErrorMessage('Please enter a valid height between 80 cm and 250 cm.');
        return;
      }
      if (isNaN(w) || w < 20 || w > 300) {
        setErrorMessage('Please enter a valid weight between 20 kg and 300 kg.');
        return;
      }

      const heightM = h / 100;
      bmiValue = w / (heightM * heightM);
    } else {
      const ft = parseFloat(heightFeet);
      const inc = parseFloat(heightInches || '0');
      const lbs = parseFloat(weightLbs);

      if (isNaN(ft) || ft < 3 || ft > 8) {
        setErrorMessage('Please enter valid feet between 3 and 8.');
        return;
      }
      if (isNaN(inc) || inc < 0 || inc >= 12) {
        setErrorMessage('Please enter inches between 0 and 11.');
        return;
      }
      if (isNaN(lbs) || lbs < 40 || lbs > 650) {
        setErrorMessage('Please enter a valid weight between 40 lbs and 650 lbs.');
        return;
      }

      const totalInches = ft * 12 + inc;
      bmiValue = (lbs * 703) / (totalInches * totalInches);
    }

    const roundedBmi = parseFloat(bmiValue.toFixed(1));

    // Determine neutral educational classification based on WHO reference ranges
    let category = '';
    let categoryVariant: 'primary' | 'accent' | 'secondary' = 'secondary';
    let description = '';

    if (roundedBmi < 18.5) {
      category = 'Lower Range (< 18.5)';
      categoryVariant = 'accent';
      description =
        'Your calculated screening value falls in the lower reference range. A balanced nutrition plan can help ensure adequate daily energy and nourishment.';
    } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
      category = 'Standard Range (18.5 – 24.9)';
      categoryVariant = 'primary';
      description =
        'Your calculated value is within the standard population screening range. Maintaining regular physical activity and consistent meals helps sustain long-term vitality.';
    } else if (roundedBmi >= 25.0 && roundedBmi <= 29.9) {
      category = 'Higher Range (25.0 – 29.9)';
      categoryVariant = 'accent';
      description =
        'Your calculated value is in the higher reference range. Structured daily movement and mindful portion balance can support your overall wellness goals.';
    } else {
      category = 'Elevated Range (30.0+)';
      categoryVariant = 'accent';
      description =
        'Your calculated value is in the elevated screening category. Personalized coaching with guided pacing and regular accountability can help establish sustainable lifestyle habits.';
    }

    setBmiResult({
      bmi: roundedBmi,
      category,
      categoryVariant,
      description
    });
  };

  const handleResetBmi = () => {
    setHeightCm('');
    setWeightKg('');
    setHeightFeet('');
    setHeightInches('');
    setWeightLbs('');
    setBmiResult(null);
    setErrorMessage('');
  };

  const handleHabitCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setHabitTip(
      `Based on your responses (${hydration} water, ${activity} activity, ${mealRoutine} meals), focusing on daily routine consistency and staying hydrated before your workouts will provide natural momentum for your wellness goals.`
    );
  };

  return (
    <SectionWrapper
      id="tools"
      background="surface"
      padding="standard"
      containerSize="standard"
      className="wellness-tools-section"
    >
      <SectionHeading
        eyebrow="Interactive Wellness Tools"
        eyebrowVariant="primary"
        title={
          <>
            Educational <span className="text-primary-green">Wellness Tools</span>
          </>
        }
        subtitle="Explore simple educational utilities to reflect on your physical baseline and daily lifestyle habits with zero data tracking."
        align="center"
      />

      <div className="tools-container stack stack-md">
        {/* Tool Selector Tabs */}
        <div className="tools-tab-bar" role="tablist" aria-label="Wellness tools">
          <button
            role="tab"
            aria-selected={activeTab === 'bmi'}
            onClick={() => setActiveTab('bmi')}
            className={`tool-tab-btn ${activeTab === 'bmi' ? 'tool-tab-active' : ''}`}
          >
            <Icon name="fitness" size={16} />
            <span>BMI Screening Calculator</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'habits'}
            onClick={() => setActiveTab('habits')}
            className={`tool-tab-btn ${activeTab === 'habits' ? 'tool-tab-active' : ''}`}
          >
            <Icon name="lifestyle" size={16} />
            <span>Daily Habit Reflection</span>
          </button>
        </div>

        {/* =====================================================================
            TOOL 1: BMI SCREENING CALCULATOR
            ===================================================================== */}
        {activeTab === 'bmi' && (
          <Card variant="surface" className="tool-main-card stack stack-md">
            <div className="split tool-header">
              <div className="stack stack-none">
                <h3 className="tool-title">Body Mass Index (BMI) Screening</h3>
                <p className="tool-subtitle">
                  Calculate your general screening ratio based on height and weight.
                </p>
              </div>

              {/* Unit Toggle */}
              <div className="unit-toggle-group cluster cluster-xs" role="radiogroup" aria-label="Measurement Unit System">
                <button
                  type="button"
                  role="radio"
                  aria-checked={unitSystem === 'metric'}
                  onClick={() => {
                    setUnitSystem('metric');
                    handleResetBmi();
                  }}
                  className={`unit-toggle-btn ${unitSystem === 'metric' ? 'unit-active' : ''}`}
                >
                  Metric (cm / kg)
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={unitSystem === 'imperial'}
                  onClick={() => {
                    setUnitSystem('imperial');
                    handleResetBmi();
                  }}
                  className={`unit-toggle-btn ${unitSystem === 'imperial' ? 'unit-active' : ''}`}
                >
                  Imperial (ft+in / lbs)
                </button>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={calculateBmi} noValidate className="bmi-form stack stack-md">
              {unitSystem === 'metric' ? (
                <div className="bmi-input-row">
                  <div className="form-field stack stack-none">
                    <label htmlFor="input-height-cm" className="field-label">
                      Height (cm) <span className="req-star">*</span>
                    </label>
                    <input
                      id="input-height-cm"
                      type="number"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      placeholder="e.g. 170"
                      min="80"
                      max="250"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-field stack stack-none">
                    <label htmlFor="input-weight-kg" className="field-label">
                      Weight (kg) <span className="req-star">*</span>
                    </label>
                    <input
                      id="input-weight-kg"
                      type="number"
                      value={weightKg}
                      onChange={(e) => setWeightKg(e.target.value)}
                      placeholder="e.g. 68"
                      min="20"
                      max="300"
                      step="0.1"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
              ) : (
                <div className="bmi-input-row-imperial">
                  <div className="form-field stack stack-none">
                    <label htmlFor="input-height-ft" className="field-label">
                      Height (Feet) <span className="req-star">*</span>
                    </label>
                    <input
                      id="input-height-ft"
                      type="number"
                      value={heightFeet}
                      onChange={(e) => setHeightFeet(e.target.value)}
                      placeholder="e.g. 5"
                      min="3"
                      max="8"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-field stack stack-none">
                    <label htmlFor="input-height-in" className="field-label">
                      Inches
                    </label>
                    <input
                      id="input-height-in"
                      type="number"
                      value={heightInches}
                      onChange={(e) => setHeightInches(e.target.value)}
                      placeholder="e.g. 8"
                      min="0"
                      max="11"
                      className="form-input"
                    />
                  </div>

                  <div className="form-field stack stack-none">
                    <label htmlFor="input-weight-lbs" className="field-label">
                      Weight (lbs) <span className="req-star">*</span>
                    </label>
                    <input
                      id="input-weight-lbs"
                      type="number"
                      value={weightLbs}
                      onChange={(e) => setWeightLbs(e.target.value)}
                      placeholder="e.g. 150"
                      min="40"
                      max="650"
                      step="0.5"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="bmi-error-alert" role="alert">
                  <Icon name="alert" size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="bmi-actions split">
                <div className="cluster cluster-sm">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    rightIcon={<Icon name="arrow-right" size={16} />}
                  >
                    Calculate BMI
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={handleResetBmi}
                  >
                    Reset
                  </Button>
                </div>

                <span className="privacy-badge">Zero data stored</span>
              </div>
            </form>

            {/* Calculated Result Display */}
            {bmiResult && (
              <div className="bmi-result-card stack stack-sm" role="status" aria-live="polite">
                <div className="split result-header">
                  <div className="cluster cluster-sm">
                    <span className="bmi-number-display">{bmiResult.bmi}</span>
                    <div className="stack stack-none">
                      <span className="result-label">Calculated Score</span>
                      <Badge variant={bmiResult.categoryVariant}>{bmiResult.category}</Badge>
                    </div>
                  </div>

                  <Button
                    variant="accent"
                    size="sm"
                    href={`#${SECTION_IDS.CONTACT}`}
                    rightIcon={<Icon name="arrow-right" size={14} />}
                  >
                    Discuss in Consultation
                  </Button>
                </div>

                <p className="result-description">{bmiResult.description}</p>
              </div>
            )}

            {/* Crucial Non-Medical Disclaimer Box */}
            <div className="bmi-disclaimer-box stack stack-xs">
              <div className="cluster cluster-xs">
                <Icon name="shield" size={16} className="disclaimer-icon" />
                <strong className="disclaimer-heading">Important Non-Medical Screening Notice:</strong>
              </div>
              <p className="disclaimer-text">
                BMI is a general mathematical screening ratio based solely on height and weight. It does not measure body composition, muscle mass, bone density, fat distribution, or personal metabolic health. It is not a medical diagnosis or health outcome predictor. For personal health evaluations or medical conditions, always consult a qualified physician or healthcare provider.
              </p>
            </div>
          </Card>
        )}

        {/* =====================================================================
            TOOL 2: DAILY LIFESTYLE & HABIT REFLECTION
            ===================================================================== */}
        {activeTab === 'habits' && (
          <Card variant="surface" className="tool-main-card stack stack-md">
            <div className="stack stack-none">
              <h3 className="tool-title">Daily Lifestyle &amp; Habit Reflection</h3>
              <p className="tool-subtitle">
                A simple 3-question self-reflection on your daily routine consistency.
              </p>
            </div>

            <form onSubmit={handleHabitCheck} className="stack stack-md">
              <div className="form-field stack stack-none">
                <label htmlFor="select-hydration" className="field-label">
                  Daily Water Intake
                </label>
                <select
                  id="select-hydration"
                  value={hydration}
                  onChange={(e) => setHydration(e.target.value)}
                  className="form-select"
                >
                  <option value="Under 1.5L">Under 1.5 Liters (Working to increase)</option>
                  <option value="2-3L">2 to 3 Liters (Consistent baseline)</option>
                  <option value="3L+">3+ Liters (High hydration)</option>
                </select>
              </div>

              <div className="form-field stack stack-none">
                <label htmlFor="select-activity" className="field-label">
                  Average Daily Movement / Exercise
                </label>
                <select
                  id="select-activity"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="form-select"
                >
                  <option value="0-15min">0 – 15 Minutes (Sedentary / Desk routine)</option>
                  <option value="30min">30 – 45 Minutes (Moderate active routine)</option>
                  <option value="60min+">60+ Minutes (Regular workouts)</option>
                </select>
              </div>

              <div className="form-field stack stack-none">
                <label htmlFor="select-meals" className="field-label">
                  Meal Timings &amp; Routine Regularity
                </label>
                <select
                  id="select-meals"
                  value={mealRoutine}
                  onChange={(e) => setMealRoutine(e.target.value)}
                  className="form-select"
                >
                  <option value="irregular">Irregular / Often skip meals</option>
                  <option value="regular">Consistent daily timings</option>
                  <option value="mindful">Planned, balanced home meals</option>
                </select>
              </div>

              <div className="cluster cluster-sm">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  rightIcon={<Icon name="arrow-right" size={16} />}
                >
                  Reflect on Habits
                </Button>
              </div>
            </form>

            {habitTip && (
              <div className="habit-feedback-card stack stack-xs" role="status" aria-live="polite">
                <div className="cluster cluster-xs">
                  <Icon name="sparkles" size={16} className="sparkle-icon" />
                  <strong>Coach Halima's Habit Reflection:</strong>
                </div>
                <p className="habit-feedback-text">{habitTip}</p>

                <div className="pt-sm">
                  <Button
                    variant="accent"
                    size="sm"
                    href={`#${SECTION_IDS.CONTACT}`}
                    rightIcon={<Icon name="arrow-right" size={14} />}
                  >
                    {CTA_CONFIG.primary.label}
                  </Button>
                </div>
              </div>
            )}
          </Card>
        )}
      </div>

      {/* Wellness Tools Scoped Styles */}
      <style>{`
        .tools-container {
          max-width: 820px;
          margin: 0 auto;
        }

        .tools-tab-bar {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          margin-bottom: 0.5rem;
        }

        .tool-tab-btn {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: 700;
          padding: 0.65rem 1.25rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background-color: #FFFFFF;
          color: var(--color-text-secondary);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all var(--transition-fast);
        }

        .tool-tab-btn:hover {
          border-color: var(--color-primary-600);
          color: var(--color-primary-900);
        }

        .tool-tab-active {
          background-color: var(--color-primary-900) !important;
          color: #FFFFFF !important;
          border-color: var(--color-primary-900) !important;
        }

        .tool-main-card {
          padding: 1.75rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
        }

        .tool-header {
          align-items: flex-start;
          gap: 1rem;
        }

        .tool-title {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: 800;
          color: var(--color-primary-900);
          margin: 0;
        }

        .tool-subtitle {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          margin: 2px 0 0 0;
        }

        .unit-toggle-group {
          background-color: var(--color-bg-subtle);
          padding: 3px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
        }

        .unit-toggle-btn {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: none;
          background: transparent;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .unit-active {
          background-color: #FFFFFF;
          color: var(--color-primary-900);
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .bmi-input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .bmi-input-row-imperial {
          display: grid;
          grid-template-columns: 1fr 1fr 1.25fr;
          gap: 0.75rem;
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
        .form-select {
          width: 100%;
          font-family: var(--font-body);
          font-size: var(--text-sm);
          color: var(--color-text-main);
          background-color: var(--color-bg-subtle);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.7rem 0.95rem;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .form-input:focus,
        .form-select:focus {
          outline: none;
          border-color: var(--color-primary-600);
          background-color: #FFFFFF;
          box-shadow: 0 0 0 3px var(--color-primary-100);
        }

        .bmi-error-alert {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 0.85rem;
          background-color: #FEF2F2;
          border: 1px solid #FCA5A5;
          color: #DC2626;
          border-radius: var(--radius-md);
          font-size: var(--text-xs);
          font-weight: 600;
        }

        .bmi-actions {
          align-items: center;
        }

        .privacy-badge {
          font-size: 11px;
          font-weight: 600;
          color: var(--color-text-muted);
        }

        /* Result Card */
        .bmi-result-card {
          padding: 1.25rem 1.5rem;
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-secondary-border);
          border-radius: var(--radius-lg);
        }

        .result-header {
          align-items: center;
        }

        .bmi-number-display {
          font-family: var(--font-heading);
          font-size: var(--text-3xl);
          font-weight: 800;
          color: var(--color-primary-900);
          line-height: 1;
        }

        .result-label {
          font-size: 10px;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .result-description {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
          margin: 0;
        }

        /* Disclaimer Box */
        .bmi-disclaimer-box {
          padding: 1rem 1.25rem;
          background-color: #FFFBEB;
          border: 1px solid #FDE68A;
          border-radius: var(--radius-md);
        }

        .disclaimer-icon {
          color: #D97706;
          flex-shrink: 0;
        }

        .disclaimer-heading {
          font-size: 11px;
          color: #92400E;
        }

        .disclaimer-text {
          font-size: 11px;
          color: #92400E;
          line-height: var(--leading-relaxed);
          margin: 0;
        }

        .habit-feedback-card {
          padding: 1.25rem;
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          border-radius: var(--radius-md);
        }

        .sparkle-icon {
          color: var(--color-accent-700);
        }

        .habit-feedback-text {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
          margin: 0;
        }

        .pt-sm {
          padding-top: 0.5rem;
        }
      `}</style>
    </SectionWrapper>
  );
};
