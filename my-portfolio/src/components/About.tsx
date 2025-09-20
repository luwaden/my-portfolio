// // app/components/About.tsx
// import Image from 'next/image'

// const About = () => {
//   return (
//     <section id="about" className="section-padding bg-gray-50 dark:bg-slate-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             About Me
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Passionate full-stack developer building scalable web applications
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="animate-fade-in">
//             <div className="relative">
//               <Image
//                 src="https://res.cloudinary.com/domkyl3rw/image/upload/v1744016296/Day_2_w-Ron_Mike-244_wjd4vu.jpg"
//                 alt="Ayodeji working"
//                 width={500}
//                 height={400}
//                 className="rounded-lg shadow-lg object-cover w-full h-80"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
//             </div>
//           </div>

//           <div className="animate-slide-in">
//             <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
//               Full-Stack Developer & Tech Enthusiast
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
//               I'm Ayodeji Dennis Oluwatunla, a passionate software engineer with 3+ years of experience 
//               building modern web applications. I specialize in the MERN stack with a focus on Next.js, 
//               React, TypeScript, Node.js, and Express.js.
//             </p>

//             <div className="grid md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Stats</h4>
//                 <ul className="space-y-2 text-gray-600 dark:text-gray-300">
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
//                     3+ Years Experience
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
//                     Full-Stack Specialist
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
//                     React & Next.js Expert
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Specialties</h4>
//                 <ul className="space-y-2 text-gray-600 dark:text-gray-300">
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
//                     TypeScript Development
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
//                     API Design & Integration
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
//                     Performance Optimization
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
//               I focus on writing clean, scalable code and building user-centric applications that 
//               deliver exceptional performance. My approach combines technical expertise with creative 
//               problem-solving to create digital solutions that drive business growth.
//             </p>

//             <div className="flex gap-4">
//               <a href="#contact" className="btn-primary">
//                 Let's Connect
//               </a>
//               <a href="#projects" className="btn-secondary">
//                 View My Work
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About


import Image from 'next/image';
import { motion } from 'framer-motion';
import { FC } from 'react';

// Define interfaces for type safety
interface Stat {
  label: string;
  color: string;
}

interface AboutProps {}

/**
 * About section component with sophisticated design and Framer Motion animations
 * Tailored for FAANG-level portfolio showcasing full-stack expertise
 */
const About: FC<AboutProps> = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: '0 10px 30px rgba(0, 255, 255, 0.2)',
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
      transition: {
        type: 'spring',
        stiffness: 400,
      },
    },
    tap: { scale: 0.95 },
  };

  // Stats data
  const stats: Stat[] = [
    { label: '3+ Years Full-Stack Experience', color: 'bg-cyan-500' },
    { label: 'Next.js & React Specialist', color: 'bg-teal-500' },
    { label: '40% API Performance Boost', color: 'bg-purple-500' },
    { label: 'TypeScript-Driven Development', color: 'bg-blue-500' },
    { label: 'Scalable Node.js APIs', color: 'bg-indigo-500' },
    { label: '100+ Features Shipped', color: 'bg-pink-500' },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-slate-900 text-gray-100"
      aria-labelledby="about-heading"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.div className="text-center mb-16" variants={childVariants}>
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold font-inter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500"
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto my-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Full-Stack Software Engineer crafting scalable, high-performance web
            applications with Next.js, React, TypeScript, Node.js, and Express.js
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="relative group"
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="https://res.cloudinary.com/domkyl3rw/image/upload/v1744016296/Day_2_w-Ron_Mike-244_wjd4vu.jpg"
              alt="Ayodeji Dennis Oluwatunla working on full-stack projects"
              width={500}
              height={400}
              className="rounded-xl object-cover w-full h-[400px] shadow-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-xl"></div>
            <motion.div
              className="absolute bottom-4 left-4 text-white font-semibold text-lg"
              variants={childVariants}
            >
              Innovating the Future
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div className="space-y-6" variants={childVariants}>
            <h3 className="text-3xl font-bold font-inter text-cyan-400">
              Full-Stack Developer & Problem Solver
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm Ayodeji Dennis Oluwatunla, a dedicated software engineer with
              over 3 years of experience building robust, scalable web
              applications. My expertise lies in Next.js, React, TypeScript,
              Node.js, and Express.js, delivering end-to-end solutions that drive
              business impact.
            </p>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {stats.slice(0, 3).map((stat, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      variants={childVariants}
                    >
                      <span
                        className={`w-3 h-3 ${stat.color} rounded-full mr-3`}
                      ></span>
                      <span className="text-gray-300">{stat.label}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Core Skills</h4>
                <ul className="space-y-3">
                  {stats.slice(3).map((stat, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      variants={childVariants}
                    >
                      <span
                        className={`w-3 h-3 ${stat.color} rounded-full mr-3`}
                      ></span>
                      <span className="text-gray-300">{stat.label}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              My approach centers on clean code, performance optimization, and
              user-centric design. From architecting RESTful APIs to crafting
              pixel-perfect UIs, I deliver solutions that scale seamlessly and
              delight users.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <motion.a
                href="#contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Navigate to contact section"
              >
                Let's Connect
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-block px-6 py-3 border border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500/10"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Navigate to projects section"
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;