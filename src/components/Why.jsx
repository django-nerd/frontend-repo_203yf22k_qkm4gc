import { motion } from 'framer-motion'
import { Bot, Timer, Shield } from 'lucide-react'

const items = [
  { title: 'AI-First Execution', desc: 'We build with intelligence at the core, not as an afterthought.', icon: Bot },
  { title: 'Fastest GTM Delivery', desc: 'Ship momentum. MVPs in weeks, not months.', icon: Timer },
  { title: 'Future-Proof Strategy', desc: 'Systems that adapt, brands that endure.', icon: Shield },
]

export default function Why() {
  return (
    <section id="why" className="py-20 bg-gradient-to-b from-white to-violet-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Choose Grofyl</h2>
          <p className="mt-3 text-gray-700">Execution that compounds into advantage.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon }, idx) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.05 }} className="rounded-2xl border border-white bg-white/70 backdrop-blur p-6 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-white flex items-center justify-center shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
