import React from 'react';
import { Link } from 'react-router-dom';
import { ProgramFinderSection } from '../components/sections/ProgramFinderSection/ProgramFinderSection';
import { DetailedProgramsSection } from '../components/sections/DetailedProgramsSection/DetailedProgramsSection';
import { OnlineClassesSection } from '../components/sections/OnlineClassesSection/OnlineClassesSection';
import { ClassScheduleSection } from '../components/sections/ClassScheduleSection/ClassScheduleSection';
import { ChallengeSection } from '../components/sections/ChallengeSection/ChallengeSection';
import { WellnessToolsSection } from '../components/sections/WellnessToolsSection/WellnessToolsSection';
import { ServicesSection } from '../components/sections/ServicesSection/ServicesSection';
import { SectionWrapper } from '../components/layout/SectionWrapper/SectionWrapper';
import { Badge } from '../components/primitives/Badge/Badge';
import { Icon } from '../components/primitives/Icon/Icon';
import { usePageSEO } from '../hooks/usePageSEO';

const PROGRAM_LINKS = [
  {
    title: 'Online Fitness Coaching',
    href: '/online-fitness-coaching',
    icon: 'fitness' as const,
    desc: 'Personalized home-friendly fitness guidance with regular follow-up.'
  },
  {
    title: 'Weight Loss Coaching',
    href: '/weight-loss-coaching',
    icon: 'nutrition' as const,
    desc: 'Structured nutrition and fitness coaching for healthy weight management.'
  },
  {
    title: 'Weight Gain Coaching',
    href: '/weight-gain-coaching',
    icon: 'heart' as const,
    desc: 'Guided nutrition and fitness support for healthy, sustainable weight gain.'
  },
  {
    title: 'Online Nutrition Coaching',
    href: '/online-nutrition-coaching',
    icon: 'nutrition' as const,
    desc: 'Practical personalized nutrition coaching for better daily food habits.'
  },
  {
    title: 'Personalized Diet Guidance',
    href: '/personalized-diet-guidance',
    icon: 'lifestyle' as const,
    desc: 'Tailored diet guidance built around your lifestyle and food preferences.'
  },
  {
    title: '21 Days Weight Loss Challenge',
    href: '/21-days-weight-loss-challenge',
    icon: 'sparkles' as const,
    desc: 'A focused 21-day program to build healthy habits and kick-start your journey.'
  },
  {
    title: 'Lifestyle & Wellness Coaching',
    href: '/lifestyle-wellness-coaching',
    icon: 'lifestyle' as const,
    desc: 'Holistic coaching improving routines, nutrition, fitness, and daily wellbeing.'
  },
  {
    title: 'Online Diet & Fitness Classes',
    href: '/online-diet-fitness-classes',
    icon: 'clock' as const,
    desc: 'Live Zoom classes 6 days/week — morning and evening batches available.'
  },
  {
    title: 'Weight Management Program',
    href: '/weight-management-program',
    icon: 'user' as const,
    desc: 'Long-term coaching for sustained, healthy weight management.'
  },
  {
    title: 'Personal Health Coaching',
    href: '/personal-health-coaching',
    icon: 'award' as const,
    desc: 'One-to-one coaching across fitness, nutrition, and wellness goals.'
  }
];

