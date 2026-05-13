"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Фото мастера, сертификатов и данные об обучении
const masterPhoto = "/master.jpg";
const certificates = [
    { src: "/cert-1.jpg", alt: "Сертификат ParisNail", school: "ParisNail", year: "2023" },
    { src: "/cert-2.jpg", alt: "Диплом NailPro", school: "NailPro", year: "2022" },
    { src: "/cert-3.jpg", alt: "Курс «Аппаратный маникюр»", school: "Beauty Academy", year: "2024" },
    // Добавь сколько нужно
];

const educationList = [
    { school: "ParisNail", course: "Маникюр и педикюр с нуля", year: "2022" },
    { school: "NailPro", course: "Повышение квалификации: дизайн и моделирование", year: "2023" },
    { school: "Beauty Academy", course: "Аппаратный маникюр и проблемные ногти", year: "2024" },
];

export default function About() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);

    return (
        <section id="about" className="bg-ivory py-12">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="font-heading text-4xl text-dark">О мастере</h2>

                <div className="mt-12 grid gap-12 lg:grid-cols-2">
                    {/* Левая колонка – фото мастера */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative mx-auto w-full max-w-md"
                    >
                        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src={masterPhoto}
                                alt="Мастер"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>

                    {/* Правая колонка – текст и образование */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <p className="text-lg leading-relaxed text-dark/80">
                            Привет! Меня зовут <span className="font-semibold text-dark">Анисимова Анастасия</span>. Я создаю маникюр,
                            который становится продолжением твоего стиля. Для меня важны не только безупречное покрытие,
                            но и здоровье ногтей, комфорт и эстетика.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-dark/80">
                            Постоянно совершенствуюсь, чтобы предлагать тебе только актуальные
                            техники и безопасные материалы.
                        </p>

                        {/* Блок «Образование» с текстом */}
                        <div className="mt-8">
                            <h3 className="font-heading text-2xl text-dark">Где я училась</h3>
                            <ul className="mt-4 space-y-3">
                                {educationList.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-dark/80">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                                        <span>
                                            <span className="font-medium text-dark">{item.school}</span> — {item.course} ({item.year})
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Сертификаты в компактном слайдере */}
                        <div className="mt-8">
                            <h3 className="font-heading text-2xl text-dark">Сертификаты</h3>
                            <p className="mt-1 text-sm text-dark/50">Нажми, чтобы посмотреть</p>
                            <div className="mt-4 flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
                                {certificates.map((cert, i) => (
                                    <motion.button
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedCert(cert.src)}
                                        className="relative h-24 w-24 flex-shrink-0 snap-start overflow-hidden rounded-xl border-2 border-gold/20 shadow-md transition hover:border-gold"
                                    >
                                        <Image
                                            src={cert.src}
                                            alt={cert.alt}
                                            fill
                                            className="object-cover"
                                            sizes="96px"
                                        />
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Модальное окно для просмотра сертификата */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-h-[90vh] max-w-[90vw]"
                        >
                            <Image
                                src={selectedCert}
                                alt="Сертификат"
                                width={800}
                                height={600}
                                className="max-h-[85vh] rounded-2xl object-contain shadow-2xl"
                            />
                            <button
                                className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-dark shadow hover:bg-gold hover:text-white transition"
                                onClick={() => setSelectedCert(null)}
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}