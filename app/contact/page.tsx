"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Mail, Phone, MapPin, Building, Mountain } from "lucide-react"
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        privacy: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, privacy: checked }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        // Validate form
        if (!formData.name || !formData.email || !formData.message || !formData.privacy) {
            setError("Please fill in all required fields and accept the privacy policy.")
            setIsSubmitting(false)
            return
        }

        // Simulate form submission
        try {
            // In a real application, you would send this data to your backend
            // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
            await new Promise((resolve) => setTimeout(resolve, 1500))

            setIsSubmitted(true)
            setShowConfirmation(true)
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
                privacy: false,
            })
        } catch (err) {
            setError("There was an error submitting the form. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Have questions about Rescue Hero or need assistance? Our team is here to help. Fill out the form below or
                        use our contact information to get in touch.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Company Information */}
                        <div>
                            <Card className="h-full">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                            <Building className="h-6 w-6 text-blue-700" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold">Zentriqa Inc.</h2>
                                            <p className="text-gray-600">Social Gaming & Entertainment</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mb-8">
                                        Zentriqa is a leading developer of social games designed for pure entertainment. Our flagship game,
                                        Rescue Hero in the Canadian Rockies, offers players an exciting adventure experience without real
                                        money gambling. Founded in 2020, we're committed to creating engaging, responsible gaming
                                        experiences for adults.
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <Mail className="h-5 w-5 text-blue-700 mt-1 mr-3" />
                                            <div>
                                                <h3 className="font-semibold">Email</h3>
                                                <a href="mailto:info@zentriqa.com" className="text-blue-600 hover:underline">
                                                    info@zentriqa.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <MapPin className="h-5 w-5 text-blue-700 mt-1 mr-3" />
                                            <div>
                                                <h3 className="font-semibold">Address</h3>
                                                <address className="not-italic text-gray-700">
                                                    11 Yonge St
                                                    <br />
                                                    Toronto, ON, M5C 1W4
                                                    <br />
                                                    Canada
                                                </address>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <Phone className="h-5 w-5 text-blue-700 mt-1 mr-3" />
                                            <div>
                                                <h3 className="font-semibold">Phone</h3>
                                                <a href="tel:+14165557890" className="text-blue-600 hover:underline">
                                                    +1 416 555 7890
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <h3 className="font-semibold mb-3">Business Hours</h3>
                                        <ul className="space-y-1 text-gray-700">
                                            <li className="flex justify-between">
                                                <span>Monday - Friday:</span>
                                                <span>9:00 AM - 5:00 PM EST</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>Saturday:</span>
                                                <span>10:00 AM - 2:00 PM EST</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>Sunday:</span>
                                                <span>Closed</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <h3 className="font-semibold mb-3">Follow Us</h3>
                                        <div className="flex space-x-4">
                                            <a
                                                href="https://twitter.com/zentriqa"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-blue-700"
                                                >
                                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                                </svg>
                                            </a>
                                            <a
                                                href="https://facebook.com/zentriqa"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-blue-700"
                                                >
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a
                                                href="https://instagram.com/zentriqa"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-blue-700"
                                                >
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                </svg>
                                            </a>
                                            <a
                                                href="https://linkedin.com/company/zentriqa"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-blue-700"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                    <rect x="2" y="9" width="4" height="12"></rect>
                                                    <circle cx="4" cy="4" r="2"></circle>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                            <Mountain className="h-6 w-6 text-blue-700" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Send Us a Message</h2>
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 p-4 rounded-md flex items-start mb-6">
                                            <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                                            <p className="text-red-700 text-sm">{error}</p>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">
                                                Name <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">
                                                Email <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="What is this regarding?"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">
                                                Message <span className="text-red-500">*</span>
                                            </Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Your message..."
                                                rows={5}
                                                required
                                            />
                                        </div>

                                        <div className="flex items-start space-x-2">
                                            <Checkbox
                                                id="privacy"
                                                checked={formData.privacy}
                                                onCheckedChange={handleCheckboxChange}
                                                required
                                            />
                                            <Label htmlFor="privacy" className="text-sm leading-tight">
                                                I agree with the{" "}
                                                <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                                                    Privacy Policy
                                                </Link>{" "}
                                                and consent to the processing of my personal data.
                                                <span className="text-red-500">*</span>
                                            </Label>
                                        </div>

                                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </Button>

                                        <p className="text-xs text-gray-500 text-center">
                                            Your information will be sent to info@zentriqa.com
                                        </p>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-center mb-6">Find Us</h2>
                        <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5174568444843!2d-79.37975492346763!3d43.65030905130282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2b5935bf09%3A0x7f26b5bd121383a0!2s11%20Yonge%20St%2C%20Toronto%2C%20ON%20M5E%201S9!5e0!3m2!1sen!2sca!4v1716304800000!5m2!1sen!2sca"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Zentriqa Office Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmation Dialog */}
            <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center">
                            <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
                            Message Sent Successfully
                        </DialogTitle>
                        <DialogDescription>Thank you for contacting Zentriqa Inc.</DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <p className="text-gray-700">
                            We have received your message and will get back to you as soon as possible, usually within 1-2 business
                            days.
                        </p>
                        <p className="mt-2 text-gray-700">
                            If your inquiry is urgent, please contact us directly at{" "}
                            <a href="tel:+14165557890" className="text-blue-600 hover:underline">
                                +1 416 555 7890
                            </a>
                            .
                        </p>
                    </div>
                    <DialogFooter>
                        <Button onClick={() => setShowConfirmation(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
