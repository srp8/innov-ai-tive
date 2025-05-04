
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export const RecordPanel = () => {
  return (
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
        {/* Step indicator removed */}
      </div>
    </div>
  );
};
