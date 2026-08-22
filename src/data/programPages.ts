/**
 * Halima Fitness Club — Program Page Content Data
 *
 * Each entry defines the unique SEO, content, FAQ, and internal links
 * for one program service page. The ServicePageTemplate renders this data.
 *
 * IMPORTANT: Do not add medical claims, guaranteed results, invented certifications,
 * or fake client numbers. All content must be factual and compliant.
 */

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface WhatIncludedItem {
  icon: string; // must be a valid IconName
  label: string;
  description: string;
}

export interface AudienceItem {
  label: string;
  description: string;
}

export interface RelatedProgram {
  title: string;
  href: string;
  description: string;
}

export interface ProgramPageData {
  slug: string;
  title: string;          // Used in <title> tag: "{title} | Halima Fitness Club"
  h1: string;             // Exact H1 on the page
  eyebrow: string;        // Small badge text above H1
  heroSubtitle: string;   // Short supporting paragraph in hero
  introHeading: string;   // "What is…" / intro heading
  introParagraphs: string[];  // 1–3 intro paragraphs
  audienceHeading: string;
  audience: AudienceItem[];
  included: WhatIncludedItem[];
  showOnlineDelivery: boolean;  // Whether to show the Zoom/live-class section
  faqs: FaqEntry[];
  relatedPrograms: RelatedProgram[];
  metaDescription: string;
  canonicalPath: string;  // e.g. /online-fitness-coaching
  ctaTitle: string;
  ctaSubtitle: string;
  heroImageAlt: string;
}

