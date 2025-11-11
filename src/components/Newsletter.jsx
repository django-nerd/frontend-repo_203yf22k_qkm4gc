import { motion } from 'framer-motion'

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl sm:text-3xl font-semibold text-gray-900">Get AI Insights Weekly</motion.h3>
        <p className="mt-2 text-gray-700">Strategies, playbooks, and product breakdowns — straight to your inbox.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <input type="email" required placeholder="Your email" className="w-full sm:w-96 rounded-full border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
