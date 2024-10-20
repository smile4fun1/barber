import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './components/barbershop/Theme'
import Navbar from './components/barbershop/Navbar'
import Hero from './components/barbershop/Hero'
import Services from './components/barbershop/Services'
import BarberExperience from './components/barbershop/BarberExperience'
import GalleryAndTestimonials from './components/barbershop/GalleryAndTestimonials'
import ProductShowcase from './components/barbershop/ProductShowcase'
import AwardsRecognition from './components/barbershop/AwardsRecognition'
import CallToAction from './components/barbershop/CallToAction'
import Footer from './components/barbershop/Footer'
import BackToTopButton from './components/barbershop/BackToTopButton'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-background text-text">
          <Navbar />
          <Hero />
          <Services />
          <BarberExperience />
          <GalleryAndTestimonials />
          <ProductShowcase />
          <AwardsRecognition />
          <CallToAction />
          <Footer />
          <BackToTopButton />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
