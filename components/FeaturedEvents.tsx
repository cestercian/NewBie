import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const events = [
    {
        title: "Summer Music Festival",
        description: "A weekend of non-stop music featuring top artists from around the world.",
        date: "July 15-17, 2023",
        image: "/placeholder.svg?height=400&width=600"
    },
    {
        title: "Comedy Night Extravaganza",
        description: "Laugh your heart out with the best stand-up comedians in the industry.",
        date: "August 5, 2023",
        image: "/placeholder.svg?height=400&width=600"
    },
    {
        title: "Rock Legends Reunion",
        description: "Experience the magic as rock legends come together for one epic night.",
        date: "September 10, 2023",
        image: "/placeholder.svg?height=400&width=600"
    }
]

export default function FeaturedEvents() {
    return (
        <section id="events" className="py-16 bg-muted">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Featured Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{event.title}</CardTitle>
                                <CardDescription>{event.date}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img src={event.image} alt={event.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                                <p>{event.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Get Tickets</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

