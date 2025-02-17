export const commands: Record<string, string | ((args: string[]) => string)> = {
  help: `Available commands:
  - help: Show this help message
  - about: Learn about me
  - skills: View my technical skills
  - projects: See my featured projects
  - contact: Get my contact information
  - clear: Clear the terminal
  - echo [text]: Display the text
  - date: Show current date and time
  - weather: Check the weather (demo)
  - joke: Get a programming joke
  - github: Open my GitHub profile
  - whoami: Display current user
  - ls: List available sections
  - cowsay [text]: Display a cow saying your text`,

  about: `Hi! I'm Amandeep Singh, a Full Stack Developer passionate about creating innovative web solutions.
I specialize in building scalable applications using modern technologies and best practices.
With experience in both frontend and backend development, I bring ideas to life through clean,
efficient code and intuitive user experiences.`,

  skills: `Technical Skills:
Frontend:
  - React, TypeScript, Next.js
  - Tailwind CSS, Styled Components
  - Redux, React Query
Backend:
  - Node.js, Express, NestJS
  - PostgreSQL, MongoDB, Redis
  - AWS, Docker, CI/CD
Other:
  - Git, Agile methodologies
  - System Design, API Design
  - Testing (Jest, Cypress)`,

  projects: `Featured Projects:
1. E-commerce Platform
   - Built with Next.js, TypeScript, and Stripe
   - Microservices architecture with Node.js

2. Real-time Chat Application
   - React, Socket.io, and Redis
   - End-to-end encryption

3. Project Management Tool
   - MERN stack with GraphQL
   - Real-time updates with WebSocket`,

  contact: `Let's connect!
Email: contact@example.com
LinkedIn: linkedin.com/in/amandeep
GitHub: github.com/amandeep
Twitter: @amandeep_dev`,

  clear: 'CLEAR_TERMINAL',

  date: () => new Date().toLocaleString(),

  weather: () => 'Current weather: 🌤️ 22°C - Perfect coding weather!',

  joke: () => {
    const jokes = [
      'Why do programmers prefer dark mode? Because light attracts bugs!',
      'Why did the developer go broke? Because he used up all his cache!',
      'What do you call a developer who doesn\'t comment code? A developer.',
      'Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25!'
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  },

  github: () => {
    window.open('https://github.com', '_blank');
    return 'Opening GitHub profile...';
  },

  whoami: () => 'guest@portfolio',

  ls: `Available sections:
- about/
- projects/
- skills/
- contact/`,

  echo: (args: string[]) => args.join(' ') || 'Usage: echo [text]',

  cowsay: (args: string[]) => {
    const text = args.join(' ') || 'Moo!';
    return `
  ${'-'.repeat(text.length + 2)}
< ${text} >
  ${'-'.repeat(text.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;
  },
};