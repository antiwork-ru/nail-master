"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggle = () => setVisible(window.scrollY > 500);
        window.addEventListener("scroll", toggle, { passive: true });
        return () => window.removeEventListener("scroll", toggle);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed left-4 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-dark/40 text-white shadow-lg backdrop-blur-sm transition hover:bg-dark/60 sm:right-6 sm:bottom-8 sm:h-12 sm:w-12"
                    style={{ bottom: `calc(1.5rem + env(safe-area-inset-bottom, 0px))` }}
                >
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
}