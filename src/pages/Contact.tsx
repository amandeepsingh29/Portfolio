import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, BookOpen, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'amandeep.singh.dsc@gmail.com', href: 'mailto:amandeep.singh.dsc@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91-7740011879', href: 'tel:+917740011879' },
  { icon: MapPin, label: 'Location', value: 'Patiala, Punjab, India' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/amandeepsingh29' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/amandeepsinghx/' },
  { icon: BookOpen, label: 'Medium', href: 'https://medium.com/@me.amandeep.29' },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      if (!formRef.current) return;

      // Log for debugging
      console.log('Sending email with:', {
        serviceId: 'service_8x61j8c',
        templateId: 'template_8dp2hvp',
        publicKey: '8nyPwllbFxbGUmydv',
        formData: {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      });

      // Initialize EmailJS with your public key
      emailjs.init('8nyPwllbFxbGUmydv');

      const result = await emailjs.sendForm(
        'service_8x61j8c',
        'template_8dp2hvp',
        formRef.current
      );
      
      console.log('Email sent successfully:', result.text);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Please try again later.');
      setTimeout(() => setError(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-12 px-4 relative"
    >
      <AnimatePresence>
        {(showSuccess || error) && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-24 left-1/2 transform -translate-x-1/2 ${
              error ? 'bg-red-500' : 'bg-green-500'
            } text-white px-6 py-3 rounded-lg shadow-lg z-50`}
          >
            {error || 'Message sent successfully! 🎉'}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Let's collaborate on something amazing together. Drop me a message!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg transform hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                className="flex items-start space-x-4 group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-white hover:text-blue-400 transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white break-all">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-all hover:scale-110"
                >
                  <item.icon className="w-5 h-5 text-blue-400" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg space-y-6 transform hover:scale-105 transition-transform duration-300"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={18} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}