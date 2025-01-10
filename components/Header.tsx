import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-primary">
                    EventMasters
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <Link href="#events" className="text-foreground hover:text-primary transition-colors">Events</Link>
                    <Link href="#services" className="text-foreground hover:text-primary transition-colors">Services</Link>
                    <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</Link>
                </nav>
            </div>
        </header>
    )
}
