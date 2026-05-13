"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const works = [
    { id: 1, src: "/work-1.jpg", category: "нюд", alt: "Нюдовый маникюр" },
    { id: 2, src: "/work-2.jpg", category: "френч", alt: "Френч" },
    { id: 3, src: "/work-3.jpg", category: "дизайн", alt: "Дизайн" },
    { id: 4, src: "/work-4.jpg", category: "наращивание", alt: "Наращивание" },
    { id: 5, src: "/work-5.jpg", category: "нюд", alt: "Нюд" },
    { id: 6, src: "/work-6.jpg", category: "дизайн", alt: "Яркий дизайн" },
];

const categories = ["все", "нюд", "френч", "дизайн", "наращивание"];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("все");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filtered =
        activeCategory === "все"
            ? works
            : works.filter((w) => w.category === activeCategory);

    return (
        <section id="portfolio" className="bg-ivory py-12">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-center font-heading text-4xl text-dark">Мои работы</h2>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2 px-4 sm:gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`rounded-full border px-3 py-1.5 text-xs font-medium capitalize transition sm:px-5 sm:py-2 sm:text-sm ${activeCategory === cat
                                ? "border-gold bg-gold text-white"
                                : "border-dark/20 text-dark/70 hover:border-gold"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <motion.div layout className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                    <AnimatePresence>
                        {filtered.map((work) => (
                            <motion.div
                                key={work.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl shadow-md"
                                onClick={() => setSelectedImage(work.src)}
                            >
                                <Image
                                    src={work.src}
                                    alt={work.alt}
                                    fill
                                    className="object-cover transition hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Лайтбокс */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-h-[90vh] max-w-[90vw]">
                        <Image
                            src={selectedImage}
                            alt="Просмотр работы"
                            width={800}
                            height={800}
                            className="max-h-[85vh] rounded-2xl object-contain"
                        />
                        <button
                            className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-dark shadow"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}