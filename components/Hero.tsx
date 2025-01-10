import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative h-[80vh] flex items-center">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="container mx-auto relative z-20 text-white">
                <h1 className="text-5xl font-bold mb-4">Unforgettable Events, Masterfully Managed</h1>
                <p className="text-xl mb-8">From electrifying concerts to side-splitting comedy shows, we bring your entertainment dreams to life.</p>
                <Button size="lg" asChild>
                    <a href="#contact">Plan Your Event</a>
                </Button>
            </div>
        </section>
    )
}

