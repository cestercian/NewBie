import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-background py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">About Us</h3>
                        <p className="text-muted-foreground">EventMasters is your premier partner for unforgettable entertainment experiences. From electrifying concerts to hilarious comedy shows, we bring your event dreams to life.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#events" className="text-muted-foreground hover:text-primary">Events</Link></li>
                            <li><Link href="#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
                            <li><Link href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</Link></li>
                            <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <address className="text-muted-foreground not-italic">
                            <p>123 Event Street</p>
                            <p>Eventville, EV 12345</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: info@eventmasters.com</p>
                        </address>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
                    <p>&copy; 2023 EventMasters. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

