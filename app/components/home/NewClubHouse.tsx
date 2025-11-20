"use client"
import { useState } from 'react';
import { Sparkles, Home, Palette, Users } from 'lucide-react';

export default function NewClubHouse() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const cards = [
        {
            title: "Timeless Design",
            description: "We craft spaces that transcend trends, blending classic aesthetics with modern functionality for enduring appeal.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop",
            icon: Sparkles,
            color: "from-gray-900 to-zinc-800"
        },
        {
            title: "Modern Living",
            description: "Experience contemporary luxury with smart home integration and sustainable materials that define modern elegance.",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop",
            icon: Home,
            color: "from-gray-900 to-zinc-800"
        },
        {
            title: "Artistic Vision",
            description: "Every detail is curated with artistic precision, transforming your space into a masterpiece of design and innovation.",
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop",
            icon: Palette,
            color: "from-zinc-900 to-gray-800"
        },
        {
            title: "Community First",
            description: "Designed for connection and collaboration, our spaces foster relationships and create lasting memories together.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
            icon: Users,
            color: "from-zinc-900 to-gray-800"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-2 md:px-6">
            <div className='w-[96%] mx-auto'>
                <div className="max-w-7xl mx-auto mb-8">
                    <h1 className="text-4xl font-medium text-gray-800 mb-2">Our Philosophy</h1>
                    <p className="text-gray-600">Click any card to explore more</p>
                </div>

                <div className=' '>
                    <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px]">
                        {cards.map((card, index) => {
                            const Icon = card.icon;
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    onClick={() => setActiveIndex(isActive ? null : index)}
                                    className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-in-out shadow-lg hover:shadow-2xl min-h-fit lg:min-h-0 ${isActive ? 'flex-[3] lg:flex-[3]' : 'flex-1'
                                        }`}
                                    style={{
                                        backgroundImage: `url('${card.image}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    {/* Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.color} transition-opacity duration-700 ${isActive ? 'opacity-75' : 'opacity-60'
                                        }`} />

                                    {/* Content */}
                                    <div className="relative h-full flex flex-col justify-between p-6 text-white">
                                        <div>
                                            <div className="mb-4 transition-all duration-700">
                                                <Icon size={isActive ? 48 : 32} className="transition-all duration-700" />
                                            </div>

                                            <h2 className={`font-bold mb-3 transition-all duration-700 ${isActive ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                                                }`}>
                                                {card.title}
                                            </h2>

                                            <div className={`overflow-hidden transition-all duration-700 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                }`}>
                                                <p className="text-lg leading-relaxed text-white/95">
                                                    {card.description}
                                                </p>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}