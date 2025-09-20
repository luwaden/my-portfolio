// app/components/Skills.tsx
'use client'
import { useState, useEffect, useRef } from 'react'

interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'soft'
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const skills: Skill[] = [
    // Frontend Skills
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend' },
    
    // Backend Skills
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Express.js', level: 85, category: 'backend' },
    { name: 'MongoDB', level: 80, category: 'backend' },
    { name: 'REST APIs', level: 85, category: 'backend' },
    { name: 'GraphQL', level: 70, category: 'backend' },
    
    // Tools
    { name: 'Git/GitHub', level: 90, category: 'tools' },
    { name: 'Docker', level: 65, category: 'tools' },
    { name: 'AWS', level: 60, category: 'tools' },
    { name: 'Vercel', level: 85, category: 'tools' },
    
    // Soft Skills
    { name: 'Problem Solving', level: 95, category: 'soft' },
    { name: 'Team Collaboration', level: 90, category: 'soft' },
    { name: 'Communication', level: 88, category: 'soft' },
    { name: 'Project Management', level: 75, category: 'soft' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & Platforms',
    soft: 'Soft Skills'
  }

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
            
            {Object.entries(categories).slice(0, 2).map(([key, title]) => (
              <div key={key}>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">{title}</h4>
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === key)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%'
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Skills</h3>
            
            {Object.entries(categories).slice(2).map(([key, title]) => (
              <div key={key}>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">{title}</h4>
                <div className="space-y-4">
                  {key === 'soft' ? (
                    <div className="grid grid-cols-2 gap-4">
                      {skills
                        .filter(skill => skill.category === key)
                        .map((skill) => (
                          <div key={skill.name} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                          </div>
                        ))}
                    </div>
                  ) : (
                    skills
                      .filter(skill => skill.category === key)
                      .map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              {skill.name}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: isVisible ? `${skill.level}%` : '0%'
                              }}
                            ></div>
                          </div>
                        </div>
                      ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills