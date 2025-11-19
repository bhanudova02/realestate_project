"use client"
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
export function CloubHouse() {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    // Counters
    const [members, setMembers] = useState(0);
    const [amenities, setAmenities] = useState(0);
    const [access, setAccess] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;

        const animate = (setter: any, end: any) => {
            let start = 0;
            const duration = 1500;
            const increment = end / (duration / 16);

            const step = () => {
                start += increment;
                if (start < end) {
                    setter(Math.floor(start));
                    requestAnimationFrame(step);
                } else {
                    setter(end);
                }
            };
            requestAnimationFrame(step);
        };

        animate(setMembers, 500);
        animate(setAmenities, 15);
        animate(setAccess, 24);
    }, [inView]);

    useEffect(() => {
        AOS.init({
            duration: 1000,  // smooth animation
            once: false,      // animate only once
        });
    }, []);

    return (
        <div className="bg-gray-50 py-20 px-6 md:px-8 lg:px-4" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Image Section */}
                    <div data-aos="zoom-in" className="order-2 lg:order-1">
                        <div className="h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=1000&fit=crop"
                                alt="Modern clubhouse architecture"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="order-1 lg:order-2 space-y-6">

                        {/* Heading + Paragraphs */}
                        <div className="space-y-4">

                            <h2
                                data-aos="fade-up"
                                data-aos-delay="0"
                                className="text-4xl lg:text-5xl font-medium text-gray-800"
                            >
                                Welcome to Our Clubhouse
                            </h2>

                            <p
                                data-aos="fade-up"
                                data-aos-delay="150"
                                className="text-lg text-gray-600 leading-relaxed"
                            >
                                Experience exceptional design and modern amenities in our exclusive clubhouse.
                                A space thoughtfully crafted for community, relaxation, and memorable moments.
                            </p>

                            <p
                                data-aos="fade-up"
                                data-aos-delay="300"
                                className="text-base text-gray-600 leading-relaxed"
                            >
                                From elegant interiors to state-of-the-art facilities, every detail has been
                                carefully considered to provide an unparalleled experience for our members.
                            </p>

                        </div>

                        {/* CTA Button */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="450"
                            className="pt-4"
                        >
                            <button className="bg-gray-800 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-700 transition-colors duration-300">
                                Explore Our Clubhouse
                            </button>
                        </div>

                        {/* Feature highlights */}
                        <div className="grid grid-cols-3 gap-6 pt-8">

                            <div
                                data-aos="fade-up"
                                data-aos-delay="600"
                                className="space-y-1"
                            >
                                <p className="text-3xl font-medium text-gray-800">{members}+</p>
                                <p className="text-sm text-gray-600">Members</p>
                            </div>

                            <div
                                data-aos="fade-up"
                                data-aos-delay="750"
                                className="space-y-1"
                            >
                                <p className="text-3xl font-medium text-gray-800">{amenities}+</p>
                                <p className="text-sm text-gray-600">Amenities</p>
                            </div>

                            <div
                                data-aos="fade-up"
                                data-aos-delay="900"
                                className="space-y-1"
                            >
                                <p className="text-3xl font-medium text-gray-800">{access}/7</p>
                                <p className="text-sm text-gray-600">Access</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}