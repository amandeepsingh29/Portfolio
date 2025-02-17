import React from 'react';
import { Github, Linkedin, BookOpen, Mail } from 'lucide-react';

export default function SocialLinks() {
  const socials = [
    { Icon: Github, href: 'https://github.com/amandeepsingh29', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/amandeepsinghx/', label: 'LinkedIn' },
    { Icon: BookOpen, href: 'https://medium.com/@me.amandeep.29', label: 'Medium' },
    { Icon: Mail, href: 'mailto:amandeep.singh.dsc@gmail.com', label: 'Email' },
  ];

  return (
    <div className="flex space-x-6">
      {socials.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={label}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}