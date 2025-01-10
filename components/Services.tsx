export default function Services() {
    return (
        <section id="services" className="py-24 bg-gradient-to-r from-primary to-secondary">
            <div className="container mx-auto text-center text-white">
                <h2 className="text-4xl font-semibold mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service Cards */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold">Event Management</h3>
                        <p className="mt-4">We handle everything from planning to execution, ensuring a flawless event experience.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
