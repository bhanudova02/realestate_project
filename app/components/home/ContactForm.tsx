"use client"
import { useState } from 'react';

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="relative py-12 px-4">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <div className="relative w-full h-full">
                    <img
                        src="./contact_form_bg.jpg"
                        alt="Contact background"
                        className="w-full h-full object-cover"
                    />
                    {/* Black layer only on top of the image */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            </div>

            {/* Form Container */}
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Heading */}
                    <div className="text-white space-y-3">
                        <h2 className="text-3xl lg:text-4xl font-medium">
                            Get In Touch
                        </h2>
                        <p className="text-base text-white/90">
                            Have a question about a property or want to schedule a visit?
                            We'd love to assist you.
                        </p>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white p-6 lg:p-8 rounded shadow-xl">
                        <h3 className="text-xl font-medium text-gray-800 mb-4">
                            Contact Us
                        </h3>

                        <div className="space-y-3">
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-700 block">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                    className="w-full border border-gray-200 rounded-xl p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-700 block">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter your last name"
                                    className="w-full border border-gray-200 rounded-xl p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-700 block">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    className="w-full border border-gray-200 rounded-xl p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-700 block">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Tell us more about your property inquiry..."
                                    className="w-full border border-gray-200 rounded-xl p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all resize-none"
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-gray-800 text-white py-2.5 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-300 mt-1"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
