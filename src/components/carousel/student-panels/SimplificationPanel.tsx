
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export const SimplificationPanel = () => {
  return (
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
        {/* Step indicator removed */}
      </div>
    </div>
  );
};
