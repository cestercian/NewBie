import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
    return (
        <header className="bg-background py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                    EventMasters
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="#events" className="text-muted-foreground hover:text-primary">Events</Link></li>
                        <li><Link href="#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
                        <li><Link href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</Link></li>
                        <li><Button asChild><Link href="#contact">Contact Us</Link></Button></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

