import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">From Idea → Automation → Scale</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We are a team of AI engineers, full-stack developers, and creative strategists. We build intelligent systems, ship MVPs fast, and craft brands that feel inevitable.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-violet-50 border border-white shadow-sm">
              <h3 className="font-semibold text-gray-900">Our Vision</h3>
              <p className="mt-2 text-gray-700 text-sm">Make growth simple with AI. Build systems that scale, brands that resonate, and products that ship fast.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900">Our Edge</h3>
              <p className="mt-2 text-gray-700 text-sm">AI-first execution. Vibe-coded builds. Speed without sacrificing craft. Real impact, measurable outcomes.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