export const PROGRAM_PAGES: ProgramPageData[] = [
  // ================================================================
  // 1. Online Fitness Coaching
  // ================================================================
  {
    slug: 'online-fitness-coaching',
    title: 'Online Fitness Coaching',
    h1: 'Online Fitness Coaching',
    eyebrow: 'Online • Home-Friendly • Personalized',
    heroSubtitle:
      'Work with a certified health and wellness coach from wherever you are. Get structured fitness guidance, personalized routines, and regular follow-up — all online.',
    introHeading: 'What Is Online Fitness Coaching?',
    introParagraphs: [
      'Online fitness coaching brings professional guidance directly to you, wherever you choose to train. Rather than working alone with generic content, you get a structured approach based on your specific goals, current fitness level, schedule, and lifestyle.',
      'Coach Halima Sadiya provides remote fitness support through personalized guidance, workout routines suitable for home environments, and regular check-ins to keep you on track. No gym membership or equipment is required — just a commitment to consistent progress.',
      'Whether you are a complete beginner looking to start moving more, or someone wanting accountability to maintain a routine, online fitness coaching offers a flexible and effective path forward.'
    ],
    audienceHeading: 'Who Is This Program For?',
    audience: [
      {
        label: 'Beginners',
        description: 'Starting a fitness routine for the first time and needing guidance on where to begin.'
      },
      {
        label: 'Work-from-Home Professionals',
        description: 'Desk-based lifestyles leading to inactivity, stiffness, or low energy levels.'
      },
      {
        label: 'Busy Individuals',
        description: 'Limited time to attend a gym but wanting consistent fitness support that fits their schedule.'
      },
      {
        label: 'Home-Based Preference',
        description: 'Preferring to train at home, with guided routines that require minimal equipment.'
      },
      {
        label: 'Anyone Seeking Accountability',
        description: 'Having tried working out alone without consistent results and wanting regular follow-up and support.'
      }
    ],
    included: [
      {
        icon: 'fitness',
        label: 'Personalized Fitness Guidance',
        description: 'Home-friendly exercise guidance tailored to your goals and current fitness level.'
      },
      {
        icon: 'user',
        label: 'Regular Follow-up',
        description: 'Consistent check-ins to track your progress and adjust your approach as needed.'
      },
      {
        icon: 'heart',
        label: 'Workout Support',
        description: 'Guidance on form, pacing, and building sustainable exercise habits over time.'
      },
      {
        icon: 'clock',
        label: 'Online Consultation',
        description: 'Initial consultation to understand your goals, schedule, and fitness baseline.'
      },
      {
        icon: 'message',
        label: 'WhatsApp Support',
        description: 'Ongoing support and quick answers between sessions through WhatsApp.'
      }
    ],
    showOnlineDelivery: true,
    faqs: [
      {
        question: 'Do I need any gym equipment for online fitness coaching?',
        answer:
          'No. The programs are designed to be home-friendly. Most routines can be done without special equipment. Any recommendations for props are optional and low-cost.'
      },
      {
        question: 'How does online fitness coaching work?',
        answer:
          'You start with a free initial consultation to discuss your goals and current fitness level. Based on that, Coach Halima provides personalized fitness guidance and regular follow-up sessions to monitor your progress.'
      },
      {
        question: 'Can I join from any city or country?',
        answer:
          'Yes. All coaching is 100% online via Zoom, WhatsApp, and email. You can participate from anywhere with a stable internet connection.'
      },
      {
        question: 'Are the coaching sessions live or pre-recorded?',
        answer:
          'Live online group classes are conducted 6 days a week via Zoom. Individual consultations and follow-up sessions are also scheduled online.'
      },
      {
        question: 'Is there a trial class available?',
        answer:
          'Yes, a trial class is available on request. Contact Coach Halima to arrange a trial session before committing to a regular schedule.'
      },
      {
        question: 'How do I get started?',
        answer:
          'Book a free initial consultation through the consultation form or WhatsApp. During the consultation, you will discuss your goals, schedule, and receive guidance on the most suitable coaching approach.'
      }
    ],
    relatedPrograms: [
      { title: 'Online Diet & Fitness Classes', href: '/online-diet-fitness-classes', description: 'Join live Zoom group fitness classes, 6 days a week.' },
      { title: 'Weight Management Program', href: '/weight-management-program', description: 'Combine fitness and nutrition for long-term weight management.' },
      { title: 'Lifestyle & Wellness Coaching', href: '/lifestyle-wellness-coaching', description: 'Improve overall wellbeing with a holistic lifestyle approach.' },
      { title: 'Personal Health Coaching', href: '/personal-health-coaching', description: 'One-to-one coaching covering fitness, nutrition, and wellness goals.' }
    ],
    metaDescription:
      'Online fitness coaching with Coach Halima Sadiya. Personalized home-friendly fitness guidance, regular follow-up, and live online classes. Book a free consultation.',
    canonicalPath: '/online-fitness-coaching',
    ctaTitle: 'Ready to Start Your Fitness Journey?',
    ctaSubtitle:
      'Book a free initial consultation with Coach Halima Sadiya to discuss your fitness goals and find the right program for your lifestyle.',
    heroImageAlt: 'Woman doing home workout during online fitness coaching session'
  },

  // ================================================================
  // 2. Weight Loss Coaching
  // ================================================================
  {
    slug: 'weight-loss-coaching',
    title: 'Online Weight Loss Coaching',
    h1: 'Online Weight Loss Coaching',
    eyebrow: 'Structured • Sustainable • Online',
    heroSubtitle:
      'Structured weight management support combining nutrition guidance, fitness coaching, and regular follow-up — all delivered online by a certified health coach.',
    introHeading: 'What Is Online Weight Loss Coaching?',
    introParagraphs: [
      'Weight loss coaching is a structured process of receiving personalized guidance on nutrition, fitness, and lifestyle habits to support healthy weight management. Rather than following a generic diet or program, coaching focuses on your individual routine, food preferences, and goals.',
      'Coach Halima Sadiya helps clients understand the connection between daily eating habits, physical activity, and overall lifestyle choices. The coaching process includes regular follow-up to keep progress on track and address challenges as they arise.',
      'This is not a quick-fix program. The focus is on building sustainable habits that support healthy weight management over the long term. Results vary based on individual consistency, starting point, and adherence to guidance.'
    ],
    audienceHeading: 'Who Is This Program For?',
    audience: [
      {
        label: 'People Seeking Structured Support',
        description: 'Wanting guidance and accountability to manage their weight more effectively.'
      },
      {
        label: 'Individuals with a Busy Lifestyle',
        description: 'Needing practical, flexible nutrition and fitness guidance that fits around daily commitments.'
      },
      {
        label: 'Those Struggling with Consistency',
        description: 'Having tried various approaches without sustained results and looking for personalized support.'
      },
      {
        label: 'Anyone Starting Their Health Journey',
        description: 'Looking for a structured starting point to improve diet, activity level, and overall wellbeing.'
      }
    ],
    included: [
      {
        icon: 'nutrition',
        label: 'Nutrition Guidance',
        description: 'Practical food habit guidance aligned with your daily routine and preferences.'
      },
      {
        icon: 'fitness',
        label: 'Fitness Support',
        description: 'Home-friendly exercise guidance to support activity and energy levels.'
      },
      {
        icon: 'lifestyle',
        label: 'Lifestyle Habit Coaching',
        description: 'Guidance on sleep, stress management, hydration, and daily routine improvements.'
      },
      {
        icon: 'user',
        label: 'Regular Follow-up',
        description: 'Scheduled check-ins to monitor progress and adjust the approach as needed.'
      },
      {
        icon: 'message',
        label: 'WhatsApp Support',
        description: 'Accessible support between sessions for questions and accountability.'
      }
    ],
    showOnlineDelivery: true,
    faqs: [
      {
        question: 'How much weight can I expect to lose?',
        answer:
          'We do not promise specific weight loss amounts. Results vary based on individual circumstances, consistency, and lifestyle factors. The focus is on building sustainable healthy habits that support gradual, meaningful progress over time.'
      },
      {
        question: 'Is this a medical weight loss program?',
        answer:
          'No. This is lifestyle, nutrition, and fitness coaching — not medical treatment or clinical therapy. If you have a medical condition affecting your weight, please consult a physician before beginning any coaching program.'
      },
      {
        question: 'How long does the program run?',
        answer:
          'Program duration is discussed during the initial consultation based on your goals and timeline. Sustainable progress is the priority, not a fixed short-term deadline.'
      },
      {
        question: 'Do I need to follow a strict diet?',
        answer:
          'The approach focuses on practical, sustainable nutrition habits rather than extreme restriction. Coach Halima works with your existing food preferences to build healthier patterns gradually.'
      },
      {
        question: 'Can I do this program alongside the live online classes?',
        answer:
          'Yes. The live online Zoom classes (6 days/week) complement the weight loss coaching program well. Combining fitness with nutrition guidance is encouraged for consistent progress.'
      },
      {
        question: 'How do I book a consultation?',
        answer:
          'Fill in the consultation form on this website or message directly on WhatsApp. Coach Halima will respond to arrange your free initial consultation.'
      }
    ],
    relatedPrograms: [
      { title: 'Personalized Diet Guidance', href: '/personalized-diet-guidance', description: 'Tailored food and nutrition guidance to support your weight goals.' },
      { title: 'Online Nutrition Coaching', href: '/online-nutrition-coaching', description: 'Practical nutrition support focused on healthy eating habits.' },
      { title: 'Online Fitness Coaching', href: '/online-fitness-coaching', description: 'Home-friendly exercise guidance to complement your nutrition plan.' },
      { title: '21 Days Weight Loss Challenge', href: '/21-days-weight-loss-challenge', description: 'A focused 21-day program to kick-start healthy habits.' }
    ],
    metaDescription:
      'Online weight loss coaching with Coach Halima Sadiya. Structured nutrition guidance, fitness support, and regular follow-up to help you build sustainable healthy habits.',
    canonicalPath: '/weight-loss-coaching',
    ctaTitle: 'Start Your Weight Management Journey',
    ctaSubtitle:
      'Book a free initial consultation to discuss your goals and explore the most suitable coaching approach for your lifestyle.',
    heroImageAlt: 'Healthy meal preparation for weight loss coaching'
  },

  // ================================================================
  // 3. Weight Gain Coaching
  // ================================================================
  {
    slug: 'weight-gain-coaching',
    title: 'Weight Gain Coaching',
    h1: 'Weight Gain Coaching',
    eyebrow: 'Nutrition • Fitness • Healthy Habits',
    heroSubtitle:
      'Online coaching to support healthy weight gain through structured nutrition guidance, fitness support, and consistent follow-up.',
    introHeading: 'What Is Weight Gain Coaching?',
    introParagraphs: [
      'Healthy weight gain is about more than simply eating more food. It involves understanding nutrition, building muscle-supporting habits, and creating a sustainable routine that encourages steady, healthy progress. Weight gain coaching provides structured guidance to help you navigate this process effectively.',
      'Coach Halima Sadiya works with individuals who are underweight, struggling to gain weight despite eating well, or looking to build a healthier, stronger body. The coaching approach focuses on nutrition habits, appropriate fitness guidance, and regular follow-up to monitor progress.',
      'This program is based on lifestyle and wellness coaching, not medical nutrition therapy. Results vary based on individual adherence, metabolism, and consistency.'
    ],
    audienceHeading: 'Who Is This Program For?',
    audience: [
      {
        label: 'People with Difficulty Gaining Weight',
        description: 'Those who eat regularly but struggle to achieve or maintain a healthy weight.'
      },
      {
        label: 'Individuals Recovering from Illness',
        description: 'Anyone who has experienced unintentional weight loss and wants structured support to rebuild healthily. (Always consult your doctor first.)'
      },
      {
        label: 'Young Adults Seeking Structure',
        description: 'Particularly those with fast metabolisms looking for a practical nutrition and fitness plan.'
      },
      {
        label: 'Those Seeking Sustainable Results',
        description: 'Anyone wanting a gradual, healthy approach rather than quick fixes or extreme eating plans.'
      }
    ],
    included: [
      {
        icon: 'nutrition',
        label: 'Nutrition Guidance',
        description: 'Practical guidance on food choices, meal timing, and nutrient-dense eating habits.'
      },
      {
        icon: 'fitness',
        label: 'Fitness Support',
        description: 'Exercise guidance to support muscle development and healthy weight progression.'
      },
      {
        icon: 'user',
        label: 'Regular Follow-up',
        description: 'Scheduled progress check-ins and adjustments to keep your journey on track.'
      },
      {
        icon: 'message',
        label: 'WhatsApp Support',
        description: 'Ongoing accessible support between sessions via WhatsApp.'
      },
      {
        icon: 'clock',
        label: 'Initial Consultation',
        description: 'A free consultation to understand your starting point, goals, and daily routine.'
      }
    ],
    showOnlineDelivery: false,
    faqs: [
      {
        question: 'How much weight can I expect to gain?',
        answer:
          'There are no guaranteed weight gain amounts. Results depend on individual factors including metabolism, consistency, and adherence. The focus is on gradual, sustainable healthy weight gain rather than rapid bulk.'
      },
      {
        question: 'Is this a medical program for underweight conditions?',
        answer:
          'No. This is lifestyle and wellness coaching. If you have a medical condition contributing to your low weight, please consult a physician before starting any coaching program.'
      },
      {
        question: 'Do I need to take supplements?',
        answer:
          'Supplement recommendations are not part of the coaching scope. The focus is on building healthy food and lifestyle habits. Any supplement decisions should be discussed with a qualified healthcare professional.'
      },
      {
        question: 'Can I do this alongside the online classes?',
        answer:
          'Yes. The live online fitness classes complement the weight gain coaching, particularly for those wanting to build strength and improve their fitness alongside nutrition habits.'
      },
      {
        question: 'How long will I need coaching?',
        answer:
          'Duration is discussed during the initial consultation based on your personal goals. Healthy weight gain is a gradual process and consistency over time is more important than a fixed deadline.'
      }
    ],
    relatedPrograms: [
      { title: 'Online Nutrition Coaching', href: '/online-nutrition-coaching', description: 'Nutrition guidance to support healthy eating and lifestyle habits.' },
      { title: 'Personalized Diet Guidance', href: '/personalized-diet-guidance', description: 'Personalized food and meal planning guidance for your specific goals.' },
      { title: 'Personal Health Coaching', href: '/personal-health-coaching', description: 'Comprehensive one-to-one coaching across fitness, nutrition, and wellness.' },
      { title: 'Online Fitness Coaching', href: '/online-fitness-coaching', description: 'Home-friendly fitness guidance to complement your nutrition plan.' }
    ],
    metaDescription:
      'Weight gain coaching with Coach Halima Sadiya. Personalized nutrition guidance, fitness support, and regular follow-up for healthy and sustainable weight gain.',
    canonicalPath: '/weight-gain-coaching',
    ctaTitle: 'Ready to Build Healthier Habits?',
    ctaSubtitle:
      'Book a free initial consultation with Coach Halima Sadiya to discuss your weight gain goals and the right coaching approach for you.',
    heroImageAlt: 'Balanced healthy meal for weight gain nutrition coaching'
  },

  // ================================================================
  // 4. Online Nutrition Coaching
  // ================================================================
  {
    slug: 'online-nutrition-coaching',
    title: 'Online Nutrition Coaching',
    h1: 'Online Nutrition Coaching',
    eyebrow: 'Practical • Personalized • Online',
    heroSubtitle:
      'Practical, personalized nutrition guidance to help you build better food habits, improve your daily diet, and support your overall health goals.',
    introHeading: 'What Is Online Nutrition Coaching?',
    introParagraphs: [
      'Nutrition coaching helps you understand how your daily food choices affect your energy levels, weight, and overall wellbeing. Rather than following generic diet advice, online nutrition coaching provides personalized guidance that fits your actual lifestyle, food preferences, and goals.',
      'Coach Halima Sadiya works with clients to identify practical improvements to their diet, create better meal habits, and develop a healthier relationship with food over time. Sessions are conducted online, making it accessible regardless of where you live.',
      'This is not medical dietary treatment. It is lifestyle-focused nutrition guidance aimed at improving daily habits in a practical and sustainable way.'
    ],
    audienceHeading: 'Who Is This Program For?',
    audience: [
      {
        label: 'Those Confused by Nutrition Information',
        description: 'People overwhelmed by conflicting diet advice and looking for clear, practical guidance.'
      },
      {
        label: 'Anyone with Irregular Eating Habits',
        description: 'Struggling with skipping meals, emotional eating, or poor food choices due to a busy lifestyle.'
      },
      {
        label: 'People with Specific Health Goals',
        description: 'Whether focused on weight, energy, skin, or general wellbeing — nutrition coaching supports a range of goals.'
      },
      {
        label: 'Parents and Families',
        description: 'Looking to improve family nutrition and build better food habits for the household.'
      }
    ],
    included: [
      {
        icon: 'nutrition',
        label: 'Nutrition Habit Guidance',
        description: 'Practical advice on daily food choices, portion awareness, and meal timing.'
      },
      {
        icon: 'lifestyle',
        label: 'Goal-Based Nutrition Support',
        description: 'Guidance tailored to your specific objective — weight, energy, skin, or general health.'
      },
      {
        icon: 'user',
        label: 'Online Consultations',
        description: 'Regular online sessions to discuss progress, challenges, and adjustments.'
      },
      {
        icon: 'message',
        label: 'WhatsApp Support',
        description: 'Accessible ongoing support for questions about meals and habits.'
      },
      {
        icon: 'heart',
        label: 'Lifestyle Integration',
        description: 'Practical strategies that fit into your daily schedule and food culture.'
      }
    ],
    showOnlineDelivery: false,
    faqs: [
      {
        question: 'Is this nutrition therapy or medical advice?',
        answer:
          'No. This is lifestyle nutrition coaching, not medical dietary therapy or clinical treatment. If you have a diagnosed medical condition requiring specialized dietary management, please consult a registered dietitian or medical professional.'
      },
      {
        question: 'Will I receive a specific diet plan?',
        answer:
          'Guidance focuses on practical food habits and improvements to your existing diet rather than strict prescriptive meal plans. The goal is to build sustainable patterns that work for your real-life routine.'
      },
      {
        question: 'Does the coaching work for vegetarians/non-vegetarians?',
        answer:
          'Yes. Nutrition guidance is adapted to your food preferences, cultural background, and dietary choices.'
      },
      {
        question: 'How do online nutrition sessions work?',
        answer:
          'Sessions are conducted via online consultation. You discuss your current diet, challenges, and goals with Coach Halima, who then provides practical guidance and follow-up.'
      },
      {
        question: 'How often will we have sessions?',
        answer:
          'Session frequency is determined during your initial consultation based on your goals and progress. Regular follow-up is an important part of the coaching process.'
      },
      {
        question: 'Can nutrition coaching help with skin health?',
        answer:
          'Nutrition plays an important role in overall skin health. If skin wellness is a goal, discuss this specifically during your consultation. We also offer a dedicated Skin & Wellness Guidance program.'
      }
    ],
    relatedPrograms: [
      { title: 'Personalized Diet Guidance', href: '/personalized-diet-guidance', description: 'Detailed, personalized food and meal guidance for your goals.' },
      { title: 'Weight Loss Coaching', href: '/weight-loss-coaching', description: 'Structured support for healthy weight management.' },
      { title: 'Weight Management Program', href: '/weight-management-program', description: 'Long-term nutrition and fitness support for sustainable weight management.' },
      { title: 'Lifestyle & Wellness Coaching', href: '/lifestyle-wellness-coaching', description: 'Holistic coaching combining nutrition, fitness, and daily habit improvement.' }
    ],
    metaDescription:
      'Online nutrition coaching with Coach Halima Sadiya. Personalized food habit guidance, goal-based nutrition support, and regular online consultations. Book a free consultation.',
    canonicalPath: '/online-nutrition-coaching',
    ctaTitle: 'Improve Your Nutrition Habits Today',
    ctaSubtitle:
      'Book a free initial consultation with Coach Halima to discuss your diet goals and discover practical nutrition guidance that fits your lifestyle.',
    heroImageAlt: 'Fresh healthy food and nutrition coaching online'
  },

  // ================================================================
  // 5. Personalized Diet Guidance
  // ================================================================
  {
    slug: 'personalized-diet-guidance',
    title: 'Personalized Diet Guidance',
    h1: 'Personalized Diet Guidance',
    eyebrow: 'Tailored to You • Practical • Sustainable',
    heroSubtitle:
      'Get personalized food and diet guidance based on your goals, daily routine, food preferences, and lifestyle — with regular follow-up to ensure steady progress.',
    introHeading: 'What Is Personalized Diet Guidance?',
    introParagraphs: [
      'Generic diets rarely work because they are not designed around your specific life. Personalized diet guidance takes into account your food preferences, daily schedule, health goals, lifestyle, and dietary habits to provide practical, relevant recommendations.',
      'Coach Halima Sadiya creates a guidance approach unique to each individual. Rather than a one-size-fits-all meal plan, you receive ongoing support that evolves with your progress and adapts to your real-world challenges.',
      'This service focuses on lifestyle and wellness coaching, not medical dietary prescription. The aim is to build better, sustainable eating habits — not impose strict or extreme dietary rules.'
    ],
    audienceHeading: 'Who Is This Program For?',
    audience: [
      {
        label: 'Anyone Tired of Generic Diets',
        description: 'Who has tried standard diet plans and found they do not fit their actual life or preferences.'
      },
      {
        label: 'Goal-Focused Individuals',
        description: 'With specific goals such as weight management, energy improvement, skin health, or general nutrition.'
      },
      {
        label: 'Those with Specific Food Preferences',
        description: 'Including vegetarians, non-vegetarians, or those with cultural or personal dietary preferences that need to be respected.'
      },
      {
        label: 'People Seeking Long-Term Habit Change',
        description: 'Not a quick fix, but a sustainable shift in how they approach food and daily nutrition.'
      }
    ],
    included: [
      {
        icon: 'nutrition',
        label: 'Personalized Guidance',
        description: 'Diet and nutrition guidance tailored to your specific goals, preferences, and lifestyle.'
      },
      {
        icon: 'heart',
        label: 'Meal Planning Support',
        description: 'Practical support for structuring meals and daily food routines that actually work for you.'
      },
      {
        icon: 'lifestyle',
        label: 'Daily Routine Optimization',
        description: 'Guidance on meal timing, hydration habits, and daily food pattern improvements.'
      },
      {
        icon: 'user',
        label: 'Regular Follow-up',
        description: 'Consistent check-ins to review progress and refine your guidance over time.'
      },
      {
        icon: 'message',
        label: 'WhatsApp Support',
        description: 'Ongoing support for food questions and habit accountability between sessions.'
      }
    ],
    showOnlineDelivery: false,
    faqs: [
      {
        question: 'Is personalized diet guidance the same as a medical diet prescription?',
        answer:
          'No. Personalized diet guidance is lifestyle and wellness coaching. It is not a clinical dietary prescription or medical treatment. If you have a specific medical condition, please consult a physician or registered dietitian first.'
      },
      {
        question: 'Will I get a specific meal chart?',
        answer:
          'The approach focuses on practical food habit guidance and building sustainable eating patterns rather than rigid meal charts. This helps build habits that last beyond a fixed timeframe.'
      },
      {
        question: 'How is personalized diet guidance different from general nutrition coaching?',
        answer:
          'Personalized diet guidance goes deeper into your individual food preferences, daily schedule, cultural context, and specific goals — ensuring the guidance is practical and directly applicable to your actual life.'
      },
      {
        question: 'How many consultations are included?',
        answer:
          'Consultation frequency is discussed during the initial free session based on your goals and progress. Regular follow-up is a core part of the program.'
      },
      {
        question: 'Can this help if I have food preferences or restrictions?',
        answer:
          'Yes. All guidance is adapted to your dietary preferences — vegetarian, non-vegetarian, or any specific food choices you follow.'
      }
    ],
    relatedPrograms: [
      { title: 'Online Nutrition Coaching', href: '/online-nutrition-coaching', description: 'Broader nutrition habit guidance and food coaching support.' },
      { title: 'Weight Loss Coaching', href: '/weight-loss-coaching', description: 'Structured weight management combining diet and fitness guidance.' },
      { title: 'Weight Management Program', href: '/weight-management-program', description: 'Long-term weight management through consistent nutrition and fitness.' },
      { title: 'Lifestyle & Wellness Coaching', href: '/lifestyle-wellness-coaching', description: 'Holistic lifestyle improvement across nutrition, fitness, and daily habits.' }
    ],
    metaDescription:
      'Personalized diet guidance from Coach Halima Sadiya. Tailored food habit coaching based on your lifestyle, goals, and preferences — with regular follow-up. Book free consultation.',
    canonicalPath: '/personalized-diet-guidance',
    ctaTitle: 'Get Diet Guidance Built Around Your Life',
    ctaSubtitle:
      'Book a free initial consultation with Coach Halima Sadiya to discuss your goals and receive diet guidance designed specifically for your routine and preferences.',
    heroImageAlt: 'Personalized diet and nutrition guidance coaching session online'
  },

  // ================================================================
  // 6. 21 Days Weight Loss Challenge
  // ================================================================
  {
    slug: '21-days-weight-loss-challenge',
    title: '21 Days Weight Loss Challenge',
    h1: '21 Days Weight Loss Challenge',
    eyebrow: 'Focused • Structured • Community-Supported',
    heroSubtitle:
      'A structured 21-day program focused on building healthy nutrition habits, consistent fitness routines, and the mindset for sustained progress.',
    introHeading: 'What Is the 21 Days Weight Loss Challenge?',
    introParagraphs: [
      'The 21 Days Weight Loss Challenge is a structured, time-bound program designed to help participants establish healthy habits through consistent nutrition guidance, daily fitness activity, and regular follow-up over three weeks.',
      'Research suggests it takes around 21 days to begin forming a new habit. This challenge uses that principle to give participants a focused window to kick-start their health journey, build momentum, and develop routines they can maintain beyond the three weeks.',
      'The challenge is not a crash program. There are no promises of specific weight loss figures or guaranteed transformations. The goal is to build a practical foundation of healthy nutrition and fitness habits with the support of group motivation and coaching.'
    ],
    audienceHeading: 'Who Is This Challenge For?',
    audience: [
      {
        label: 'Beginners Seeking a Starting Point',
        description: 'Looking for a focused, structured entry point into a healthier lifestyle.'
      },
      {
        label: 'People Who Prefer Group Motivation',
        description: 'Those who find group support and shared accountability helpful for staying consistent.'
      },
      {
        label: 'Anyone Wanting a Reset',
        description: 'After a period of inactivity or poor habits, wanting a fresh and structured new beginning.'
      },
      {
        label: 'Those with a Short-Term Focus',
        description: 'Wanting a concrete 21-day commitment rather than an open-ended program.'
      }
    ],
    included: [
      {
        icon: 'fitness',
        label: 'Daily Fitness Guidance',
        description: 'Structured daily exercise support throughout the 21-day period.'
      },
      {
        icon: 'nutrition',
        label: 'Nutrition Guidance',
        description: 'Daily nutrition and food habit guidance to support healthy choices.'
      },
      {
        icon: 'heart',
        label: 'Healthy Habit Building',
        description: 'Focus on developing daily routines and habits that extend beyond the challenge.'
      },
      {
        icon: 'user',
        label: 'Progress Follow-up',
        description: 'Regular coaching check-ins to monitor progress and provide support.'
      },
      {
        icon: 'message',
        label: 'Group Support',
        description: 'Community motivation from group participants committed to the same goals.'
      }
    ],
    showOnlineDelivery: true,
    faqs: [
      {
        question: 'Will I lose weight in 21 days?',
        answer:
          'The 21-day challenge focuses on building healthy habits and consistency, not promising specific weight loss outcomes. Results vary based on individual adherence, starting point, and lifestyle factors. The goal is to establish a foundation for ongoing progress.'
      },
      {
        question: 'What happens after the 21 days?',
        answer:
          'After the challenge, you can continue your journey through ongoing coaching programs. The 21-day period is designed to build the habits and momentum that make continuing easier and more effective.'
      },
      {
        question: 'Is the challenge conducted online?',
        answer:
          'Yes. The challenge is 100% online including live Zoom classes, nutrition guidance, and group support through online channels.'
      },
      {
        question: 'Do I need gym equipment?',
        answer:
          'No. The challenge is designed to be accessible at home without special equipment.'
      },
      {
        question: 'What are the class timings during the challenge?',
        answer:
          'Live online sessions are available in the morning (6:00–7:00 AM, 7:00–8:00 AM) and evening (6:00–7:00 PM, 7:00–8:00 PM) slots, 6 days a week.'
      },
      {
        question: 'How do I register for the challenge?',
        answer:
          'Book a free initial consultation to discuss the challenge start date, schedule, and what to expect. Coach Halima will guide you through the enrollment process.'
      }
    ],
    relatedPrograms: [
      { title: 'Weight Loss Coaching', href: '/weight-loss-coaching', description: 'Structured weight management support beyond the 21-day challenge.' },
      { title: 'Online Diet & Fitness Classes', href: '/online-diet-fitness-classes', description: 'Ongoing live Zoom fitness and diet classes, 6 days a week.' },
      { title: 'Personalized Diet Guidance', href: '/personalized-diet-guidance', description: 'Continue your journey with tailored, personalized nutrition guidance.' },
      { title: 'Online Fitness Coaching', href: '/online-fitness-coaching', description: 'Keep the fitness momentum going with ongoing online fitness coaching.' }
    ],
    metaDescription:
      '21 Days Weight Loss Challenge with Coach Halima Sadiya. Structured nutrition guidance, daily fitness support, and habit-building over 21 focused days. Book a free consultation.',
    canonicalPath: '/21-days-weight-loss-challenge',
    ctaTitle: 'Ready to Take on the 21-Day Challenge?',
    ctaSubtitle:
      'Book a free consultation with Coach Halima Sadiya to learn about the next challenge start date and what to expect from the 21-day program.',
    heroImageAlt: '21 days weight loss challenge healthy routine and fitness'
  },

  // ================================================================
  // 7. Lifestyle & Wellness Coaching
  // ================================================================
  {
    slug: 'lifestyle-wellness-coaching',
    title: 'Lifestyle & Wellness Coaching',
    h1: 'Lifestyle & Wellness Coaching',
    eyebrow: 'Holistic • Sustainable • Personalized',
    heroSubtitle:
      'Holistic coaching to improve your daily routines, fitness consistency, nutrition habits, and overall wellbeing — with ongoing support and regular follow-up.',
    introHeading: 'What Is Lifestyle & Wellness Coaching?',
    introParagraphs: [
      'Lifestyle and wellness coaching takes a broad view of your health — looking beyond just diet or exercise to consider your daily routines, stress levels, sleep patterns, energy management, and overall quality of life. The goal is to make sustainable improvements across all these areas.',
      'Coach Halima Sadiya works with individuals to identify where lifestyle adjustments can have the greatest impact, then creates a personalized approach to build healthier daily habits step by step. This includes nutrition guidance, fitness support, goal setting, and regular follow-up.',
      'This is not a medical wellness program. It is practical coaching focused on helping you live more healthily and consistently through better habits and routines.'
    ],
    audienceHeading: 'Who Is This Program For?',
    audience: [
      {
        label: 'People Feeling Stuck or Unmotivated',
        description: 'Knowing they want to be healthier but unsure where to start or how to maintain consistency.'
      },
      {
        label: 'Those with Hectic Lifestyles',
        description: 'Professionals, parents, or anyone with demanding schedules who want practical wellness support.'
      },
      {
        label: 'Anyone Wanting a Holistic Approach',
        description: 'Not just diet or fitness in isolation, but a connected approach to overall daily wellbeing.'
      },
      {
        label: 'People at Any Fitness Level',
        description: 'Whether a complete beginner or someone returning to healthy habits after a break.'
      }
    ],
    included: [
      {
        icon: 'lifestyle',
        label: 'Healthy Routine Building',
        description: 'Guidance on creating consistent daily routines that support long-term wellness.'
      },
      {
        icon: 'nutrition',
        label: 'Nutrition Habit Coaching',
        description: 'Practical food and eating habit improvements aligned with your lifestyle.'
      },
      {
        icon: 'fitness',
        label: 'Fitness Consistency Support',
        description: 'Guidance on building and maintaining a regular physical activity routine.'
      },
      {
        icon: 'sparkles',
        label: 'Goal Setting & Planning',
        description: 'Collaborative goal-setting to keep your wellness journey focused and progressive.'
      },
      {
        icon: 'user',
        label: 'Regular Follow-up',
        description: 'Consistent accountability check-ins to track progress and sustain momentum.'
      }
    ],
    showOnlineDelivery: false,
    faqs: [
      {
        question: 'What is the difference between lifestyle coaching and a fitness program?',
        answer:
          'Fitness programs focus primarily on exercise. Lifestyle and wellness coaching takes a broader view including daily habits, nutrition, sleep, stress management, and overall routine — with fitness as one component.'
      },
      {
        question: 'Do I need to be very unhealthy to benefit from lifestyle coaching?',
        answer:
          'Not at all. Many clients are moderately active but want structured support to make their existing habits more consistent and effective. Lifestyle coaching is for anyone who wants to live more healthily, regardless of their starting point.'
      },
      {
        question: 'How long does lifestyle coaching take?',
        answer:
          'This varies by individual goal. Lifestyle change is a long-term process. Coaching duration is discussed during the free initial consultation based on your specific goals and circumstances.'
      },
      {
        question: 'Is this program suitable for beginners?',
        answer:
          'Absolutely. Lifestyle and wellness coaching is accessible to any fitness or health level. The approach is personalized to your current situation.'
      },
      {
        question: 'Can I combine this with other programs?',
        answer:
          'Yes. Lifestyle coaching complements weight loss, nutrition, and fitness coaching programs well. During the consultation, Coach Halima can help identify the best combination of support for your goals.'
      }
    ],
    relatedPrograms: [
      { title: 'Online Fitness Coaching', href: '/online-fitness-coaching', description: 'Structured home-friendly fitness guidance to complement wellness coaching.' },
      { title: 'Online Nutrition Coaching', href: '/online-nutrition-coaching', description: 'Practical food habit improvements as part of a holistic lifestyle approach.' },
      { title: 'Weight Management Program', href: '/weight-management-program', description: 'Long-term weight management through consistent lifestyle and nutrition habits.' },
      { title: 'Personal Health Coaching', href: '/personal-health-coaching', description: 'One-to-one coaching across all areas of health, fitness, and wellness.' }
    ],
    metaDescription:
      'Lifestyle & Wellness Coaching with Coach Halima Sadiya. Holistic coaching for better daily routines, nutrition habits, fitness consistency, and overall wellbeing.',
    canonicalPath: '/lifestyle-wellness-coaching',
    ctaTitle: 'Ready to Build a Healthier Daily Lifestyle?',
    ctaSubtitle:
      'Book a free initial consultation with Coach Halima Sadiya to explore how lifestyle and wellness coaching can support your personal health goals.',
    heroImageAlt: 'Healthy lifestyle wellness coaching with balanced routine and nutrition'
  },

  // ================================================================
  // 8. Online Diet & Fitness Classes
  // ================================================================
  {
    slug: 'online-diet-fitness-classes',
    title: 'Online Diet & Fitness Classes',
    h1: 'Online Diet & Fitness Classes',
    eyebrow: 'Live • Zoom • 6 Days a Week',
    heroSubtitle:
      'Join live online group fitness classes via Zoom — 6 days a week, with morning and evening batches. Structured 60-minute sessions combining fitness guidance and diet support.',
    introHeading: 'What Are the Online Diet & Fitness Classes?',
    introParagraphs: [
      'The online diet and fitness classes are live, structured group sessions conducted via Zoom, 6 days a week. Each 60-minute class is led by Coach Halima Sadiya and combines fitness activity with diet and nutrition awareness, making them suitable for beginners and those with some fitness experience.',
      'Classes run in small batches of 20–25 participants, creating a supportive group environment while allowing Coach Halima to provide real-time guidance and feedback during the session.',
      'All classes are conducted online, making them accessible from home without any gym equipment. A trial class is available on request for those who wish to experience the format before joining a regular batch.'
    ],
    audienceHeading: 'Who Are These Classes For?',
    audience: [
      {
        label: 'Home-Based Fitness Seekers',
        description: 'Wanting structured daily fitness guidance without the need for a gym membership.'
      },
      {
        label: 'Those Preferring Group Motivation',
        description: 'Finding shared accountability and group energy helpful for staying consistent.'
      },
      {
        label: 'People with Flexible Schedules',
        description: 'Needing morning or evening class options that fit around work or family commitments.'
      },
      {
        label: 'Beginners to Online Fitness',
        description: 'New to online classes and wanting a welcoming, guided introduction to live virtual fitness.'
      }
    ],
    included: [
      {
        icon: 'fitness',
        label: 'Live 60-Minute Classes',
        description: '60-minute structured sessions combining fitness activity and diet awareness.'
      },
      {
        icon: 'clock',
        label: 'Morning & Evening Batches',
        description: 'Choose from 6:00–7:00 AM, 7:00–8:00 AM, 6:00–7:00 PM, or 7:00–8:00 PM slots.'
      },
      {
        icon: 'user',
        label: 'Small Group Batches',
        description: 'Limited to 20–25 participants per batch for a focused, supportive experience.'
      },
      {
        icon: 'nutrition',
        label: 'Diet Guidance Integration',
        description: 'Nutrition and diet awareness incorporated alongside fitness guidance in sessions.'
      },
      {
        icon: 'book-open',
        label: 'Recordings (If Required)',
        description: 'Session recordings provided if requested or required, when available.'
      }
    ],
    showOnlineDelivery: true,
    faqs: [
      {
        question: 'What platform are the classes on?',
        answer:
          'All live online classes are conducted via Zoom. Joining links are provided to enrolled participants before each session.'
      },
      {
        question: 'How many days a week are classes held?',
        answer: 'Live classes are conducted 6 days a week, providing consistent daily activity support.'
      },
      {
        question: 'What are the available class timings?',
        answer:
          'Morning batches: 6:00–7:00 AM and 7:00–8:00 AM. Evening batches: 6:00–7:00 PM and 7:00–8:00 PM. You choose the batch that fits your schedule.'
      },
      {
        question: 'How many people are in each class batch?',
        answer:
          'Each batch is capped at 20–25 participants to ensure a focused, supportive group environment and meaningful coach engagement.'
      },
      {
        question: 'Can I try a class before joining?',
        answer:
          'Yes. A trial class is available on request. Contact Coach Halima to arrange your trial session before committing to a regular batch.'
      },
      {
        question: 'Are recordings available if I miss a session?',
        answer:
          'Recordings are provided if requested or required, when available. Live attendance is encouraged for the best experience.'
      },
      {
        question: 'Do I need any equipment for the classes?',
        answer:
          'No special equipment is required. Classes are designed to be accessible at home with just comfortable workout clothing and enough space to move.'
      }
    ],
    relatedPrograms: [
      { title: 'Online Fitness Coaching', href: '/online-fitness-coaching', description: 'Personalized one-to-one fitness coaching to complement class participation.' },
      { title: '21 Days Weight Loss Challenge', href: '/21-days-weight-loss-challenge', description: 'A focused 21-day program combining classes with structured habit-building.' },
      { title: 'Weight Loss Coaching', href: '/weight-loss-coaching', description: 'Combine class attendance with structured weight loss coaching.' },
      { title: 'Weight Management Program', href: '/weight-management-program', description: 'Long-term coaching combining classes with ongoing nutrition support.' }
    ],
    metaDescription:
      'Online diet and fitness classes via Zoom, 6 days a week. Morning and evening batches, 60-minute live sessions with Coach Halima Sadiya. Trial class available on request.',
    canonicalPath: '/online-diet-fitness-classes',
    ctaTitle: 'Join Live Online Classes Today',
    ctaSubtitle:
      'Book a free consultation to discuss class schedules, batch availability, and how the live online sessions fit your fitness goals.',
    heroImageAlt: 'Live online fitness class on Zoom with group participants'
  },

  // ================================================================
  // 9. Weight Management Program
  // ================================================================
  {
    slug: 'weight-management-program',
    title: 'Weight Management Program',
    h1: 'Weight Management Program',
    eyebrow: 'Long-Term • Sustainable • Personalized',
    heroSubtitle:
      'A long-term, personalized weight management coaching program combining nutrition guidance, fitness support, and consistent follow-up to help you maintain a healthy weight over time.',
    introHeading: 'What Is the Weight Management Program?',
    introParagraphs: [
      'Weight management is not just about losing or gaining weight — it is about finding and maintaining a healthy weight range for your body through consistent, sustainable lifestyle habits. The weight management program provides ongoing coaching support to help you achieve and maintain your healthy weight goal.',
      'Coach Halima Sadiya works with clients to identify their current lifestyle patterns, nutrition habits, and fitness level, then creates a personalized approach combining nutrition guidance, fitness support, and regular accountability to help them reach and sustain their goals.',
      'This program is designed for the long term. There are no crash diets or extreme exercise plans. The focus is on building lasting habits that make healthy weight maintenance a natural part of your daily life.'
    ],
    audienceHeading: 'Who Is This Program For?',
    audience: [
      {
        label: 'Those Who Regain Weight After Dieting',
        description: 'Having lost weight before but struggled to maintain it without ongoing support and habit development.'
      },
      {
        label: 'People at a Healthy Weight Wanting to Stay There',
        description: 'Seeking structured coaching to maintain current weight through good habits and regular monitoring.'
      },
      {
        label: 'Anyone with a Long-Term Health Focus',
        description: 'Prioritizing sustainable progress over quick results, understanding that real change takes time.'
      },
      {
        label: 'Those with Fluctuating Weight',
        description: 'Experiencing cycles of weight change and wanting a more stable, consistent approach.'
      }
    ],
    included: [
      {
        icon: 'nutrition',
        label: 'Nutrition Support',
        description: 'Personalized nutrition guidance to support your healthy weight range.'
      },
      {
        icon: 'fitness',
        label: 'Fitness Guidance',
        description: 'Regular exercise and activity guidance to support weight management goals.'
      },
      {
        icon: 'lifestyle',
        label: 'Lifestyle Habit Building',
        description: 'Daily routine improvements and lifestyle changes for long-term weight stability.'
      },
      {
        icon: 'user',
        label: 'Progress Monitoring',
        description: 'Regular follow-up sessions to track progress and make adjustments over time.'
      },
      {
        icon: 'message',
        label: 'WhatsApp Support',
        description: 'Ongoing accessible support for questions and accountability between sessions.'
      }
    ],
    showOnlineDelivery: false,
    faqs: [
      {
        question: 'How is weight management coaching different from weight loss coaching?',
        answer:
          'Weight loss coaching focuses primarily on the process of reducing weight, while weight management coaching addresses both achieving and maintaining a healthy weight range over the long term. It is particularly suited to those who have reached their goal or who want a long-term stability approach.'
      },
      {
        question: 'Will I need to follow a specific diet?',
        answer:
          'The program focuses on building practical, sustainable nutrition habits rather than following a rigid diet plan. The approach adapts to your food preferences and daily lifestyle.'
      },
      {
        question: 'How long does the weight management program last?',
        answer:
          'Weight management is a long-term process. Duration is discussed during the initial consultation based on your goals and circumstances. Ongoing support is available as needed.'
      },
      {
        question: 'Is this a medical program?',
        answer:
          'No. This is lifestyle and wellness coaching, not medical treatment. If you have a medical condition affecting your weight, please consult a physician before starting any coaching program.'
      },
      {
        question: 'Can the program be combined with the live online classes?',
        answer:
          'Yes. The live online group fitness classes (6 days/week) complement the weight management program well for those who want structured daily activity alongside their coaching.'
      }
    ],
    relatedPrograms: [
      { title: 'Weight Loss Coaching', href: '/weight-loss-coaching', description: 'Structured support for the active weight loss phase of your journey.' },
      { title: 'Online Nutrition Coaching', href: '/online-nutrition-coaching', description: 'Nutrition habit coaching to support healthy weight maintenance.' },
      { title: 'Lifestyle & Wellness Coaching', href: '/lifestyle-wellness-coaching', description: 'Holistic wellness and lifestyle coaching for long-term health.' },
      { title: 'Personal Health Coaching', href: '/personal-health-coaching', description: 'Comprehensive one-to-one coaching covering all areas of health and wellness.' }
    ],
    metaDescription:
      'Weight Management Program with Coach Halima Sadiya. Long-term personalized coaching combining nutrition guidance, fitness support, and regular follow-up for sustainable weight management.',
    canonicalPath: '/weight-management-program',
    ctaTitle: 'Maintain Your Health for the Long Term',
    ctaSubtitle:
      'Book a free initial consultation to discuss your weight management goals and explore a sustainable, personalized coaching approach.',
    heroImageAlt: 'Healthy weight management through consistent nutrition and fitness habits'
  },

  // ================================================================
  // 10. Personal Health Coaching
  // ================================================================
  {
    slug: 'personal-health-coaching',
    title: 'Personal Health Coaching',
    h1: 'Personal Health Coaching',
    eyebrow: 'One-to-One • Holistic • Online',
    heroSubtitle:
      'Comprehensive one-to-one online health coaching covering fitness, nutrition, wellness planning, and lifestyle guidance — tailored entirely to your individual goals.',
    introHeading: 'What Is Personal Health Coaching?',
    introParagraphs: [
      'Personal health coaching is a one-to-one coaching relationship focused on helping you achieve your individual health and wellness goals. Unlike group programs or generic plans, personal coaching is entirely tailored to you — your goals, schedule, preferences, challenges, and lifestyle.',
      'Coach Halima Sadiya provides comprehensive support across fitness guidance, nutrition coaching, wellness planning, and lifestyle improvement. Sessions are conducted online, making them accessible wherever you are.',
      'This is general fitness, wellness, and lifestyle coaching — not medical diagnosis or treatment. It is for individuals who want dedicated, personalized support to take meaningful control of their health and daily wellbeing.'
    ],
    audienceHeading: 'Who Is This Program For?',
    audience: [
      {
        label: 'Those Wanting Dedicated 1-on-1 Attention',
        description: 'Preferring personalized coaching entirely focused on their individual situation and goals.'
      },
      {
        label: 'People with Complex or Multiple Goals',
        description: 'With several interconnected health goals — weight, fitness, nutrition, energy, wellbeing — wanting a connected approach.'
      },
      {
        label: 'Anyone Who Has Tried Group Programs Unsuccessfully',
        description: 'Finding that individual attention and personalized guidance works better for their progress.'
      },
      {
        label: 'Those Seeking Accountability and Structure',
        description: 'Wanting a committed coaching relationship with regular follow-up, goal reviews, and adaptive planning.'
      }
    ],
    included: [
      {
        icon: 'user',
        label: 'One-to-One Virtual Sessions',
        description: 'Dedicated individual coaching sessions focused entirely on your goals and progress.'
      },
      {
        icon: 'sparkles',
        label: 'Wellness Planning',
        description: 'Personalized wellness goals and structured planning to guide your health journey.'
      },
      {
        icon: 'nutrition',
        label: 'Nutrition Support',
        description: 'Individual nutrition guidance tailored to your dietary preferences and health goals.'
      },
      {
        icon: 'fitness',
        label: 'Fitness Guidance',
        description: 'Personalized fitness and activity guidance suited to your level and schedule.'
      },
      {
        icon: 'lifestyle',
        label: 'Lifestyle & Habit Improvement',
        description: 'Guidance on daily routines, sleep, stress, and lifestyle habits for overall wellbeing.'
      },
      {
        icon: 'message',
        label: 'Priority WhatsApp Support',
        description: 'Ongoing accessible support for questions, accountability, and quick guidance.'
      }
    ],
    showOnlineDelivery: false,
    faqs: [
      {
        question: 'What is personal health coaching?',
        answer:
          'Personal health coaching is a one-to-one online coaching relationship where Coach Halima Sadiya provides individualized guidance across fitness, nutrition, lifestyle, and wellness based on your specific goals and circumstances.'
      },
      {
        question: 'Is personal health coaching the same as seeing a doctor?',
        answer:
          'No. Personal health coaching is general wellness, fitness, and lifestyle coaching. It is not medical diagnosis, treatment, or clinical therapy. If you have specific medical concerns, please consult a qualified medical professional.'
      },
      {
        question: 'What makes personal coaching different from group programs?',
        answer:
          'Personal coaching provides 100% individualized attention. Every session, every guidance, and every plan is designed specifically for you — not adapted from a generic group approach.'
      },
      {
        question: 'How often are personal coaching sessions?',
        answer:
          'Session frequency is agreed during the initial consultation based on your goals and availability. Consistent regular sessions and follow-up are fundamental to the personal coaching process.'
      },
      {
        question: 'Can I combine personal coaching with the live group classes?',
        answer:
          'Yes. Personal coaching and the live online group classes complement each other well, providing both individual attention and group motivation.'
      },
      {
        question: 'What topics can personal health coaching cover?',
        answer:
          'Coaching can cover fitness, nutrition, weight management, lifestyle habits, wellness routines, goal setting, and daily habit building — all connected into a holistic, personalized approach.'
      }
    ],
    relatedPrograms: [
      { title: 'Lifestyle & Wellness Coaching', href: '/lifestyle-wellness-coaching', description: 'Holistic wellness coaching for better daily habits and routine.' },
      { title: 'Weight Management Program', href: '/weight-management-program', description: 'Long-term weight management through consistent nutrition and fitness.' },
      { title: 'Online Nutrition Coaching', href: '/online-nutrition-coaching', description: 'Personalized nutrition guidance as part of your health coaching journey.' },
      { title: 'Online Fitness Coaching', href: '/online-fitness-coaching', description: 'Dedicated fitness guidance to complement your personal health coaching.' }
    ],
    metaDescription:
      'Personal Health Coaching with Coach Halima Sadiya. One-to-one online coaching covering fitness, nutrition, wellness planning, and lifestyle guidance. Book a free consultation.',
    canonicalPath: '/personal-health-coaching',
    ctaTitle: 'Start Your Personal Health Coaching Journey',
    ctaSubtitle:
      'Book a free initial consultation with Coach Halima Sadiya to discuss your goals and explore a personalized one-to-one coaching plan.',
    heroImageAlt: 'Personal one-to-one health coaching session online with coach'
  }
];

export function getProgramBySlug(slug: string): ProgramPageData | undefined {
  return PROGRAM_PAGES.find((p) => p.slug === slug);
}
