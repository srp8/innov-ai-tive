
import React from 'react';
import { ThreeDCarousel } from './ThreeDCarousel';
import { CarouselPanel } from './CarouselPanel';
import { RecordPanel } from './student-panels/RecordPanel';
import { SimplificationPanel } from './student-panels/SimplificationPanel';
import { StudiesPanel } from './student-panels/StudiesPanel';

export const StudentCarousel = () => {
  return (
    <ThreeDCarousel
      title="Master Any Lecture"
      subtitle="Get fifth-grader-level explanations and real-time slide alignment to ace your studies."
      color="blue"
    >
      <CarouselPanel
        title="Record & Transcribe"
        isActive={false}
        index={0}
        totalPanels={3}
        onClick={() => {}}
        color="blue"
        delay={0}
      >
        <RecordPanel />
      </CarouselPanel>
      
      <CarouselPanel
        title="AI-Powered Simplification"
        isActive={false}
        index={1}
        totalPanels={3}
        onClick={() => {}}
        color="blue"
        delay={0}
      >
        <SimplificationPanel />
      </CarouselPanel>
      
      <CarouselPanel
        title="Ace Your Studies"
        isActive={false}
        index={2}
        totalPanels={3}
        onClick={() => {}}
        color="blue"
        delay={0}
      >
        <StudiesPanel />
      </CarouselPanel>
    </ThreeDCarousel>
  );
};
