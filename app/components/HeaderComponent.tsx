"use client"
import { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

export function HeaderComponent() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowWidth = window.innerWidth;

            // Match your HeroComponent heights:
            // Mobile: 60vh, Tablet (md): 40vh, Desktop (lg): 100vh
            let heroHeight;
            if (windowWidth < 768) {
                // Mobile
                heroHeight = window.innerHeight * 0.6;
            } else if (windowWidth < 1024) {
                // Tablet (md)
                heroHeight = window.innerHeight * 0.4;
            } else {
                // Desktop (lg)
                heroHeight = window.innerHeight;
            }

            // Change header when scrolled past 80% of hero height
            if (scrollPosition > heroHeight * 0.6) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        // Run on mount and scroll
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Project', href: '#project' },
        { name: 'Specification', href: '#specification' },
        { name: 'Location', href: '#location' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <header className="fixed w-full z-50 transition-all duration-300">
                <div className={`flex justify-between items-center px-4 py-1.5 border-gray-100 shadow transition-all duration-300 ${isScrolled
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white'
                    }`}>
                    <div>
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                window.location.hash = "home"; // optional
                            }}
                            className="cursor-pointer"
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

                    <div>
                        <button onClick={() => setIsMenuOpen(true)} className='cursor-pointer'>
                            <RiMenu3Line className="text-2xl" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Sidebar Menu */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMenuOpen(false)}
            >
                <div
                    className={`fixed top-0 right-0 h-full w-full bg-white transform transition-transform duration-500 ease-in-out overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <div className="flex justify-end p-6">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
                        >
                            <RiCloseLine className="text-4xl" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex flex-col items-center justify-center h-[calc(100%-100px)] space-y-8">
                        {menuItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-4xl md:text-5xl lg:text-4xl font-medium text-gray-800 hover:text-gray-500 transition-all duration-300 transform hover:scale-105"
                                style={{
                                    animation: isMenuOpen ? `slideIn 0.5s ease-out ${index * 0.1}s both` : 'none'
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
}