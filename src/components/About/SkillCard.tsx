import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: string[];
  index: number;
}

export default function SkillCard({ title, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
            className="flex items-center text-gray-300"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}