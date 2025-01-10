'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsSubmitting(false)
        toast({
            title: "Message sent!",
            description: "We'll get back to you as soon as possible.",
        })
        event.currentTarget.reset()
    }

    return (
        <section id="contact" className="py-16">
            <div className="container mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input type="text" placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                    <Input type="text" placeholder="Subject" required />
                    <Textarea placeholder="Your Message" required />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            </div>
        </section>
    )
}

