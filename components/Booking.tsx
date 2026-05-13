// src/components/Booking.tsx
"use client";
import { motion } from "framer-motion";

const messengers = [
    {
        name: "WhatsApp",
        href: "https://wa.me/79123456789?text=Здравствуйте!%20Хочу%20записаться%20на%20маникюр",
    },
    {
        name: "Telegram",
        href: "https://t.me/your_username",
    },
    {
        name: "Max",
        href: "https://max.ru/your_profile",
    },
];

export default function Booking() {
    return (
        <section id="booking" className="relative overflow-hidden bg-beige/10 py-12 sm:py-12">
            {/* Декоративный фон: лёгкие золотые точки */}
            <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
                <p className="text-sm uppercase tracking-[.3em] text-gold">Стать частью истории</p>
                <h2 className="mt-3 font-heading text-4xl text-dark sm:text-5xl">Записаться</h2>
                <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <p className="mt-4 text-dark/70">Выберите удобный мессенджер — я отвечаю за пару минут</p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                    {messengers.map((m) => (
                        <a
                            key={m.name}
                            href={m.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-gold bg-gold px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-transparent hover:text-gold sm:px-8 sm:py-4 sm:text-lg"
                        >
                            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {m.name}
                        </a>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}