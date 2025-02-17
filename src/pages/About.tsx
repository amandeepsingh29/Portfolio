import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/About/SkillCard';
import ExperienceCard from '../components/About/ExperienceCard';

const skills = {
  programming: ['Python', 'C++', 'R', 'JavaScript'],
  machineLearning: ['TensorFlow', 'Keras', 'Scikit-learn', 'Deep Learning'],
  other: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Software Engineering']
};

const experiences = [
  {
    title: 'Machine Learning Research Intern',
    organization: 'Experiential Learning Centre, TIET',
    period: "June'24 – August'24",
    description: 'Developed an advanced path-planning solution using Reinforcement Learning, resulting in a 40% increase in route accuracy.'
  },
  {
    title: 'Machine Learning Mentor',
    organization: 'Google Developer Students Chapter',
    period: "August'24 – August'25",
    description: 'Led hackathons and workshops for 1,500+ students, fostering technical skills, innovation, and collaboration.'
  }
];

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-12 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          I'm Amandeep Singh, a Machine Learning Developer passionate about creating innovative solutions using cutting-edge technologies.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <SkillCard title="Programming Languages" skills={skills.programming} index={0} />
        <SkillCard title="Machine Learning" skills={skills.machineLearning} index={1} />
        <SkillCard title="Other Skills" skills={skills.other} index={2} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
        <div className="text-gray-300">
          <h3 className="text-xl font-semibold text-blue-400">Thapar Institute of Engineering and Technology</h3>
          <p className="text-lg">Bachelor of Engineering in Computer Science</p>
          <p className="text-gray-400">2022-26 • CGPA: 9.47</p>
        </div>
      </motion.div>
    </motion.div>
  );
}