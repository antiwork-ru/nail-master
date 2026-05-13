"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingBookingButton() {
    const [visible, setVisible] = useState(false);
    const [isPastHero, setIsPastHero] = useState(false);
    const [isBookingVisible, setIsBookingVisible] = useState(false);

    // Проверяем, прокрутили ли Hero (80% высоты экрана)
    useEffect(() => {
        const handleScroll = () => {
            setIsPastHero(window.scrollY > window.innerHeight * 0.8);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Наблюдаем за секцией booking
    useEffect(() => {
        const bookingSection = document.getElementById("booking");
        if (!bookingSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsBookingVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(bookingSection);
        return () => observer.disconnect();
    }, []);

    // Кнопка видна, только если мы прокрутили Hero и не находимся в секции записи
    useEffect(() => {
        setVisible(isPastHero && !isBookingVisible);
    }, [isPastHero, isBookingVisible]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.a
                    href="#booking"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    className="fixed right-4 bottom-6 z-40 flex items-center gap-2 rounded-full border-2 border-gold bg-gold px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-gold sm:right-8 sm:bottom-8 sm:px-6 sm:py-3 sm:text-base"
                    style={{ bottom: `calc(1.5rem + env(safe-area-inset-bottom, 0px))` }}
                >
                    {/* Иконка (всегда) */}
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {/* Текст — появляется только на sm и шире */}
                    <span className="hidden sm:inline">Записаться</span>
                </motion.a>
            )}
        </AnimatePresence>
    );
}