const ProgramsHubSection: React.FC = () => (
  <SectionWrapper background="surface" padding="standard" containerSize="standard">
    <div className="programs-hub-header">
      <Badge variant="primary" icon={<Icon name="sparkles" size={13} />}>
        All Programs & Services
      </Badge>
      <h2 className="programs-hub-h2">Find the Right Coaching Program for You</h2>
      <p className="programs-hub-sub">
        All coaching is 100% online — accessible from anywhere. Explore individual programs
        below or use the Program Finder further down the page.
      </p>
    </div>
    <div className="programs-hub-grid">
      {PROGRAM_LINKS.map((prog) => (
        <Link key={prog.href} to={prog.href} className="programs-hub-card">
          <div className="programs-hub-icon-wrap">
            <Icon name={prog.icon} size={22} />
          </div>
          <div className="programs-hub-card-body">
            <h3 className="programs-hub-card-title">{prog.title}</h3>
            <p className="programs-hub-card-desc">{prog.desc}</p>
            <span className="programs-hub-card-link">
              View Program <Icon name="arrow-right" size={12} />
            </span>
          </div>
        </Link>
      ))}
    </div>
    <style>{`
      .programs-hub-header {
        text-align: center; display: flex; flex-direction: column;
        align-items: center; gap: 0.75rem; margin-bottom: 2rem;
      }
      .programs-hub-h2 {
        font-family: var(--font-heading); font-size: clamp(var(--text-xl), 3vw, var(--text-2xl));
        font-weight: 800; color: var(--color-primary-900);
        letter-spacing: -0.02em; margin: 0;
      }
      .programs-hub-sub {
        font-size: var(--text-sm); color: var(--color-text-secondary);
        line-height: var(--leading-relaxed); max-width: 600px; margin: 0;
      }
      .programs-hub-grid {
        display: grid; grid-template-columns: 1fr;
        gap: 0.85rem;
      }
      @media (min-width: 600px) { .programs-hub-grid { grid-template-columns: 1fr 1fr; } }
      @media (min-width: 900px) { .programs-hub-grid { grid-template-columns: repeat(3, 1fr); } }
      @media (min-width: 1200px) { .programs-hub-grid { grid-template-columns: repeat(5, 1fr); } }
      .programs-hub-card {
        display: flex; flex-direction: column; gap: 0.65rem;
        background: #fff; border: 1px solid var(--color-border);
        border-radius: var(--radius-lg); padding: 1.1rem;
        text-decoration: none; transition: border-color 0.2s, box-shadow 0.2s;
      }
      .programs-hub-card:hover { border-color: var(--color-primary-600); box-shadow: var(--shadow-sm); }
      .programs-hub-icon-wrap {
        width: 40px; height: 40px; border-radius: var(--radius-md);
        background: var(--color-secondary-soft); color: var(--color-primary-700);
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      }
      .programs-hub-card-body { display: flex; flex-direction: column; gap: 0.3rem; flex: 1; }
      .programs-hub-card-title {
        font-size: var(--text-sm); font-weight: 700;
        color: var(--color-primary-900); margin: 0;
      }
      .programs-hub-card-desc {
        font-size: var(--text-xs); color: var(--color-text-secondary);
        line-height: var(--leading-relaxed); margin: 0; flex: 1;
      }
      .programs-hub-card-link {
        display: inline-flex; align-items: center; gap: 3px;
        font-size: var(--text-xs); font-weight: 700;
        color: var(--color-primary-700); margin-top: 0.4rem;
      }
    `}</style>
  </SectionWrapper>
);

export const ProgramsPage: React.FC = () => {
  usePageSEO({
    title: 'Programs & Coaching Services',
    description:
      'Explore all online coaching programs by Coach Halima Sadiya — weight loss, nutrition, fitness coaching, 21-day challenge, online classes, and more. 100% online.',
    canonical: 'https://halimafitness.in/programs',
    ogTitle: 'Programs & Coaching Services | Halima Fitness Club',
    ogDescription:
      'Online fitness, nutrition, and wellness coaching programs with Coach Halima Sadiya. 6+ years experience. Book a free consultation.',
    ogType: 'website'
  });

  return (
    <>
      {/* 0. Programs Hub — SEO Index for All Program Pages */}
      <ProgramsHubSection />

      {/* 1. Interactive Program Finder */}
      <ProgramFinderSection />

      {/* 2. Detailed Program Breakdown */}
      <DetailedProgramsSection />

      {/* 2.5 All Services */}
      <ServicesSection />

      {/* 3. Live Online Classes */}
      <OnlineClassesSection />

      {/* 4. Live Class Slots & Weekly Schedule */}
      <ClassScheduleSection />

      {/* 5. 21-Day Sprint Challenge */}
      <ChallengeSection />

      {/* 6. BMI Screening & Wellness Tools */}
      <WellnessToolsSection />
    </>
  );
};

export default ProgramsPage;
