// app/components/About.tsx
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate full-stack developer building scalable web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/domkyl3rw/image/upload/v1744016296/Day_2_w-Ron_Mike-244_wjd4vu.jpg"
                alt="Ayodeji working"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Full-Stack Developer & Tech Enthusiast
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm Ayodeji Dennis Oluwatunla, a passionate software engineer with 3+ years of experience 
              building modern web applications. I specialize in the MERN stack with a focus on Next.js, 
              React, TypeScript, Node.js, and Express.js.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Stats</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    3+ Years Experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Full-Stack Specialist
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    React & Next.js Expert
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Specialties</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    TypeScript Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    API Design & Integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                    Performance Optimization
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I focus on writing clean, scalable code and building user-centric applications that 
              deliver exceptional performance. My approach combines technical expertise with creative 
              problem-solving to create digital solutions that drive business growth.
            </p>

            <div className="flex gap-4">
              <a href="#contact" className="btn-primary">
                Let's Connect
              </a>
              <a href="#projects" className="btn-secondary">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About