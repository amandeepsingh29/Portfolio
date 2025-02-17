import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  index: number;
}

export default function ExperienceCard({ title, organization, period, description, index }: ExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-4 mb-8 border-l-2 border-blue-500"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-blue-400">{organization}</p>
      <p className="text-gray-400 text-sm mb-2">{period}</p>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}