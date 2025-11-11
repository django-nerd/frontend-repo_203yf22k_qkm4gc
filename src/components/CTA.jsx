import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let’s Build Your AI Advantage.</h2>
        <p className="mt-3 text-gray-700">Get a free AI roadmap or automation blueprint tailored to your business.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all">Start Now</a>
          <a href="mailto:hello@grofyl.com" className="rounded-full border border-gray-300 px-6 py-3 text-gray-900 hover:border-gray-400 transition-all">Email Us</a>
        </div>
      </div>
    </section>
  )
}
