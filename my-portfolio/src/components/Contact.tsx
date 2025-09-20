// app/components/Contact.tsx
'use client'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'ayodejioluwatunla@gmail.com',
      link: 'mailto:ayodejioluwatunla@gmail.com'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+234 816 328 3020',
      link: 'https://wa.me/2348163283020'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Ibadan, Nigeria',
      link: null
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/ayodeji-dennis-oluwatunla/'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you're looking for a full-stack developer or need help with 
              your existing application, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-xl">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-600 rounded-lg text-green-700 dark:text-green-300">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-600 rounded-lg text-red-700 dark:text-red-300">
                  Something went wrong. Please try again or contact me directly.
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact