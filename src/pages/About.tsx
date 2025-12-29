import { DesignProcess } from "../components/DesignProcess";
import { motion } from "motion/react";

export const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-12">
          I'm a product designer who loves to build things. Here is a look at my design process.
        </p>
      </div>
      <DesignProcess />
    </motion.div>
  );
};