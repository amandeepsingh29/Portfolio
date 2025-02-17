import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/Projects/ProjectCard';

const projects = [
  {
    title: 'AI-Powered Medical Diagnosis System',
    description: 'Deep learning system for early disease detection using medical imaging, achieving 97% accuracy.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
    tags: ['Python', 'TensorFlow', 'Medical AI', 'Computer Vision'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 0
  },
  {
    title: 'Quantum Computing Simulator',
    description: 'Built a quantum circuit simulator supporting up to 30 qubits with custom gate operations.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    tags: ['Python', 'Qiskit', 'Quantum Computing', 'Linear Algebra'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 1
  },
  {
    title: 'Autonomous Trading Platform',
    description: 'Developed an ML-powered trading system with real-time market analysis and automated execution.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    tags: ['Python', 'Machine Learning', 'Financial Analysis', 'APIs'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 2
  },
  {
    title: 'Smart City Traffic Management',
    description: 'IoT-based traffic optimization system using real-time data and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    tags: ['IoT', 'Python', 'Real-time Analytics', 'Edge Computing'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 3
  },
  {
    title: 'Advanced NLP Document Analyzer',
    description: 'Built a system for analyzing legal documents using transformer models and custom NLP pipelines.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
    tags: ['NLP', 'BERT', 'Python', 'Legal Tech'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 4
  },
  {
    title: 'Augmented Reality Education Platform',
    description: 'Created an AR platform for interactive learning experiences in STEM subjects.',
    image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd',
    tags: ['Unity', 'AR', 'C#', 'Education Tech'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 5
  },
  {
    title: 'Blockchain Supply Chain System',
    description: 'Implemented a blockchain-based supply chain tracking system with smart contracts.',
    image: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f',
    tags: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 6
  },
  {
    title: 'Computer Vision Security System',
    description: 'Developed an advanced security system using facial recognition and behavior analysis.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    tags: ['OpenCV', 'Python', 'Deep Learning', 'Security'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 7
  },
  {
    title: 'Sustainable Energy Management',
    description: 'Smart grid optimization system using ML for efficient energy distribution.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
    tags: ['Python', 'IoT', 'Energy Tech', 'Data Analysis'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 8
  },
  {
    title: 'Voice-Controlled Home Automation',
    description: 'Created a comprehensive home automation system with natural language processing.',
    image: 'https://images.unsplash.com/photo-1558002038-bb4237b50b11',
    tags: ['IoT', 'NLP', 'Embedded Systems', 'Python'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 9
  },
  {
    title: 'Robotic Process Automation Suite',
    description: 'Automated enterprise workflows using AI and custom RPA solutions.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    tags: ['RPA', 'Python', 'Process Automation', 'AI'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 10
  },
  {
    title: 'Advanced Game AI Engine',
    description: 'Developed a sophisticated game AI system using reinforcement learning.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f',
    tags: ['Unity', 'ML-Agents', 'C#', 'Game AI'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 11
  },
  {
    title: 'Predictive Maintenance System',
    description: 'IoT-based system for predicting equipment failures in manufacturing.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190',
    tags: ['IoT', 'Machine Learning', 'Industry 4.0', 'Python'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 12
  },
  {
    title: 'Natural Language Database Interface',
    description: 'Created an AI system that converts natural language to SQL queries.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    tags: ['NLP', 'SQL', 'Python', 'Database'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 13
  },
  {
    title: 'Drone Swarm Coordination System',
    description: 'Developed algorithms for coordinating multiple drones for complex tasks.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f',
    tags: ['Robotics', 'Python', 'Control Systems', 'Swarm AI'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 14
  }
];

export default function Projects() {
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
        <h1 className="text-5xl font-bold text-white mb-6">Projects</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Here are some of my featured projects that showcase my skills and experience.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </motion.div>
  );
}