"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export function HeaderComponent() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowWidth = window.innerWidth;

            let heroHeight;
            if (windowWidth < 768) {
                heroHeight = window.innerHeight * 0.6;
            } else if (windowWidth < 1024) {
                heroHeight = window.innerHeight * 0.4;
            } else {
                heroHeight = window.innerHeight;
            }

            setIsScrolled(scrollPosition > heroHeight * 0.6);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    // Disable scrolling when sidebar open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    }, [isMenuOpen]);

    const menuItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Project", href: "#project" },
        { name: "Specification", href: "#specification" },
        { name: "Location", href: "#location" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            {/* ==== HEADER ==== */}
            <header className="fixed w-full z-50 transition-all duration-300">
                <div
                    className={`flex justify-between items-center px-4 py-1.5 shadow transition-all duration-300 ${isScrolled ? "bg-white text-black" : "bg-white/10 text-white"
                        }`}
                >
                    <div>
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                window.location.hash = "home";
                            }}
                        >
                            <img
                                src="./logo.svg"
                                width={100}
                                height={100}
                                alt="logo"
                                className="w-16"
                            />
                        </a>
                    </div>

                    <button onClick={() => setIsMenuOpen(true)}>
                        <RiMenu3Line className="text-2xl" />
                    </button>
                </div>
            </header>

            {/* ==== SIDEBAR OVERLAY ==== */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/70 z-50 transition-all duration-500">
                    <div className="grid grid-cols-2 h-full">

                        {/* LEFT SIDE */}
                        <div className="h-full bg-zinc-400 text-white relative">

                            <div className="absolute left-4 top-4">
                                <img
                                    src="./logo.svg"
                                    width={100}
                                    height={100}
                                    alt="logo"
                                    className="w-16"
                                />
                            </div>

                            <div className="absolute bottom-4 left-4 flex flex-col gap-4">
                                <div className="w-8 h-8 p-1 rounded-full bg-gray-700 flex justify-center items-center">
                                    <Facebook className="w-4" />
                                </div>
                                <div className="w-8 h-8 p-1 rounded-full bg-gray-700 flex justify-center items-center">
                                    <Instagram className="w-4" />
                                </div>
                                <div className="w-8 h-8 p-1 rounded-full bg-gray-700 flex justify-center items-center">
                                    <Linkedin className="w-4" />
                                </div>
                            </div>

                        </div>

                        {/* RIGHT SIDE (Menu) */}
                        <div className="bg-white h-full relative">

                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute right-2 top-2"
                            >
                                <RiCloseLine className="text-4xl text-gray-700" />
                            </button>

                            <div className="h-full flex justify-center items-center">
                                <nav className="flex flex-col items-center space-y-8">
                                    {menuItems.map((item, index) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-4xl md:text-5xl lg:text-4xl font-medium text-gray-800 hover:text-gray-500 transition-all duration-300 hover:scale-105"
                                            style={{
                                                animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            {/* ANIMATION */}
            <style jsx>{`
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes leftSlide {
                    from { transform: translateX(-100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }

                @keyframes rightSlide {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .animate-leftSlide {
                    animation: leftSlide 0.45s ease-out;
                }

                .animate-rightSlide {
                    animation: rightSlide 0.45s ease-out;
                }

                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out;
                }
            `}
            </style>

        </>
    );
}
