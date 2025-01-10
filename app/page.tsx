import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedEvents from '../components/FeaturedEvents'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <FeaturedEvents />
          <Services />
          <Testimonials />
        </main>
        <Footer />
      </div>
  )
}
