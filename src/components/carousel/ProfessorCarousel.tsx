
import React from 'react';
import { ThreeDCarousel } from './ThreeDCarousel';
import { CarouselPanel } from './CarouselPanel';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clipboard, Sparkles, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <div className="mb-4 text-center">
              <Clipboard className="mx-auto text-neon-purple" size={32} />
            </div>
            
            <div className="relative h-24 mb-4 rounded bg-charcoal-dark overflow-hidden p-2">
              <div className="flex justify-between mb-2">
                <div className="w-3/4 h-2 bg-charcoal-light rounded-full"></div>
                <div className="w-1/5 h-2 bg-charcoal-light rounded-full"></div>
              </div>
              
              <div className="flex space-x-2">
                <div className="w-1/3 h-12 bg-charcoal-light/30 rounded"></div>
                <div className="w-2/3">
                  <div className="h-2 w-full bg-charcoal-light rounded-full mb-2"></div>
                  <div className="h-2 w-4/5 bg-charcoal-light rounded-full mb-2"></div>
                  <div className="h-2 w-3/5 bg-charcoal-light rounded-full"></div>
                </div>
              </div>
              
              <motion.div
                className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-neon-purple flex items-center justify-center text-xs text-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
              >
                +
              </motion.div>
            </div>
            
            <p className="text-gray-300 mb-4">
              Upload your slides and let AI generate complementary study resources.
            </p>
          </div>
          
          <div className="mt-auto">
            <div className="text-xs text-neon-purple">Step 1/3</div>
          </div>
        </div>
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
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <div className="mb-4 text-center">
              <Sparkles className="mx-auto text-neon-purple" size={32} />
            </div>
            
            <div className="relative h-40 mb-4 rounded bg-charcoal-dark/60 overflow-hidden p-2">
              <div className="absolute top-0 left-0 w-full p-1 flex justify-between items-center text-xs bg-charcoal-dark/80">
                <span className="text-neon-purple">Slide Deck</span>
                <span className="text-white bg-neon-purple/20 rounded px-1">AI Enhanced</span>
              </div>
              
              <div className="pt-6 grid grid-cols-2 gap-1">
                <motion.div
                  className="h-12 bg-charcoal rounded p-1"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-full h-1 bg-neon-purple mb-1 rounded"></div>
                  <div className="w-4/5 h-1 bg-charcoal-light rounded"></div>
                </motion.div>
                
                <motion.div
                  className="h-12 bg-charcoal rounded p-1"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-full h-1 bg-neon-purple mb-1 rounded"></div>
                  <div className="w-3/5 h-1 bg-charcoal-light rounded"></div>
                </motion.div>
                
                <motion.div
                  className="h-12 bg-charcoal rounded p-1"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="w-full h-1 bg-neon-purple mb-1 rounded"></div>
                  <div className="w-4/5 h-1 bg-charcoal-light rounded"></div>
                </motion.div>
                
                <motion.div
                  className="h-12 bg-charcoal rounded p-1 relative"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="w-full h-1 bg-neon-purple mb-1 rounded"></div>
                  <div className="w-3/5 h-1 bg-charcoal-light rounded"></div>
                  <motion.div
                    className="absolute -right-1 -bottom-1 w-4 h-4 rounded-full bg-neon-purple flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    <span className="text-xs text-white">+</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">
              AI adds interactive examples and simplified explanations to your materials.
            </p>
          </div>
          
          <div className="mt-auto">
            <div className="text-xs text-neon-purple">Step 2/3</div>
          </div>
        </div>
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
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <div className="mb-4 text-center">
              <BarChart className="mx-auto text-neon-purple" size={32} />
            </div>
            
            <div className="relative h-28 mb-4 rounded bg-charcoal-dark overflow-hidden p-2">
              <div className="w-full h-full flex items-end justify-around">
                <motion.div 
                  className="w-1/6 bg-neon-blue rounded-t" 
                  initial={{ height: 0 }}
                  animate={{ height: "40%" }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
                <motion.div 
                  className="w-1/6 bg-neon-purple rounded-t" 
                  initial={{ height: 0 }}
                  animate={{ height: "65%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                <motion.div 
                  className="w-1/6 bg-neon-blue rounded-t" 
                  initial={{ height: 0 }}
                  animate={{ height: "55%" }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                />
                <motion.div 
                  className="w-1/6 bg-neon-purple rounded-t" 
                  initial={{ height: 0 }}
                  animate={{ height: "85%" }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                />
                <motion.div 
                  className="w-1/6 bg-neon-blue rounded-t" 
                  initial={{ height: 0 }}
                  animate={{ height: "70%" }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                />
              </div>
              
              <motion.div
                className="absolute top-2 left-2 text-xs text-white bg-charcoal-dark/60 px-2 py-1 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Comprehension +45%
              </motion.div>
            </div>
            
            <p className="text-gray-300 mb-4">
              Monitor student understanding and tailor your teaching approach.
            </p>
          </div>
          
          <div className="mt-auto w-full">
            <Link to="/about">
              <Button 
                className="bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-charcoal w-full rounded-full"
              >
                Teach with Ease
              </Button>
            </Link>
          </div>
        </div>
      </CarouselPanel>
    </ThreeDCarousel>
  );
};
