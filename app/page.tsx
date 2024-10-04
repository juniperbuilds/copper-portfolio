import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}