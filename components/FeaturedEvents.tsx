export default function FeaturedEvents() {
    return (
        <section id="events" className="py-24 bg-background">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-8">Featured Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Event Cards */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold">Music Concert</h3>
                        <p className="mt-4">Join us for an unforgettable music concert featuring top artists.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
