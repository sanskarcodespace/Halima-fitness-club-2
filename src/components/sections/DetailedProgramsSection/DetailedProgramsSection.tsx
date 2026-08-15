import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { ProgramDetailCard, type DetailedProgramData } from './ProgramDetailCard';

export const DETAILED_PROGRAMS_DATA: DetailedProgramData[] = [
  {
    id: 'det-weight-loss',
    anchorId: 'service-weight-loss',
    title: 'Weight Loss Coaching',
    tagline: 'Sustainable caloric and nutritional guidance for gradual, lasting fat loss.',
    category: 'lifestyle',
    targetAudience: 'Individuals seeking safe, steady weight reduction without restrictive crash dieting or exhausting gym routines.',
    focusAreas: [
      'Mindful caloric balance & portion awareness',
      'Daily protein & fiber optimization',
      'Low-impact home movement & fat-burn routines',
      'Craving management & emotional eating strategies'
    ],
    supportIncludes: [
      'Custom daily meal structures aligned with your home kitchen',
      'Low-impact home workout plan (no gym equipment needed)',
      'Weekly virtual check-in and progress evaluation',
      'Daily hydration & sleep tracking support'
    ],
    coachingProcess: [
      { step: 'Initial Lifestyle Assessment', description: 'Evaluate baseline eating habits, schedule, and personal weight goals.' },
      { step: 'Personalized Plan Creation', description: 'Receive your customized nutrition structure and home exercise routine.' },
      { step: 'Weekly Accountability & Follow-up', description: 'Regular check-ins with Coach Halima to review progress and refine habits.' }
    ]
  },
  {
    id: 'det-weight-gain',
    anchorId: 'service-weight-gain',
    title: 'Weight Gain Coaching',
    tagline: 'Nutrient-dense nutrition and progressive home strength routines to build healthy body mass.',
    category: 'fitness',
    targetAudience: 'Individuals looking to build healthy weight, lean muscle tone, and improved metabolic strength.',
    focusAreas: [
      'Nutrient-dense caloric surplus planning',
      'Digestive comfort & meal timing optimization',
      'Progressive home resistance & strength training',
      'Adequate recovery & muscle protein synthesis'
    ],
    supportIncludes: [
      'Personalized high-energy meal blueprints & wholesome snacks',
      'Progressive bodyweight & light resistance workout plan',
      'Body measurements and weight progression tracking',
      'Digestive wellness and appetite optimization guidance'
    ],
    coachingProcess: [
      { step: 'Metabolic & Dietary Evaluation', description: 'Understand your baseline metabolic rate, food intake, and digestion.' },
      { step: 'Custom Surplus Nutrition Plan', description: 'Deploy wholesome, calorie-efficient meal structures without junk foods.' },
      { step: 'Progressive Strength Monitoring', description: 'Regular adjustments to ensure steady, healthy mass development.' }
    ]
  },
  {
    id: 'det-nutrition',
    anchorId: 'service-nutrition',
    title: 'Online Nutrition Coaching',
    tagline: 'Practical nutrition education and mindful eating habits suited to your lifestyle.',
    category: 'nutrition',
    targetAudience: 'Busy professionals, parents, and individuals needing dietary clarity and balance without extreme rules.',
    focusAreas: [
      'Balanced macronutrient distribution (carbs, protein, fats)',
      'Portion control and food quality awareness',
      'Smart grocery shopping & pantry organization',
      'Dining out & social event nutrition strategies'
    ],
    supportIncludes: [
      'Customized macronutrient & portion size guidelines',
      'Family-friendly meal planning suggestions',
      'Weekly food diary review & constructive feedback',
      'Direct guidance for navigating busy travel and social dining'
    ],
    coachingProcess: [
      { step: 'Dietary Habit Audit', description: 'Review current eating patterns, food preferences, and daily schedule.' },
      { step: 'Nutrition Education & Plan', description: 'Learn practical food combinations and realistic daily meal guidelines.' },
      { step: 'Continuous Dietary Feedback', description: 'Weekly virtual reviews to reinforce intuitive, healthy eating habits.' }
    ]
  },
  {
    id: 'det-fitness',
    anchorId: 'service-fitness',
    title: 'Online Fitness Coaching',
    tagline: 'Tailored home exercise routines designed for your current fitness baseline.',
    category: 'fitness',
    targetAudience: 'Anyone seeking guided, effective, and injury-safe workouts that can be completed from home.',
    focusAreas: [
      'Functional full-body movement & core strength',
      'Cardiovascular endurance and stamina',
      'Joint mobility, flexibility & posture correction',
      'Safe progression without complex gym machinery'
    ],
    supportIncludes: [
      'Tailored home workout calendar adapted to your space',
      'Video movement form reviews with Coach Halima',
      'Joint warm-up, stretching, and mobility routines',
      'Low-impact modification options for beginners'
    ],
    coachingProcess: [
      { step: 'Movement & Mobility Check', description: 'Assess baseline physical capabilities, joint comfort, and workout space.' },
      { step: 'Custom Exercise Program', description: 'Receive progressive home routines with clear instructions.' },
      { step: 'Form Review & Follow-up', description: 'Submit video clips for form validation and receive routine updates.' }
    ]
  },
  {
    id: 'det-diet-guidance',
    anchorId: 'service-diet-guidance',
    title: 'Personalized Diet Guidance',
    tagline: 'Custom meal recommendations designed around your cultural preferences and daily schedule.',
    category: 'nutrition',
    targetAudience: 'Individuals wanting clear, customized food choices that respect their cultural cuisine and daily timetable.',
    focusAreas: [
      'Schedule-aligned meal timing & digestion optimization',
      'Cultural and traditional dish balancing',
      'Hydration scheduling and afternoon energy maintenance',
      'Healthy snacking & mindful portion control'
    ],
    supportIncludes: [
      'Tailored meal recommendations using accessible local ingredients',
      'Nutrient-dense snack options for work and busy afternoons',
      'Hydration protocols and digestive wellness recommendations',
      'Flexible ingredient substitution lists'
    ],
    coachingProcess: [
      { step: 'Cuisine & Routine Discovery', description: 'Analyze your favorite meals, daily timetable, and dietary preferences.' },
      { step: 'Personalized Diet Blueprint', description: 'Receive balanced recipe frameworks that fit your everyday routine.' },
      { step: 'Weekly Refinement', description: 'Fine-tune portion balances and meal timing based on your energy levels.' }
    ]
  },
  {
    id: 'det-21-day-challenge',
    anchorId: 'service-21-day-challenge',
    title: '21 Days Weight Loss Challenge',
    tagline: 'A focused, structured kickstart sprint to build healthy morning routines and clean eating momentum.',
    category: 'challenge',
    targetAudience: 'Anyone needing a structured, time-bounded sprint to break inertia and build consistent daily discipline.',
    focusAreas: [
      '21-day daily habit consistency (hydration, movement, meals)',
      'Morning routine anchoring & evening wind-down',
      'Elimination of mindless late-night snacking',
      'Building lasting momentum for long-term health'
    ],
    supportIncludes: [
      '21-day structured habit checklist and milestone tracker',
      'Kickstart nutrition guide & clean eating blueprint',
      'Daily accountability reminders & motivational check-ins',
      'Day 21 milestone evaluation and sustainable next-step plan'
    ],
    coachingProcess: [
      { step: 'Day 1 Kickoff & Goal Setting', description: 'Receive your 21-day challenge kit, checklist, and kickstart rules.' },
      { step: 'Daily Habit Execution', description: 'Complete your daily movement, nutrition, and hydration targets.' },
      { step: 'Milestone Review & Transition', description: 'Celebrate consistency and transition into a long-term wellness plan.' }
    ],
    customCtaLabel: 'Join the Next 21-Day Challenge'
  },
  {
    id: 'det-lifestyle-wellness',
    anchorId: 'service-lifestyle-wellness',
    title: 'Lifestyle & Wellness Coaching',
    tagline: 'Holistic lifestyle guidance addressing sleep quality, daily stress, and sustained energy.',
    category: 'lifestyle',
    targetAudience: 'Individuals managing stress, irregular sleep patterns, afternoon energy crashes, or mental fatigue.',
    focusAreas: [
      'Sleep hygiene and circadian rhythm alignment',
      'Daily stress mitigation and mindful breathing habits',
      'Consistent hydration routines and gut wellness',
      'Daily energy rhythm and screen-time management'
    ],
    supportIncludes: [
      'Personalized sleep hygiene checklist & bedtime protocol',
      'Stress reduction breathing routines and relaxation tips',
      'Daily hydration & energy level audit',
      'Mindful lifestyle habit restructuring framework'
    ],
    coachingProcess: [
      { step: 'Lifestyle & Stress Audit', description: 'Examine sleep schedules, stress triggers, and daily energy dips.' },
      { step: 'Holistic Wellness Protocol', description: 'Implement manageable lifestyle adjustments and evening routines.' },
      { step: 'Bi-Weekly Vitality Reviews', description: 'Monitor recovery, sleep improvements, and daily mental clarity.' }
    ]
  },
  {
    id: 'det-online-classes',
    anchorId: 'service-online-classes',
    title: 'Online Diet & Fitness Classes',
    tagline: 'Interactive virtual group sessions covering nutrition fundamentals and guided movement.',
    category: 'coaching',
    targetAudience: 'Group learners seeking interactive virtual guidance, practical cooking strategies, and guided home exercises.',
    focusAreas: [
      'Interactive nutrition masterclasses & label reading',
      'Live guided mobility, stretching, and low-impact workouts',
      'Group Q&A with Coach Halima on practical health topics',
      'Community motivation and shared habit consistency'
    ],
    supportIncludes: [
      'Access to scheduled live virtual video sessions',
      'Downloadable class summaries & habit checklists',
      'Direct Q&A opportunities with Coach Halima during sessions',
      'Recorded session access for flexible viewing'
    ],
    coachingProcess: [
      { step: 'Class Registration', description: 'Choose your scheduled virtual session and receive connection links.' },
      { step: 'Interactive Virtual Session', description: 'Participate in live demonstrations, exercises, and health discussions.' },
      { step: 'Post-Class Implementation', description: 'Apply actionable takeaways with provided habit reference notes.' }
    ],
    customCtaLabel: 'Inquire About Classes',
    isClassRelated: true
  },
  {
    id: 'det-weight-mgmt',
    anchorId: 'service-weight-mgmt',
    title: 'Weight Management Program',
    tagline: 'Long-term nutritional balance and lifestyle stabilization to maintain your ideal weight.',
    category: 'lifestyle',
    targetAudience: 'Clients who have reached their target weight and want sustainable strategies to prevent rebound.',
    focusAreas: [
      'Transition from weight reduction to long-term maintenance',
      'Metabolic stabilization and intuitive eating skills',
      'Sustainable workout cadence for active living',
      'Holiday, vacation, and social maintenance strategies'
    ],
    supportIncludes: [
      'Long-term maintenance macronutrient & portion framework',
      'Bi-weekly virtual progress touchpoints',
      'Relapse prevention and routine stabilization toolkit',
      'Ongoing guidance for lifestyle changes and schedule shifts'
    ],
    coachingProcess: [
      { step: 'Maintenance Baseline Review', description: 'Establish caloric balance point and lifestyle sustainability markers.' },
      { step: 'Stabilization Protocol', description: 'Gradually expand meal flexibility while preserving key health habits.' },
      { step: 'Periodic Follow-Up Check-ins', description: 'Regular touchpoints to ensure lifelong weight equilibrium.' }
    ]
  },
  {
    id: 'det-personal-health',
    anchorId: 'service-personal-health',
    title: 'Personal Health Coaching',
    tagline: 'All-inclusive 1-on-1 dedicated virtual wellness coaching for holistic health transformation.',
    category: 'coaching',
    targetAudience: 'Individuals seeking dedicated, continuous 1-on-1 mentorship across nutrition, fitness, and daily lifestyle habits.',
    focusAreas: [
      'Fully customized nutrition & home fitness roadmaps',
      'Comprehensive habit architecture and accountability',
      'Ongoing lifestyle, sleep, and vitality optimization',
      'Direct priority communication with Coach Halima'
    ],
    supportIncludes: [
      'Dedicated 1-on-1 virtual consulting sessions',
      'Fully personalized daily nutrition & exercise roadmaps',
      'Priority direct messaging support for questions and guidance',
      'Comprehensive monthly progress and goal realignment reviews'
    ],
    coachingProcess: [
      { step: 'Deep-Dive Discovery Session', description: 'Comprehensive consultation exploring health history, goals, and daily schedule.' },
      { step: 'Complete Custom Coaching Roadmap', description: 'Deploy fully integrated nutrition, movement, and habit protocols.' },
      { step: 'Dedicated 1-on-1 Mentorship', description: 'Continuous virtual check-ins, direct follow-up, and real-time guidance.' }
    ]
  }
];

export const DetailedProgramsSection: React.FC = () => {
  return (
    <SectionWrapper
      id="detailed-programs"
      background="surface"
      padding="standard"
      containerSize="wide"
      className="detailed-programs-section"
    >
      <SectionHeading
        eyebrow="In-Depth Program Breakdowns"
        eyebrowVariant="accent"
        title={
          <>
            Find the Exact Coaching Program{' '}
            <span className="text-primary-green">Designed for Your Goals</span>
          </>
        }
        subtitle="Explore the detailed focus, virtual deliverables, and coaching workflow for each of our 10 specialized programs."
        align="center"
      />

      <div className="detailed-programs-list stack stack-md">
        {DETAILED_PROGRAMS_DATA.map((program, index) => (
          <ProgramDetailCard
            key={program.id}
            program={program}
            reverseLayout={index % 2 === 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
