import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedEvents from '@/components/FeaturedEvents'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main>
                <Hero />
                <FeaturedEvents />
                <Services />
                <Testimonials />
                <ContactForm />
            </main>
            <Footer />
        </div>
    )
}

