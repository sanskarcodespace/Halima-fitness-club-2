import React from 'react';
import { ServicePageTemplate } from '../../components/shared/ServicePageTemplate/ServicePageTemplate';
import { PROGRAM_PAGES } from '../../data/programPages';

const PAGE_DATA = PROGRAM_PAGES.find((p) => p.slug === 'weight-gain-coaching')!;

const WeightGainCoachingPage: React.FC = () => <ServicePageTemplate data={PAGE_DATA} />;
export default WeightGainCoachingPage;
