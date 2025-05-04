
import React from 'react';
import { ThreeDCarousel } from './ThreeDCarousel';
import { CarouselPanel } from './CarouselPanel';
import { CreationPanel } from './professor-panels/CreationPanel';
import { EnhancedMaterialsPanel } from './professor-panels/EnhancedMaterialsPanel';
import { TrackSuccessPanel } from './professor-panels/TrackSuccessPanel';

export const ProfessorCarousel = () => {
  return (
    <ThreeDCarousel
      title="Amplify Your Teaching"
      subtitle="Save time with auto-generated study resources and seamless slide tracking via our plugin."
      color="purple"
    >
      <CarouselPanel
        title="Streamlined Creation"
        isActive={false}
        index={0}
        totalPanels={3}
        onClick={() => {}}
        color="purple"
        delay={0}
      >
        <CreationPanel />
      </CarouselPanel>
      
      <CarouselPanel
        title="AI-Enhanced Materials"
        isActive={false}
        index={1}
        totalPanels={3}
        onClick={() => {}}
        color="purple"
        delay={0}
      >
        <EnhancedMaterialsPanel />
      </CarouselPanel>
      
      <CarouselPanel
        title="Track Student Success"
        isActive={false}
        index={2}
        totalPanels={3}
        onClick={() => {}}
        color="purple"
        delay={0}
      >
        <TrackSuccessPanel />
      </CarouselPanel>
    </ThreeDCarousel>
  );
};
