
import React from 'react';
import { ThreeDCarousel } from './ThreeDCarousel';
import { CarouselPanel } from './CarouselPanel';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Lightbulb, BookOpen, Compass } from 'lucide-react';

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
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <div className="mb-4 text-center">
              <Lightbulb className="mx-auto text-neon-blue" size={32} />
            </div>
            
            <div className="relative h-24 mb-4 rounded bg-charcoal-dark overflow-hidden">
              {/* Audio waveform visualization */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full flex items-end justify-around h-full px-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-neon-blue rounded-t"
                    animate={{ 
                      height: `${Math.random() * 100}%`,
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.05
                    }}
                  />
                ))}
              </motion.div>
              
              <motion.div
                className="absolute bottom-2 left-2 right-2 h-6 bg-charcoal-light/40 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "90%" }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
            
            <p className="text-gray-300 mb-4">
              Record lectures and get instant transcriptions synchronized with slides.
            </p>
          </div>
          
          <div className="mt-auto">
            <div className="text-xs text-neon-blue">Step 1/3</div>
          </div>
        </div>
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
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <div className="mb-4 text-center">
              <BookOpen className="mx-auto text-neon-blue" size={32} />
            </div>
            
            <div className="relative h-40 mb-4 rounded bg-charcoal-dark/60 overflow-hidden p-2">
              <div className="mb-2 bg-charcoal-dark p-1 rounded text-xs text-gray-400">
                <div className="font-semibold text-neon-blue mb-1">Original Transcript:</div>
                <p>The quantum mechanical model acknowledges both the wave and particle nature of electrons...</p>
              </div>
              
              <motion.div
                className="bg-charcoal-dark p-1 rounded text-xs text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="font-semibold text-neon-blue mb-1">Simplified Explanation:</div>
                <p>Electrons act like both tiny balls (particles) and waves, just like light can...</p>
              </motion.div>
            </div>
            
            <p className="text-gray-300 mb-4">
              Complex topics transformed into crystal clear explanations you can understand.
            </p>
          </div>
          
          <div className="mt-auto">
            <div className="text-xs text-neon-blue">Step 2/3</div>
          </div>
        </div>
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
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <div className="mb-4 text-center">
              <Compass className="mx-auto text-neon-blue" size={32} />
            </div>
            
            <div className="relative h-28 mb-4 rounded bg-charcoal-dark overflow-hidden flex justify-center items-center">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 opacity-30"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <motion.div
                className="bg-charcoal-dark/80 rounded-lg p-2 transform w-4/5"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-3 mb-1 bg-neon-blue/30 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-neon-blue rounded-full" 
                    initial={{ width: "30%" }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </div>
                <div className="text-xs text-white text-center">Learning Progress: 90%</div>
              </motion.div>
            </div>
            
            <p className="text-gray-300 mb-4">
              Track your understanding and master subjects with confidence.
            </p>
          </div>
          
          <div className="mt-auto w-full">
            <Button 
              className="bg-neon-blue text-charcoal hover:bg-neon-purple w-full glow-on-hover rounded-full"
              onClick={() => console.log('Student signup')}
            >
              Study Smarter Now
            </Button>
          </div>
        </div>
      </CarouselPanel>
    </ThreeDCarousel>
  );
};
