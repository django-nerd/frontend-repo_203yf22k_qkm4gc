import { MessageCircle } from 'lucide-react'

export default function FloatingChat() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 text-white px-4 py-3 shadow-xl hover:shadow-2xl transition-all"
    >
      <MessageCircle className="h-5 w-5" /> Chat
    </a>
  )
}
