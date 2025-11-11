import { motion } from 'framer-motion'
import { Workflow, Cog, Palette, Rocket, FlaskConical } from 'lucide-react'

const services = [
  {
    title: 'AI Automation & Workflow Engineering',
    desc: 'n8n, Zapier, custom GPTs, CRM automation.',
    icon: Workflow,
  },
  {
    title: 'Full-Stack & MVP Development',
    desc: 'Vibe-coded apps, SaaS platforms, no-code prototypes.',
    icon: Cog,
  },
  {
    title: 'Branding & Experience Design',
    desc: 'AI-driven brand strategy, UX/UI, creative systems.',
    icon: Palette,
  },
  {
    title: 'Growth & Vibe Marketing',
    desc: 'Predictive campaigns, performance automation, creator mapping.',
    icon: Rocket,
  },
  {
    title: 'AI Consulting & Innovation Lab',
    desc: 'AI strategy, audits, and R&D partnerships.',
    icon: FlaskConical,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What We Do</h2>
          <p className="mt-3 text-gray-700">Systems that automate. Products that ship. Brands that scale.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon: Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all"
            >
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
