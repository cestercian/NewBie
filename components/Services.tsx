// @ts-ignore
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Event Organizer",
        content: "EventMasters turned our vision into reality. Their attention to detail and professionalism made our music festival a huge success!"
    },
    {
        name: "Mike Thompson",
        role: "Comedy Club Owner",
        content: "Working with EventMasters has been a game-changer for our comedy nights. They handle everything flawlessly, allowing us to focus on the talent."
    },
    {
        name: "Emily Davis",
        role: "Corporate Client",
        content: "Our company's annual event was managed perfectly by EventMasters. From planning to execution, they exceeded our expectations."
    }
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 bg-muted">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{testimonial.name}</CardTitle>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </CardHeader>
                            <CardContent>
                                <p>"{testimonial.content}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

