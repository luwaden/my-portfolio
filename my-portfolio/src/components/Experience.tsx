// app/components/Experience.tsx
interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Software Developer',
      company: 'Resonans',
      period: '2023 - Present',
      description: [
        'Led technical interviews with 30+ researchers for product development and market validation',
        'Built scalable web applications using React, Next.js, and TypeScript',
        'Implemented responsive designs and optimized application performance',
        'Collaborated with cross-functional teams in agile development environment'
      ]
    },
    {
      title: 'Full Stack Engineering Fellow',
      company: 'Brave Redemptive',
      period: '2022 - 2023',
      description: [
        'Completed intensive 9-month Full Stack Engineering program focusing on MERN stack',
        'Developed multiple full-stack applications using React, Node.js, Express.js, and MongoDB',
        'Gained expertise in modern development practices and deployment strategies',
        'Built RESTful APIs and integrated third-party services'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'Tech Startup Nigeria',
      period: '2021 - 2022',
      description: [
        'Assisted in frontend development using HTML, CSS, JavaScript, and React',
        'Contributed to UI/UX improvements that enhanced user engagement by 20%',
        'Participated in code reviews and implemented performance optimizations',
        'Developed responsive websites for multiple clients'
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-green-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-in">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg hidden md:block"></div>
                
                {/* Content */}
                <div className="md:ml-20 bg-white dark:bg-slate-700 rounded-lg p-6 shadow-lg card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </h4>
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-600 px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience