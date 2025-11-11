import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Automation Control Center',
    result: 'Saved 200+ hours/month for a D2C brand with n8n workflows.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'MVP SaaS Platform',
    result: 'Went from concept to paying users in 6 weeks.',
    img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Adaptive Brand System',
    result: 'Unified product, content, and growth into one design language.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Work</h2>
          <p className="mt-3 text-gray-700">Proof that momentum compounds.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
              <div className="aspect-[16/10] bg-gray-100">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{p.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
