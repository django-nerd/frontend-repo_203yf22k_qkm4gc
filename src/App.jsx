import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Why from './components/Why'
import Newsletter from './components/Newsletter'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingChat from './components/FloatingChat'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Why />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}

export default App
