"use client";
import React, { useState, useEffect } from "react";
import { ZoomIn, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

type GalleryImage = {
    url: string;
    height: string;
};

const GalleryComponent: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    useEffect(() => {
        setIsVisible(true);

        AOS.init({
            duration: 900,
            once: true,
            offset: 80,
            easing: "ease-out",
        });
        AOS.refresh();
    }, []);

    const images: GalleryImage[] = [
        { url: "./gallery/gallery_1.jpg", height: "h-full" },
        { url: "./gallery/gallery_2.jpg", height: "h-full" },
        { url: "./gallery/gallery_3.jpg", height: "h-full" },
        { url: "./gallery/gallery_4.jpg", height: "h-full" },
        { url: "./gallery/gallery_5.jpg", height: "h-full" },
        { url: "./gallery/gallery_6.jpg", height: "h-full" },
        { url: "./gallery/gallery_7.jpg", height: "h-full" },
        { url: "./gallery/gallery_8.jpg", height: "h-full" },
        { url: "./gallery/gallery_9.jpg", height: "h-full" },
        { url: "./gallery/gallery_10.jpg", height: "h-full" },
        { url: "./gallery/gallery_11.jpg", height: "h-full" },
    ];

    const openModal = (image: GalleryImage) => {
        setSelectedImage(image);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = "unset";
    };

    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1
                    data-aos="fade-down"
                    className={`text-4xl font-medium text-center text-gray-800 mb-6`}
                >
                    Our Gallery
                </h1>

                <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                            className={`break-inside-avoid group cursor-pointer`}
                            onClick={() => openModal(image)}
                        >
                            <div className="relative overflow-hidden rounded-lg bg-gray-200 transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105">
                                <img
                                    src={image.url}
                                    alt=""
                                    className={`w-full ${image.height} object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-75`}
                                />

                                <div className="absolute inset-0 bg-gray-900 opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white rounded-full p-3 shadow-lg">
                                        <ZoomIn className="w-6 h-6 text-gray-800" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                    onClick={closeModal}
                    data-aos="zoom-in"
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200 shadow-lg z-10"
                    >
                        <X className="w-6 h-6 text-gray-800" />
                    </button>

                    <div
                        className="relative max-w-7xl max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.url}
                            alt=""
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            data-aos="zoom-in"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryComponent;
