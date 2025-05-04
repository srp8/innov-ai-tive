
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const TrackSuccessPanel = () => {
  return (
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
  );
};
