import React from 'react';
import { ProgramFinderSection } from '../components/sections/ProgramFinderSection/ProgramFinderSection';
import { DetailedProgramsSection } from '../components/sections/DetailedProgramsSection/DetailedProgramsSection';
import { OnlineClassesSection } from '../components/sections/OnlineClassesSection/OnlineClassesSection';
import { ClassScheduleSection } from '../components/sections/ClassScheduleSection/ClassScheduleSection';
import { ChallengeSection } from '../components/sections/ChallengeSection/ChallengeSection';
import { WellnessToolsSection } from '../components/sections/WellnessToolsSection/WellnessToolsSection';

export const ProgramsPage: React.FC = () => {
  return (
    <>
      {/* 1. Interactive Program Finder */}
      <ProgramFinderSection />

      {/* 2. Detailed Program Breakdown */}
      <DetailedProgramsSection />

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
