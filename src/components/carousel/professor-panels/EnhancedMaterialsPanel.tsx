
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const EnhancedMaterialsPanel = () => {
  return (
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
        {/* Step indicator removed */}
      </div>
    </div>
  );
};
