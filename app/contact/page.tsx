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
