export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-background">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-8">What Our Clients Say</h2>
                <div className="flex flex-col md:flex-row space-x-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="italic">"EventMasters made our concert a grand success! Highly recommended."</p>
                        <h3 className="mt-4 font-semibold">John Doe</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
