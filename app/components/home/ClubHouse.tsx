"use client";
import { useEffect, useState } from "react";
import AOS from "aos";

export function ClubHouse() {
    const [openAccordions, setOpenAccordions] = useState({
        planning: false,
        buildings: false,
        projects: false
    });

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
   
    const toggleAccordion = (key: 'planning' | 'buildings' | 'projects') => {
        setOpenAccordions(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
         <div
            className="relative py-14 px-4 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')"
            }}
        >
            <div className="absolute inset-0 bg-black/80"></div>
            <div className="space-y-8 w-full max-w-6xl mx-auto relative z-10">
                <div className="text-center space-y-2">
                    <h3 className="text-4xl font-medium text-center text-white">ClubHouse</h3>
                    <p className="text-base text-white max-w-3xl mx-auto">
                        Sample text. Click to select the text box. Click again or double click to start editing the text.
                    </p>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-8">
                        <div className="h-[500px]">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop"
                                alt="Architecture overview 1"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </div>
                        <div className="bg-[#F2F2F2] rounded-3xl text-gray-600 overflow-hidden">
                            <button
                                onClick={() => toggleAccordion('planning')}
                                className="w-full p-10 text-left flex items-start justify-between gap-4"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-zinc-300 rounded-2xl flex items-center justify-center">
                                            <svg className="w-7 h-7 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl">Planning</h3>
                                    </div>
                                    <svg
                                        className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {openAccordions.planning ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        )}
                                    </svg>
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openAccordions.planning ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="px-10 pb-10">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-8 pt-20">
                        <div className="bg-[#F2F2F2] rounded-3xl text-gray-600 overflow-hidden">
                            <button
                                onClick={() => toggleAccordion('buildings')}
                                className="w-full p-10 text-left flex items-start justify-between gap-4"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-zinc-300 rounded-2xl flex items-center justify-center">
                                            <svg className="w-7 h-7 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl">Buildings</h3>
                                    </div>
                                    <svg
                                        className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {openAccordions.buildings ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        )}
                                    </svg>
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openAccordions.buildings ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="px-10 pb-10">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[420px]">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=700&fit=crop"
                                alt="Architecture overview 2"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-8 pt-32">
                        <div className="h-[500px]">
                            <img
                                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop"
                                alt="Architecture overview 3"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </div>
                        <div className="bg-[#F2F2F2] rounded-3xl text-gray-600 overflow-hidden">
                            <button
                                onClick={() => toggleAccordion('projects')}
                                className="w-full p-10 text-left flex items-start justify-between gap-4"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-zinc-300 rounded-2xl flex items-center justify-center">
                                            <svg className="w-7 h-7 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl">Our Projects</h3>
                                    </div>
                                    <svg
                                        className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {openAccordions.projects ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        )}
                                    </svg>
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openAccordions.projects ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="px-10 pb-10">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tablet Layout - Shows all 6 items in 2 columns */}
                <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col gap-8">
                        <div className="h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop"
                                alt="Architecture"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </div>

                        <div className="bg-[#F2F2F2] rounded-3xl text-gray-600 overflow-hidden">
                            <button
                                onClick={() => toggleAccordion('planning')}
                                className="w-full p-10 text-left flex items-start justify-between gap-4"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-zinc-300 rounded-2xl flex items-center justify-center">
                                            <svg className="w-7 h-7 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl">Planning</h3>
                                    </div>
                                    <svg
                                        className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {openAccordions.planning ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        )}
                                    </svg>
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openAccordions.planning ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="px-10 pb-10">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop"
                                alt="Architecture"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8">
                        <div className="bg-[#F2F2F2] rounded-3xl text-gray-600 overflow-hidden">
                            <button
                                onClick={() => toggleAccordion('buildings')}
                                className="w-full p-10 text-left flex items-start justify-between gap-4"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-zinc-300 rounded-2xl flex items-center justify-center">
                                            <svg className="w-7 h-7 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl">Buildings</h3>
                                    </div>
                                    <svg
                                        className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {openAccordions.buildings ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        )}
                                    </svg>
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openAccordions.buildings ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="px-10 pb-10">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=700&fit=crop"
                                alt="Architecture"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </div>

                        <div className="bg-[#F2F2F2] rounded-3xl text-gray-600 overflow-hidden">
                            <button
                                onClick={() => toggleAccordion('projects')}
                                className="w-full p-10 text-left flex items-start justify-between gap-4"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-zinc-300 rounded-2xl flex items-center justify-center">
                                            <svg className="w-7 h-7 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl">Our Projects</h3>
                                    </div>
                                    <svg
                                        className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {openAccordions.projects ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        )}
                                    </svg>
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openAccordions.projects ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="px-10 pb-10">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col gap-6">
                    <div className="h-[300px]">
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop"
                            alt="Architecture"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    <div className="bg-[#F2F2F2] rounded-3xl text-gray-600 overflow-hidden">
                        <button
                            onClick={() => toggleAccordion('planning')}
                            className="w-full p-8 text-left flex items-start justify-between gap-4"
                        >
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-zinc-300 rounded-2xl flex items-center justify-center">
                                        <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl">Planning</h3>
                                </div>
                                <svg
                                    className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {openAccordions.planning ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    )}
                                </svg>
                            </div>
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out ${openAccordions.planning ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            style={{ overflow: 'hidden' }}
                        >
                            <div className="px-8 pb-8">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-[300px]">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=700&fit=crop"
                            alt="Architecture"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    <div className="bg-[#F2F2F2] rounded-3xl text-gray-600 overflow-hidden">
                        <button
                            onClick={() => toggleAccordion('buildings')}
                            className="w-full p-8 text-left flex items-start justify-between gap-4"
                        >
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-zinc-300 rounded-2xl flex items-center justify-center">
                                        <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl">Buildings</h3>
                                </div>
                                <svg
                                    className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {openAccordions.buildings ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    )}
                                </svg>
                            </div>
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out ${openAccordions.buildings ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            style={{ overflow: 'hidden' }}
                        >
                            <div className="px-8 pb-8">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-[300px]">
                        <img
                            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop"
                            alt="Architecture"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    <div className="bg-[#F2F2F2] rounded-3xl text-gray-600 overflow-hidden">
                        <button
                            onClick={() => toggleAccordion('projects')}
                            className="w-full p-8 text-left flex items-start justify-between gap-4"
                        >
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-zinc-300 rounded-2xl flex items-center justify-center">
                                        <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl">Our Projects</h3>
                                </div>
                                <svg
                                    className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {openAccordions.projects ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    )}
                                </svg>
                            </div>
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out ${openAccordions.projects ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            style={{ overflow: 'hidden' }}
                        >
                            <div className="px-8 pb-8">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}