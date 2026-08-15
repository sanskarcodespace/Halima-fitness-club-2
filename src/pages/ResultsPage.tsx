import React from 'react';
import { SuccessStoriesSection } from '../components/sections/SuccessStoriesSection/SuccessStoriesSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection/TestimonialsSection';
import { InstagramSection } from '../components/sections/InstagramSection/InstagramSection';
import { BlogSection } from '../components/sections/BlogSection/BlogSection';

export const ResultsPage: React.FC = () => {
  return (
    <>
      {/* 1. Before & After Transformations */}
      <SuccessStoriesSection />

      {/* 2. Client Testimonials (Full view) */}
      <TestimonialsSection />

      {/* 3. Instagram Social Feed */}
      <InstagramSection />

      {/* 4. Blog & Educational Tips */}
      <BlogSection />
    </>
  );
};

export default ResultsPage;
