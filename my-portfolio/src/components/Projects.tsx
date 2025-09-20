// app/components/Projects.tsx
import Image from 'next/image'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Cohut EdTech Platform',
      description: 'Modern educational platform built with React and TypeScript, featuring user authentication, responsive design, and API integration.',
      image: 'https://res.cloudinary.com/domkyl3rw/image/upload/v1744021411/cohut-app_jtkfg6.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
      liveUrl: 'https://cohutv1-fe.vercel.app/',
    },
    {
      title: 'Plus Incubation Hub',
      description: 'Professional landing page with email subscription system and Google Sheets integration for lead management.',
      image: 'https://res.cloudinary.com/domkyl3rw/image/upload/v1744016504/WhatsApp_Image_2025-03-22_at_23.52.08_vmyrgw.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Google Apps Script'],
      liveUrl: 'https://www.plusincubationhub.com',
    },
    {
      title: 'Full-Stack Note App',
      description: 'MERN stack application for creating and organizing notes with user authentication and real-time updates.',
      image: 'https://res.cloudinary.com/domkyl3rw/image/upload/v1744022626/Graphic_Designer_2_pni0ec.png',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
      githubUrl: 'https://github.com/luwaden/note-app',
    },
    {
      title: 'Interactive Quiz App',
      description: 'React-based quiz application with real-time scoring, progress tracking, and responsive design.',
      image: '/images/quiz-app.jpg',
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      liveUrl: 'https://site-quiz-app.netlify.app/',
      githubUrl: 'https://github.com/luwaden/quiz-app',
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online shopping platform with payment integration, product management, and user dashboard.',
      image: '/images/ecommerce.jpg',
      technologies: ['Next.js', 'TypeScript', 'Stripe API', 'MongoDB'],
      githubUrl: 'https://github.com/luwaden/ecommerce-platform',
    },
    {
      title: 'Task Management App',
      description: 'Productivity application with drag-and-drop functionality, team collaboration, and real-time updates.',
      image: '/images/task-manager.jpg',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      githubUrl: 'https://github.com/luwaden/task-manager',
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent development work and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg card-hover animate-fade-in">
              <div className="relative h-48 overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                      >
                        View Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 text-sm font-medium"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/luwaden"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects