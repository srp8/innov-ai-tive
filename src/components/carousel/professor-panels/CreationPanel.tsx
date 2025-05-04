
import React from 'react';
import { motion } from 'framer-motion';
import { Clipboard } from 'lucide-react';

export const CreationPanel = () => {
  return (
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
        {/* Step indicator removed */}
      </div>
    </div>
  );
};
