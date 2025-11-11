import { Mail, Linkedin, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200" id="contact">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500" />
            <span className="font-semibold tracking-tight text-gray-900">GROFYL</span>
          </div>
          <p className="mt-4 text-sm text-gray-700 max-w-md">Made with 🤖 by Grofyl. Clean systems. Creative energy. Compounding growth.</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-700">
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@grofyl.com</span>
            <a href="https://linkedin.com/company/grofyl" target="_blank" className="inline-flex items-center gap-2 hover:text-gray-900"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Remote / Global</span>
          </div>
        </div>

        <div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-gray-200 p-6 bg-white/70 backdrop-blur">
            <h3 className="font-semibold text-gray-900">Quick Contact</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" />
              <input className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" type="email" />
            </div>
            <textarea className="mt-4 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Tell us about your project" />
            <button className="mt-4 w-full rounded-xl bg-gray-900 text-white px-4 py-2 hover:opacity-90">Send</button>
          </form>
          <p className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} Grofyl. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
