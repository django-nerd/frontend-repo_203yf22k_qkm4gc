import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900"
        >
          Automate. Build. Scale — The AI Way.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          Grofyl is your all-in-one AI agency for automation, product development, and brand acceleration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#cta" className="rounded-full bg-gray-900 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all">
            Book a Free Strategy Call
          </a>
          <a href="#work" className="rounded-full border border-gray-300 px-6 py-3 text-gray-900 hover:border-gray-400 transition-all bg-white/80 backdrop-blur">
            Explore Our Work
          </a>
        </motion.div>
      </div>
    </section>
  )
}
