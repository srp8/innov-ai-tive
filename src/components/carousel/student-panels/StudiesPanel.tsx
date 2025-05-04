
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const StudiesPanel = () => {
  return (
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
  );
};
