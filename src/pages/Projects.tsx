import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/Projects/ProjectCard';

const projects = [
  {
    title: 'BrainWave',
    description: 'EEG signal acquisition and ML-based brainwave interpretation for real-time BCI interactions.',
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a',
    tags: ['Machine Learning', 'EEG', 'Brain-Computer Interface', 'Python'],
    demoUrl: 'https://github.com/amandeepsingh29/brain_wave',
    githubUrl: 'https://github.com/amandeepsingh29/brain_wave',
    index: 0
  },
  {
    title: 'SecureCodeAuditor',
    description: 'AI-driven security platform for scanning codebases and detecting vulnerabilities.',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de',
    tags: ['AI', 'Security', 'Code Analysis', 'Python'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/amandeepsingh29/sca_frontend',
    index: 1
  },
  {
    title: 'SegDerma',
    description: 'U-Net-based segmentation model for precise skin lesion detection using HAM10000 dataset.',
    image: 'https://images.unsplash.com/photo-1576671414121-aa2d0967b1ec',
    tags: ['U-Net', 'Medical AI', 'Image Segmentation', 'TensorFlow'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/amandeepsingh29/SegDerma',
    index: 2
  },
  {
    title: 'Malaria Detection',
    description: 'CNN-based model for classifying malaria-infected and healthy blood samples.',
    image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55',
    tags: ['CNN', 'Medical Imaging', 'Deep Learning', 'Healthcare'],
    demoUrl: 'https://pypi.org/project/autostruct-tool/',
    githubUrl: 'https://github.com/amandeepsingh29/Malaria_cnn',
    index: 3
  },
  {
    title: 'AutoStruct',
    description: 'CLI tool for automated project scaffolding with structured directory generation.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb',
    tags: ['CLI', 'Node.js', 'Developer Tools', 'Automation'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    index: 4
  }
  // {
  //   title: 'AI-Powered Medical Diagnosis System',
  //   description: 'Deep learning system for early disease detection using medical imaging, achieving 97% accuracy.',
  //   image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
  //   tags: ['Python', 'TensorFlow', 'Medical AI', 'Computer Vision'],
  //   demoUrl: 'https://demo.example.com',
  //   githubUrl: 'https://github.com',
  //   index: 5
  // },
  // {
  //   title: 'Quantum Computing Simulator',
  //   description: 'Built a quantum circuit simulator supporting up to 30 qubits with custom gate operations.',
  //   image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
  //   tags: ['Python', 'Qiskit', 'Quantum Computing', 'Linear Algebra'],
  //   demoUrl: 'https://demo.example.com',
  //   githubUrl: 'https://github.com',
  //   index: 6
  // },
  // {
  //   title: 'Autonomous Trading Platform',
  //   description: 'Developed an ML-powered trading system with real-time market analysis and automated execution.',
  //   image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
  //   tags: ['Python', 'Machine Learning', 'Financial Analysis', 'APIs'],
  //   demoUrl: 'https://demo.example.com',
  //   githubUrl: 'https://github.com',
  //   index: 7
  // },
  // {
  //   title: 'Smart City Traffic Management',
  //   description: 'IoT-based traffic optimization system using real-time data and predictive analytics.',
  //   image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
  //   tags: ['IoT', 'Python', 'Real-time Analytics', 'Edge Computing'],
  //   demoUrl: 'https://demo.example.com',
  //   githubUrl: 'https://github.com',
  //   index: 8
  // },
  // {
  //   title: 'Advanced NLP Document Analyzer',
  //   description: 'Built a system for analyzing legal documents using transformer models and custom NLP pipelines.',
  //   image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
  //   tags: ['NLP', 'BERT', 'Python', 'Legal Tech'],
  //   demoUrl: 'https://demo.example.com',
  //   githubUrl: 'https://github.com',
  //   index: 9
  // },
  // {
  //   title: 'Augmented Reality Education Platform',
  //   description: 'Created an AR platform for interactive learning experiences in STEM subjects.',
  //   image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd',
  //   tags: ['Unity', 'AR', 'C#', 'Education Tech'],
  //   demoUrl: 'https://demo.example.com',
  //   githubUrl: 'https://github.com',
  //   index: 10
  // },
  // {
  //   title: 'Blockchain Supply Chain System',
  //   description: 'Implemented a blockchain-based supply chain tracking system with smart contracts.',
  //   image: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f',
  //   tags: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3'],
  //   demoUrl: 'https://demo.example.com',
  //   githubUrl: 'https://github.com',
  //   index: 11
  // },
  // {
  //   title: 'Computer Vision Security System',
  //   description: 'Developed an advanced security system using facial recognition and behavior analysis.',
  //   image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
  //   tags: ['OpenCV', 'Python', 'Deep Learning', 'Security'],
  //   demoUrl: 'https://demo.example.com',
  //   githubUrl: 'https://github.com',
  //   index: 12
  // },
  // {
  //   title: 'Sustainable Energy Management',
  //   description: 'Smart grid optimization system using ML for efficient energy distribution.',
  //   image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
  //   tags: ['Python', 'IoT', 'Energy Tech', 'Data Analysis'],
  //   demoUrl: 'https://demo.example.com',
  //   githubUrl: 'https://github.com',
  //   index: 13
  // },
  // {
  //   title: 'Voice-Controlled Home Automation',
  //   description: 'Created a comprehensive home automation system with natural language processing.',
  //   image: 'https://images.unsplash.com/photo-1558002038-bb4237b50b11',
  //   tags: ['IoT', 'NLP', 'Embedded Systems', 'Python'],
  //   demoUrl: 'https://demo.example.com',
  //   githubUrl: 'https://github.com',
  //   index: 14
  // }
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