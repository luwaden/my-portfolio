// 'use client'

// import { useState, useEffect } from 'react'
// import { ArrowUp } from 'lucide-react'
// import { useScroll } from '../components/tools/hooks/index'

// export default function BackToTop() {
//   const { scrollY } = useScroll()
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(scrollY > 400)
//   }, [scrollY])

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     })
//   }

//   if (!isVisible) {
//     return null
//   }

//   return (
//     <button
//       onClick={scrollToTop}
//       className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 no-print"
//       aria-label="Back to top"
//     >
//       <ArrowUp className="h-5 w-5 mx-auto" />
//     </button>
//   )
// }