import { Hero } from "../components/Hero";
import { RecentWork } from "../components/RecentWork";
import { motion } from "motion/react";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <RecentWork />
    </motion.div>
  );
};